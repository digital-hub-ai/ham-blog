// Blog to Reality Mapper
// This file maps existing blog posts to our reality dimensions

// Mapping of blog post patterns to reality categories
const blogToRealityMap = {
  // Technology Reality
  'ai-': 'tech',
  'machine-learning': 'tech',
  'deep-learning': 'tech',
  'neural-network': 'tech',
  'quantum-computing': 'tech',
  'quantum-': 'tech',
  'cybersecurity': 'tech',
  'blockchain': 'tech',
  'web3': 'tech',
  'cloud-computing': 'tech',
  'devops': 'tech',
  'mlops': 'tech',
  'data-science': 'tech',
  'api-': 'tech',
  'software-': 'tech',
  'programming-': 'tech',
  'coding-': 'tech',
  'developer-': 'tech',
  'hardware-': 'tech',
  'iot': 'tech',
  'robotics': 'tech',
  
  // Travel Reality
  'travel-': 'travel',
  'tourism-': 'travel',
  'destination-': 'travel',
  'adventure-': 'travel',
  'exploration-': 'travel',
  
  // Design Reality
  'design-': 'design',
  'ui-': 'design',
  'ux-': 'design',
  'graphic-': 'design',
  'branding-': 'design',
  'creative-': 'design',
  
  // Business Reality
  'business-': 'business',
  'entrepreneur': 'business',
  'startup-': 'business',
  'marketing-': 'business',
  'finance-': 'business',
  'investment-': 'business',
  'economy-': 'business',
  'corporate-': 'business',
  
  // Science Reality
  'science-': 'science',
  'research-': 'science',
  'biology-': 'science',
  'chemistry-': 'science',
  'physics-': 'science',
  'astronomy-': 'science',
  'climate-': 'science',
  'environmental-': 'science',
  
  // Lifestyle Reality
  'lifestyle-': 'lifestyle',
  'wellness-': 'lifestyle',
  'health-': 'lifestyle',
  'fitness-': 'lifestyle',
  'mindfulness-': 'lifestyle',
  'productivity-': 'lifestyle',
  
  // Hobby Reality
  'hobby-': 'hobby',
  'diy-': 'hobby',
  'craft-': 'hobby',
  'music-': 'hobby',
  'photography-': 'hobby',
  'garden-': 'hobby',
  
  // Food Reality
  'food-': 'food',
  'cooking-': 'food',
  'recipe-': 'food',
  'nutrition-': 'food',
  'restaurant-': 'food',
  'cuisine-': 'food',
  
  // Guides Reality
  'guide-': 'guides',
  'tutorial-': 'guides',
  'how-to-': 'guides',
  'learn-': 'guides',
  'master-': 'guides',
  'beginner-': 'guides',
};

// Function to determine which reality a blog post belongs to
function getRealityForBlog(blogFileName) {
  const fileName = blogFileName.replace('.tsx', '').toLowerCase();
  
  // Check for specific mappings first
  for (const [pattern, reality] of Object.entries(blogToRealityMap)) {
    if (fileName.includes(pattern)) {
      return reality;
    }
  }
  
  // Default to tech if no specific mapping found
  return 'tech';
}

// Function to get sub-category for a blog post within a reality
function getSubCategoryForBlog(blogFileName, reality) {
  const fileName = blogFileName.replace('.tsx', '').toLowerCase();
  
  switch (reality) {
    case 'tech':
      if (fileName.includes('ai-') || fileName.includes('artificial-intelligence')) return 'ai-ml';
      if (fileName.includes('web-') || fileName.includes('frontend') || fileName.includes('backend')) return 'web-dev';
      if (fileName.includes('cybersecurity') || fileName.includes('security')) return 'cybersecurity';
      if (fileName.includes('hardware') || fileName.includes('iot')) return 'hardware';
      if (fileName.includes('blockchain') || fileName.includes('web3')) return 'web3';
      if (fileName.includes('cloud')) return 'cloud';
      return 'ai-ml'; // default
      
    case 'travel':
      if (fileName.includes('destination') || fileName.includes('country')) return 'destinations';
      if (fileName.includes('adventure') || fileName.includes('extreme')) return 'adventures';
      if (fileName.includes('culture') || fileName.includes('tradition')) return 'cultures';
      if (fileName.includes('tech') || fileName.includes('digital')) return 'travel-tech';
      return 'destinations'; // default
      
    case 'design':
      if (fileName.includes('ui') || fileName.includes('ux')) return 'ui-ux';
      if (fileName.includes('brand')) return 'branding';
      if (fileName.includes('graphic')) return 'graphic';
      if (fileName.includes('3d') || fileName.includes('motion')) return '3d-motion';
      return 'ui-ux'; // default
      
    case 'business':
      if (fileName.includes('strategy')) return 'strategy';
      if (fileName.includes('marketing')) return 'marketing';
      if (fileName.includes('finance') || fileName.includes('investment')) return 'finance';
      if (fileName.includes('leader') || fileName.includes('management')) return 'leadership';
      if (fileName.includes('innovat')) return 'innovation';
      if (fileName.includes('entrepreneur')) return 'entrepreneurship';
      return 'strategy'; // default
      
    case 'science':
      if (fileName.includes('physics')) return 'physics';
      if (fileName.includes('biology') || fileName.includes('bio')) return 'biology';
      if (fileName.includes('chemistry')) return 'chemistry';
      if (fileName.includes('astronomy') || fileName.includes('space')) return 'astronomy';
      if (fileName.includes('environment') || fileName.includes('climate')) return 'environment';
      if (fileName.includes('math')) return 'mathematics';
      return 'physics'; // default
      
    case 'lifestyle':
      if (fileName.includes('wellness') || fileName.includes('health')) return 'wellness';
      if (fileName.includes('food') || fileName.includes('nutrition')) return 'food';
      if (fileName.includes('fitness') || fileName.includes('exercise')) return 'fitness';
      if (fileName.includes('mindful') || fileName.includes('meditation')) return 'mindfulness';
      if (fileName.includes('relationship')) return 'relationships';
      if (fileName.includes('growth') || fileName.includes('develop')) return 'personal-growth';
      return 'wellness'; // default
      
    case 'hobby':
      if (fileName.includes('diy') || fileName.includes('project')) return 'diy';
      if (fileName.includes('craft')) return 'crafts';
      if (fileName.includes('music')) return 'music';
      if (fileName.includes('garden')) return 'gardening';
      if (fileName.includes('photo')) return 'photography';
      if (fileName.includes('collect')) return 'collecting';
      return 'diy'; // default
      
    case 'food':
      if (fileName.includes('recipe')) return 'recipes';
      if (fileName.includes('cook')) return 'cooking-tech';
      if (fileName.includes('nutrition')) return 'nutrition';
      if (fileName.includes('restaurant')) return 'restaurants';
      if (fileName.includes('cuisine')) return 'cuisines';
      if (fileName.includes('science')) return 'food-science';
      return 'recipes'; // default
      
    case 'guides':
      if (fileName.includes('tech')) return 'tech-guides';
      if (fileName.includes('life')) return 'life-skills';
      if (fileName.includes('career')) return 'career';
      if (fileName.includes('health') || fileName.includes('fitness')) return 'health';
      if (fileName.includes('finance')) return 'finance';
      if (fileName.includes('creative')) return 'creativity';
      return 'tech-guides'; // default
      
    default:
      return 'general';
  }
}

module.exports = {
  blogToRealityMap,
  getRealityForBlog,
  getSubCategoryForBlog
};