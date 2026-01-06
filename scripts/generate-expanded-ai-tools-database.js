const fs = require('fs');

// Required Categories & Examples
const aiCategories = {
  text_generation: ['ChatGPT', 'Claude', 'Jasper', 'Copy.ai', 'Writer'],
  image_generation: ['Midjourney', 'DALL-E 3', 'Stable Diffusion', 'Leonardo AI'],
  video_ai: ['Runway', 'Pika Labs', 'HeyGen', 'Synthesia'],
  audio_ai: ['Murf AI', 'ElevenLabs', 'Adobe Podcast'],
  code_ai: ['GitHub Copilot', 'Replit Ghostwriter', 'Tabnine', 'Codeium'],
  productivity: ['Notion AI', 'Grammarly', 'QuillBot', 'Otter.ai'],
  research: ['Consensus', 'Elicit', 'Scite', 'ChatPDF'],
  business: ['Jasper Business', 'Copy.ai Enterprise', 'Writer for Teams']
};

// Feature options for generating tools
const featuresOptions = [
  &quot;AI-powered&quot;, &quot;cloud-based&quot;, &quot;real-time processing&quot;, &quot;API access&quot;, 
  &quot;mobile app&quot;, &quot;chrome extension&quot;, &quot;multi-language support&quot;, &quot;collaboration tools&quot;,
  &quot;analytics dashboard&quot;, &quot;customizable&quot;, &quot;integrations&quot;, &quot;automation&quot;,
  &quot;security features&quot;, &quot;scalable&quot;, &quot;user-friendly&quot;, &quot;enterprise-grade&quot;,
  &quot;natural language processing&quot;, &quot;machine learning&quot;, &quot;deep learning&quot;, &quot;neural networks&quot;,
  &quot;predictive analytics&quot;, &quot;data visualization&quot;, &quot;workflow automation&quot;, &quot;document parsing&quot;,
  &quot;voice recognition&quot;, &quot;image recognition&quot;, &quot;pattern recognition&quot;, &quot;anomaly detection&quot;,
  &quot;recommendation engine&quot;, &quot;personalization&quot;, &quot;content generation&quot;, &quot;summarization&quot;
];

// Pricing plan options
const pricingPlans = [&quot;Basic&quot;, &quot;Pro&quot;, &quot;Enterprise&quot;, &quot;Team&quot;, &quot;Starter&quot;, &quot;Premium&quot;, &quot;Business&quot;, &quot;Professional&quot;];

// Generate additional tools to reach 1000+ AI tools
const generateAdditionalTools = () => {
  const additionalTools = [];
  const prefixes = [
    &quot;AI&quot;, &quot;Smart&quot;, &quot;NextGen&quot;, &quot;Pro&quot;, &quot;Ultra&quot;, &quot;Advanced&quot;, &quot;Enterprise&quot;, &quot;Premium&quot;,
    &quot;Intelli&quot;, &quot;Neuro&quot;, &quot;Cogni&quot;, &quot;Deep&quot;, &quot;Quantum&quot;, &quot;Nexus&quot;, &quot;Synergy&quot;, &quot;Omni&quot;,
    &quot;Hyper&quot;, &quot;Meta&quot;, &quot;Synth&quot;, &quot;Cerebro&quot;, &quot;Neura&quot;, &quot;Cortex&quot;, &quot;Mind&quot;, &quot;Brain&quot;,
    &quot;Logic&quot;, &quot;Sense&quot;, &quot;Vision&quot;, &quot;Insight&quot;, &quot;Clarity&quot;, &quot;Focus&quot;, &quot;Precision&quot;, &quot;Edge&quot;
  ];
  const suffixes = [
    &quot;Assistant&quot;, &quot;Platform&quot;, &quot;Studio&quot;, &quot;Lab&quot;, &quot;Engine&quot;, &quot;Suite&quot;, &quot;Hub&quot;, &quot;Center&quot;,
    &quot;Master&quot;, &quot;Genius&quot;, &quot;Bot&quot;, &quot;Mind&quot;, &quot;Brain&quot;, &quot;Logic&quot;, &quot;Sense&quot;, &quot;Vision&quot;,
    &quot;Analyzer&quot;, &quot;Creator&quot;, &quot;Optimizer&quot;, &quot;Manager&quot;, &quot;Navigator&quot;, &quot;Explorer&quot;, &quot;Builder&quot;,
    &quot;Architect&quot;, &quot;Designer&quot;, &quot;Developer&quot;, &quot;Innovator&quot;, &quot;Transformer&quot;, &quot;Evolver&quot;
  ];
  const categories = Object.keys(aiCategories);
  
  // Generate 1000 tools
  for (let i = 0; i < 1000; i++) {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];
    
    // Generate random features (4-8 features)
    const numFeatures = Math.floor(Math.random() * 5) + 4;
    const features = [];
    for (let j = 0; j < numFeatures; j++) {
      const feature = featuresOptions[Math.floor(Math.random() * featuresOptions.length)];
      if (!features.includes(feature)) {
        features.push(feature);
      }
    }
    
    // Generate random pricing plans (1-4 plans)
    const numPlans = Math.floor(Math.random() * 4) + 1;
    const plans = [];
    for (let j = 0; j < numPlans; j++) {
      const plan = pricingPlans[Math.floor(Math.random() * pricingPlans.length)];
      if (!plans.includes(plan)) {
        plans.push(plan);
      }
    }
    
    // Randomly decide if free/paid
    const hasFree = Math.random() > 0.4;
    const hasPaid = Math.random() > 0.1;
    
    const tool = {
      name: `${prefix} ${suffix} ${i + 1}`,
      category: [category],
      description: `Advanced ${category.replace(&apos;_&apos;, &apos; &apos;)} solution with cutting-edge AI capabilities for professionals and businesses. Features include ${features.slice(0, 3).join(&apos;, &apos;)}, and more.`,
      pricing: { 
        free: hasFree, 
        paid: hasPaid, 
        plans: hasPaid ? plans : []
      },
      features: features,
      website: `https://${prefix.toLowerCase()}${suffix.toLowerCase()}${i + 1}.ai`,
      launch_date: new Date(Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)).toISOString().split(&apos;T&apos;)[0],
      last_updated: new Date().toISOString().split(&apos;T&apos;)[0]
    };
    
    additionalTools.push(tool);
  }
  
  return additionalTools;
};

// Generate all tools
const allTools = generateAdditionalTools();

// Write to a JSON file
const outputPath = &apos;./data/ai-tools-database-1000.json&apos;;
fs.writeFileSync(outputPath, JSON.stringify(allTools, null, 2));
console.log(`Successfully generated ${allTools.length} AI tools and saved to: ${outputPath}`);