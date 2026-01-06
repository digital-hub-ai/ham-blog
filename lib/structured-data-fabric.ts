import { KnowledgeNode } from &apos;./adaptive-stream&apos;;

export interface StructuredDataConfig {
  &apos;@context&apos;: string;
  &apos;@type&apos;: string;
  headline?: string;
  abstract?: string;
  answerType?: string;
  competencyRequired?: string;
  assesses?: string;
  educationalLevel?: string;
  learningResourceType?: string;
  author?: {
    &apos;@type&apos;: string;
    name: string;
    credential?: string;
    url?: string;
    sameAs?: string[];
  };
  mentions?: Array<{
    '@type': string;
    name: string;
    url?: string;
    description?: string;
  }>;
  datePublished?: string;
  dateModified?: string;
  mainEntityOfPage?: {
    &apos;@type&apos;: string;
    &apos;@id&apos;: string;
  };
  image?: string[];
  publisher?: {
    &apos;@type&apos;: string;
    name: string;
    logo?: {
      &apos;@type&apos;: string;
      url: string;
    };
  };
  aggregateRating?: {
    &apos;@type&apos;: string;
    ratingValue: string;
    reviewCount: string;
    bestRating: string;
    worstRating: string;
  };
  review?: Array<{
    '@type': string;
    author: {
      '@type': string;
      name: string;
    };
    reviewRating: {
      '@type': string;
      ratingValue: string;
    };
    reviewBody: string;
  }>;
}

export interface FAQItem {
  question: string;
  answer: string;
  acceptedAnswer?: string;
}

export interface HowToStep {
  '@type': string;
  name: string;
  text: string;
  image?: string;
  tool?: string;
  supply?: string;
  totalTime?: string;
}

export class StructuredDataFabric {
  private baseUrl: string;

  constructor(baseUrl: string = 'https://ai-vault.com') {
    this.baseUrl = baseUrl;
  }

  /**
   * Generate TechArticle structured data
   */
  generateTechArticle(node: KnowledgeNode): StructuredDataConfig {
    const entities = this.extractEntities(node);
    const author = this.getAuthorData(node.author);

    return {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: node.title,
      abstract: this.generateAbstract(node),
      answerType: 'ExpertAdvice',
      competencyRequired: this.determineCompetency(node),
      assesses: this.generateAssessmentTopics(node),
      educationalLevel: this.mapDifficulty(node.difficulty),
      learningResourceType: 'ComparisonGuide',
      author: {
        '@type': 'Person',
        name: author.name,
        credential: author.credential,
        url: `${this.baseUrl}/authors/${author.slug}`,
        sameAs: author.socialLinks
      },
      mentions: entities,
      datePublished: node.publishedAt,
      dateModified: node.updatedAt || node.publishedAt,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${this.baseUrl}/blog/${node.slug}`
      },
      image: node.images || [`${this.baseUrl}/api/og/${node.slug}`],
      publisher: {
        '@type': 'Organization',
        name: 'AI Vault',
        logo: {
          '@type': 'ImageObject',
          url: `${this.baseUrl}/logo.png`
        }
      },
      aggregateRating: node.rating ? {
        '@type': 'AggregateRating',
        ratingValue: node.rating.toString(),
        reviewCount: (node.reviewCount || 0).toString(),
        bestRating: '5',
        worstRating: '1'
      } : undefined
    };
  }

  /**
   * Generate FAQ structured data
   */
  generateFAQSchema(faqs: FAQItem[]) {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
  }

  /**
   * Generate HowTo structured data
   */
  generateHowToSchema(title: string, steps: HowToStep[]) {
    return {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: steps
    };
  }

  /**
   * Generate Comparison Table structured data
   */
  generateComparisonTableSchema(tools: any[], title: string) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Table',
      name: title,
      about: tools.map(tool => ({
        &apos;@type&apos;: &apos;SoftwareApplication&apos;,
        name: tool.name,
        description: tool.description,
        applicationCategory: tool.category,
        operatingSystem: tool.platform,
        offers: tool.pricing ? {
          &apos;@type&apos;: &apos;Offer&apos;,
          price: tool.pricing,
          priceCurrency: &apos;USD&apos;
        } : undefined
      }))
    };
  }

  /**
   * Generate BreadcrumbList structured data
   */
  generateBreadcrumbList(breadcrumbs: Array<{ name: string; url: string }>) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: (index + 1).toString(),
        name: crumb.name,
        item: crumb.url
      }))
    };
  }

  /**
   * Generate Organization structured data
   */
  generateOrganizationSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AI Vault',
      url: this.baseUrl,
      logo: `${this.baseUrl}/logo.png`,
      description: 'Comprehensive directory of AI tools and resources',
      sameAs: [
        'https://twitter.com/aivault',
        'https://linkedin.com/company/aivault',
        'https://github.com/aivault'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
        availableLanguage: ['English']
      }
    };
  }

  /**
   * Generate VideoObject structured data
   */
  generateVideoSchema(video: {
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    duration: string;
    contentUrl: string;
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: video.name,
      description: video.description,
      thumbnailUrl: video.thumbnailUrl,
      uploadDate: video.uploadDate,
      duration: video.duration,
      contentUrl: video.contentUrl,
      publisher: {
        '@type': 'Organization',
        name: 'AI Vault',
        logo: {
          '@type': 'ImageObject',
          url: `${this.baseUrl}/logo.png`
        }
      }
    };
  }

  /**
   * Generate Product structured data for AI tools
   */
  generateProductSchema(tool: {
    name: string;
    description: string;
    category: string;
    pricing: string;
    features: string[];
    url: string;
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: tool.name,
      description: tool.description,
      category: tool.category,
      offers: {
        '@type': 'Offer',
        price: tool.pricing,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: tool.url
      },
      additionalProperty: tool.features.map(feature => ({
        &apos;@type&apos;: &apos;PropertyValue&apos;,
        name: feature,
        value: &apos;Available&apos;
      }))
    };
  }

  /**
   * Generate Person structured data for authors
   */
  generatePersonSchema(author: {
    name: string;
    jobTitle: string;
    description: string;
    image: string;
    socialLinks: string[];
    expertise: string[];
  }) {
    return {
      &apos;@context&apos;: &apos;https://schema.org&apos;,
      &apos;@type&apos;: &apos;Person&apos;,
      name: author.name,
      jobTitle: author.jobTitle,
      description: author.description,
      image: author.image,
      url: `${this.baseUrl}/authors/${author.name.toLowerCase().replace(/\s+/g, &apos;-&apos;)}`,
      sameAs: author.socialLinks,
      knowsAbout: author.expertise
    };
  }

  /**
   * Generate WebPage structured data
   */
  generateWebPageSchema(page: {
    title: string;
    description: string;
    url: string;
    lastReviewed: string;
    reviewedBy: string;
  }) {
    return {
      &apos;@context&apos;: &apos;https://schema.org&apos;,
      &apos;@type&apos;: &apos;WebPage&apos;,
      name: page.title,
      description: page.description,
      url: page.url,
      lastReviewed: page.lastReviewed,
      reviewedBy: {
        &apos;@type&apos;: &apos;Organization&apos;,
        name: page.reviewedBy
      },
      mainEntity: {
        &apos;@type&apos;: &apos;Article&apos;,
        headline: page.title
      }
    };
  }

  /**
   * Generate Question structured data for Q&A
   */
  generateQuestionSchema(question: {
    text: string;
    answerCount: number;
    suggestedAnswer: Array<{
      text: string;
      author: string;
      dateCreated: string;
      upvoteCount: number;
    }>;
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Question',
      name: question.text,
      answerCount: question.answerCount.toString(),
      suggestedAnswer: question.suggestedAnswer.map(answer => ({
        &apos;@type&apos;: &apos;Answer&apos;,
        text: answer.text,
        author: {
          &apos;@type&apos;: &apos;Person&apos;,
          name: answer.author
        },
        dateCreated: answer.dateCreated,
        upvoteCount: answer.upvoteCount.toString()
      }))
    };
  }

  /**
   * Helper methods
   */
  private extractEntities(node: KnowledgeNode): Array<{ '@type': string; name: string; url?: string }> {
    const entities: Array<{ '@type': string; name: string; url?: string }> = [];
    
    // Extract tools from tags and content
    if (node.linkedTools) {
      node.linkedTools.forEach((tool: any) => {
        entities.push({
          '@type': 'SoftwareApplication',
          name: tool.name,
          url: tool.url || `${this.baseUrl}/tools/${tool.id}`
        });
      });
    }

    // Extract concepts from tags
    if (node.tags) {
      node.tags.forEach(tag => {
        entities.push({
          '@type': 'Thing',
          name: tag
        });
      });
    }

    return entities;
  }

  private generateAbstract(node: KnowledgeNode): string {
    // Extract first paragraph or generate from content
    const sentences = node.content.split('.').filter(s => s.trim().length > 0);
    return sentences.slice(0, 3).join('. ').trim() + (sentences.length > 3 ? '...' : '');
  }

  private determineCompetency(node: KnowledgeNode): string {
    const competencyMap = {
      'beginner': 'Beginner to Intermediate',
      'intermediate': 'Intermediate to Advanced',
      'advanced': 'Advanced to Expert'
    };
    return competencyMap[node.difficulty] || 'Beginner to Expert';
  }

  private generateAssessmentTopics(node: KnowledgeNode): string {
    const topics = [];
    
    if (node.linkedTools && node.linkedTools.length > 0) {
      topics.push(&apos;AI tool selection and evaluation&apos;);
    }
    
    if (node.category === &apos;development&apos;) {
      topics.push(&apos;Development workflow optimization&apos;);
    }
    
    if (node.category === &apos;business&apos;) {
      topics.push(&apos;Business process automation&apos;);
    }
    
    topics.push(`${node.category} best practices`);
    
    return topics.join(&apos;, &apos;);
  }

  private mapDifficulty(difficulty: string): string {
    const educationMap: Record<string, string> = {
      &apos;beginner&apos;: &apos;Beginner&apos;,
      &apos;intermediate&apos;: &apos;Intermediate&apos;,
      &apos;advanced&apos;: &apos;Advanced&apos;
    };
    return educationMap[difficulty] || &apos;Intermediate&apos;;
  }

  private getAuthorData(authorName: string) {
    // In production, this would fetch from a database
    const authors: Record<string, any> = {
      'AI Vault Team': {
        name: 'AI Vault Team',
        credential: 'AI Research Collective',
        slug: 'ai-vault-team',
        socialLinks: [
          'https://twitter.com/aivault',
          'https://github.com/aivault'
        ]
      },
      'Tech Editor': {
        name: 'Tech Editor',
        credential: 'Senior Technology Analyst',
        slug: 'tech-editor',
        socialLinks: [
          'https://linkedin.com/in/tech-editor',
          'https://twitter.com/tech_editor'
        ]
      }
    };

    return authors[authorName] || authors['AI Vault Team'];
  }

  /**
   * Generate all structured data for a knowledge node
   */
  generateAllStructuredData(node: KnowledgeNode): string[] {
    const structuredDataList = [];

    // Main article schema
    structuredDataList.push(JSON.stringify(this.generateTechArticle(node)));

    // FAQ schema if article has FAQs
    if (node.faqs && node.faqs.length > 0) {
      structuredDataList.push(JSON.stringify(this.generateFAQSchema(node.faqs)));
    }

    // HowTo schema if article has steps
    if (node.howToSteps && node.howToSteps.length > 0) {
      structuredDataList.push(JSON.stringify(this.generateHowToSchema(node.title, node.howToSteps)));
    }

    // Comparison schema if article compares tools
    if (node.comparisonTools && node.comparisonTools.length > 0) {
      structuredDataList.push(JSON.stringify(this.generateComparisonTableSchema(node.comparisonTools, `${node.title} - Comparison`)));
    }

    // Breadcrumb schema
    const breadcrumbs = [
      { name: &apos;Home&apos;, url: this.baseUrl },
      { name: &apos;Blog&apos;, url: `${this.baseUrl}/blog` },
      { name: node.category, url: `${this.baseUrl}/blog/category/${node.category}` },
      { name: node.title, url: `${this.baseUrl}/blog/${node.slug}` }
    ];
    structuredDataList.push(JSON.stringify(this.generateBreadcrumbList(breadcrumbs)));

    return structuredDataList;
  }

  /**
   * Validate structured data
   */
  validateStructuredData(structuredData: string): { isValid: boolean; errors: string[] } {
    try {
      const parsed = JSON.parse(structuredData);
      const errors: string[] = [];

      // Check required fields
      if (!parsed[&apos;@context&apos;]) errors.push(&apos;Missing @context&apos;);
      if (!parsed[&apos;@type&apos;]) errors.push(&apos;Missing @type&apos;);

      // Type-specific validation
      switch (parsed[&apos;@type&apos;]) {
        case &apos;TechArticle&apos;:
          if (!parsed.headline) errors.push(&apos;TechArticle missing headline&apos;);
          if (!parsed.author) errors.push(&apos;TechArticle missing author&apos;);
          break;
        case &apos;FAQPage&apos;:
          if (!parsed.mainEntity || !Array.isArray(parsed.mainEntity)) {
            errors.push(&apos;FAQPage missing valid mainEntity&apos;);
          }
          break;
      }

      return {
        isValid: errors.length === 0,
        errors
      };
    } catch (error) {
      return {
        isValid: false,
        errors: [&apos;Invalid JSON format&apos;]
      };
    }
  }
}

export default StructuredDataFabric;
