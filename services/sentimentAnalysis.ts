/**
 * Sentiment analysis service for search results
 */

// Sentiment categories
export type Sentiment = &apos;very-positive&apos; | &apos;positive&apos; | &apos;neutral&apos; | &apos;negative&apos; | &apos;very-negative&apos;;

// Sentiment analysis result
export interface SentimentAnalysisResult {
  sentiment: Sentiment;
  confidence: number;
  positiveWords: string[];
  negativeWords: string[];
  neutralWords: string[];
  keyPhrases: string[];
}

// Sentiment scores
export interface SentimentScores {
  positive: number;
  negative: number;
  neutral: number;
}

/**
 * Lexicon-based sentiment analysis
 */
const sentimentLexicon = {
  // Positive words with weights
  positive: new Map<string, number>([
    [&apos;excellent&apos;, 4], [&apos;outstanding&apos;, 4], [&apos;amazing&apos;, 4], [&apos;wonderful&apos;, 4], [&apos;fantastic&apos;, 4],
    [&apos;great&apos;, 3], [&apos;good&apos;, 3], [&apos;awesome&apos;, 3], [&apos;brilliant&apos;, 3], [&apos;superb&apos;, 3],
    [&apos;nice&apos;, 2], [&apos;fine&apos;, 2], [&apos;decent&apos;, 2], [&apos;satisfactory&apos;, 2], [&apos;acceptable&apos;, 2],
    [&apos;ok&apos;, 1], [&apos;okay&apos;, 1], [&apos;alright&apos;, 1], [&apos;beneficial&apos;, 3], [&apos;helpful&apos;, 2],
    [&apos;useful&apos;, 2], [&apos;effective&apos;, 3], [&apos;efficient&apos;, 3], [&apos;reliable&apos;, 3], [&apos;valuable&apos;, 3],
    [&apos;innovative&apos;, 3], [&apos;creative&apos;, 2], [&apos;intelligent&apos;, 3], [&apos;smart&apos;, 2], [&apos;powerful&apos;, 3],
    [&apos;fast&apos;, 2], [&apos;quick&apos;, 2], [&apos;easy&apos;, 2], [&apos;simple&apos;, 2], [&apos;convenient&apos;, 2],
    [&apos;affordable&apos;, 2], [&apos;cheap&apos;, 1], [&apos;inexpensive&apos;, 1], [&apos;reasonable&apos;, 2], [&apos;fair&apos;, 1]
  ]),
  
  // Negative words with weights
  negative: new Map<string, number>([
    [&apos;terrible&apos;, 4], [&apos;awful&apos;, 4], [&apos;horrible&apos;, 4], [&apos;dreadful&apos;, 4], [&apos;atrocious&apos;, 4],
    [&apos;bad&apos;, 3], [&apos;poor&apos;, 3], [&apos;mediocre&apos;, 3], [&apos;inferior&apos;, 3], [&apos;unsatisfactory&apos;, 3],
    [&apos;disappointing&apos;, 3], [&apos;frustrating&apos;, 3], [&apos;annoying&apos;, 3], [&apos;irritating&apos;, 3], [&apos;problematic&apos;, 3],
    [&apos;difficult&apos;, 2], [&apos;complicated&apos;, 2], [&apos;hard&apos;, 2], [&apos;slow&apos;, 2], [&apos;ineffective&apos;, 3],
    [&apos;useless&apos;, 3], [&apos;worthless&apos;, 4], [&apos;pointless&apos;, 3], [&apos;waste&apos;, 3], [&apos;expensive&apos;, 2],
    [&apos;costly&apos;, 2], [&apos;overpriced&apos;, 3], [&apos;unreliable&apos;, 3], [&apos;inefficient&apos;, 3], [&apos;broken&apos;, 3],
    [&apos;buggy&apos;, 2], [&apos;flawed&apos;, 2], [&apos;defective&apos;, 3], [&apos;dangerous&apos;, 3], [&apos;risky&apos;, 2],
    [&apos;confusing&apos;, 2], [&apos;complex&apos;, 2], [&apos;cumbersome&apos;, 2], [&apos;tedious&apos;, 2], [&apos;boring&apos;, 2]
  ])
};

/**
 * Intensity modifiers that affect sentiment weight
 */
const intensityModifiers = new Map<string, number>([
  [&apos;very&apos;, 1.5], [&apos;extremely&apos;, 2.0], [&apos;incredibly&apos;, 2.0], [&apos;absolutely&apos;, 1.8], [&apos;totally&apos;, 1.5],
  [&apos;completely&apos;, 1.8], [&apos;quite&apos;, 1.3], [&apos;rather&apos;, 1.2], [&apos;fairly&apos;, 1.1], [&apos;somewhat&apos;, 0.8],
  [&apos;slightly&apos;, 0.6], [&apos;barely&apos;, 0.4], [&apos;hardly&apos;, 0.3], [&apos;not&apos;, -1.0], [&apos;no&apos;, -1.0]
]);

/**
 * Negation words that invert sentiment
 */
const negationWords = new Set([&apos;not&apos;, &apos;no&apos;, &apos;never&apos;, &apos;neither&apos;, &apos;nowhere&apos;, &apos;nobody&apos;, &apos;nothing&apos;, &apos;none&apos;]);

/**
 * Analyze sentiment of text
 */
export function analyzeSentiment(text: string): SentimentAnalysisResult {
  if (!text) {
    return {
      sentiment: &apos;neutral&apos;,
      confidence: 0,
      positiveWords: [],
      negativeWords: [],
      neutralWords: [],
      keyPhrases: []
    };
  }
  
  const words = text.toLowerCase().match(/\b(\w+)\b/g) || [];
  const positiveWords: string[] = [];
  const negativeWords: string[] = [];
  const neutralWords: string[] = [];
  const keyPhrases: string[] = [];
  
  let positiveScore = 0;
  let negativeScore = 0;
  let neutralScore = 0;
  
  // Process words with context
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const nextWord = words[i + 1];
    const prevWord = words[i - 1];
    
    // Check for intensity modifiers
    let intensity = 1;
    if (prevWord && intensityModifiers.has(prevWord)) {
      intensity = intensityModifiers.get(prevWord) || 1;
    }
    
    // Check for negation
    const isNegated = prevWord && negationWords.has(prevWord);
    
    // Check sentiment
    if (sentimentLexicon.positive.has(word)) {
      let score = sentimentLexicon.positive.get(word) || 1;
      score *= intensity;
      if (isNegated) {
        negativeScore += score;
        negativeWords.push(`${prevWord ? prevWord + ' ' : ''}${word}`);
      } else {
        positiveScore += score;
        positiveWords.push(word);
      }
    } else if (sentimentLexicon.negative.has(word)) {
      let score = sentimentLexicon.negative.get(word) || 1;
      score *= intensity;
      if (isNegated) {
        positiveScore += score;
        positiveWords.push(`${prevWord ? prevWord + ' ' : ''}${word}`);
      } else {
        negativeScore += score;
        negativeWords.push(word);
      }
    } else {
      neutralWords.push(word);
    }
  }
  
  // Extract key phrases (3-5 word sequences with sentiment words)
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  sentences.forEach(sentence => {
    const sentWords = sentence.toLowerCase().match(/\b(\w+)\b/g) || [];
    for (let i = 0; i < sentWords.length - 2; i++) {
      const phrase = sentWords.slice(i, Math.min(i + 5, sentWords.length)).join(' ');
      const hasSentimentWord = sentWords.slice(i, i + 5).some(word => 
        sentimentLexicon.positive.has(word) || sentimentLexicon.negative.has(word)
      );
      
      if (hasSentimentWord && phrase.length > 10) {
        keyPhrases.push(sentence.trim());
        break; // One key phrase per sentence
      }
    }
  });
  
  // Calculate overall sentiment
  const totalScore = positiveScore + negativeScore + neutralScore;
  const normalizedPositive = totalScore > 0 ? positiveScore / totalScore : 0;
  const normalizedNegative = totalScore > 0 ? negativeScore / totalScore : 0;
  
  let sentiment: Sentiment = 'neutral';
  let confidence = 0;
  
  if (normalizedPositive > 0.6) {
    sentiment = 'very-positive';
    confidence = normalizedPositive;
  } else if (normalizedPositive > 0.4) {
    sentiment = 'positive';
    confidence = normalizedPositive;
  } else if (normalizedNegative > 0.6) {
    sentiment = 'very-negative';
    confidence = normalizedNegative;
  } else if (normalizedNegative > 0.4) {
    sentiment = 'negative';
    confidence = normalizedNegative;
  } else {
    sentiment = 'neutral';
    confidence = 1 - Math.abs(normalizedPositive - normalizedNegative);
  }
  
  // Ensure confidence is between 0 and 1
  confidence = Math.max(0, Math.min(1, confidence));
  
  return {
    sentiment,
    confidence,
    positiveWords: Array.from(new Set(positiveWords)).slice(0, 10),
    negativeWords: Array.from(new Set(negativeWords)).slice(0, 10),
    neutralWords: Array.from(new Set(neutralWords)).slice(0, 10),
    keyPhrases: Array.from(new Set(keyPhrases)).slice(0, 5)
  };
}

/**
 * Analyze sentiment of multiple texts
 */
export function analyzeSentiments(texts: string[]): SentimentAnalysisResult[] {
  return texts.map(text => analyzeSentiment(text));
}

/**
 * Get sentiment distribution across multiple texts
 */
export function getSentimentDistribution(results: SentimentAnalysisResult[]): Record<Sentiment, number> {
  const distribution = {
    'very-positive': 0,
    'positive': 0,
    'neutral': 0,
    'negative': 0,
    'very-negative': 0
  };
  
  results.forEach(result => {
    distribution[result.sentiment]++;
  });
  
  return distribution;
}

/**
 * Filter results by sentiment
 */
export function filterBySentiment(
  results: Array<{ id: string; content: string; [key: string]: any }>,
  sentiment: Sentiment | Sentiment[]
): Array<{ id: string; content: string; sentiment: SentimentAnalysisResult; [key: string]: any }> {
  const sentimentArray = Array.isArray(sentiment) ? sentiment : [sentiment];
  
  return results
    .map(result => ({
      ...result,
      sentiment: analyzeSentiment(result.content)
    }))
    .filter(result => sentimentArray.includes(result.sentiment.sentiment));
}