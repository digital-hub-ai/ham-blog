// Blog to Reality Mapper
// This file maps existing blog posts to our reality dimensions

interface BlogToRealityMapping {
  [key: string]: string;
}

// Mapping of blog post patterns to reality categories
export const blogToRealityMap: BlogToRealityMapping = {
  // Technology Reality
  &apos;ai-&apos;: &apos;tech&apos;,
  &apos;machine-learning&apos;: &apos;tech&apos;,
  &apos;deep-learning&apos;: &apos;tech&apos;,
  &apos;neural-network&apos;: &apos;tech&apos;,
  &apos;quantum-computing&apos;: &apos;tech&apos;,
  &apos;quantum-&apos;: &apos;tech&apos;,
  &apos;cybersecurity&apos;: &apos;tech&apos;,
  &apos;blockchain&apos;: &apos;tech&apos;,
  &apos;web3&apos;: &apos;tech&apos;,
  &apos;cloud-computing&apos;: &apos;tech&apos;,
  &apos;devops&apos;: &apos;tech&apos;,
  &apos;mlops&apos;: &apos;tech&apos;,
  &apos;data-science&apos;: &apos;tech&apos;,
  &apos;api-&apos;: &apos;tech&apos;,
  &apos;software-&apos;: &apos;tech&apos;,
  &apos;programming-&apos;: &apos;tech&apos;,
  &apos;coding-&apos;: &apos;tech&apos;,
  &apos;developer-&apos;: &apos;tech&apos;,
  &apos;hardware-&apos;: &apos;tech&apos;,
  &apos;iot&apos;: &apos;tech&apos;,
  &apos;robotics&apos;: &apos;tech&apos;,
  
  // Travel Reality
  &apos;travel-&apos;: &apos;travel&apos;,
  &apos;tourism-&apos;: &apos;travel&apos;,
  &apos;destination-&apos;: &apos;travel&apos;,
  &apos;adventure-&apos;: &apos;travel&apos;,
  &apos;exploration-&apos;: &apos;travel&apos;,
  
  // Design Reality
  &apos;design-&apos;: &apos;design&apos;,
  &apos;ui-&apos;: &apos;design&apos;,
  &apos;ux-&apos;: &apos;design&apos;,
  &apos;graphic-&apos;: &apos;design&apos;,
  &apos;branding-&apos;: &apos;design&apos;,
  &apos;creative-&apos;: &apos;design&apos;,
  
  // Business Reality
  &apos;business-&apos;: &apos;business&apos;,
  &apos;entrepreneur&apos;: &apos;business&apos;,
  &apos;startup-&apos;: &apos;business&apos;,
  &apos;marketing-&apos;: &apos;business&apos;,
  &apos;finance-&apos;: &apos;business&apos;,
  &apos;investment-&apos;: &apos;business&apos;,
  &apos;economy-&apos;: &apos;business&apos;,
  &apos;corporate-&apos;: &apos;business&apos;,
  
  // Science Reality
  &apos;science-&apos;: &apos;science&apos;,
  &apos;research-&apos;: &apos;science&apos;,
  &apos;biology-&apos;: &apos;science&apos;,
  &apos;chemistry-&apos;: &apos;science&apos;,
  &apos;physics-&apos;: &apos;science&apos;,
  &apos;astronomy-&apos;: &apos;science&apos;,
  &apos;climate-&apos;: &apos;science&apos;,
  &apos;environmental-&apos;: &apos;science&apos;,
  
  // Lifestyle Reality
  &apos;lifestyle-&apos;: &apos;lifestyle&apos;,
  &apos;wellness-&apos;: &apos;lifestyle&apos;,
  &apos;health-&apos;: &apos;lifestyle&apos;,
  &apos;fitness-&apos;: &apos;lifestyle&apos;,
  &apos;mindfulness-&apos;: &apos;lifestyle&apos;,
  &apos;productivity-&apos;: &apos;lifestyle&apos;,
  
  // Hobby Reality
  &apos;hobby-&apos;: &apos;hobby&apos;,
  &apos;diy-&apos;: &apos;hobby&apos;,
  &apos;craft-&apos;: &apos;hobby&apos;,
  &apos;music-&apos;: &apos;hobby&apos;,
  &apos;photography-&apos;: &apos;hobby&apos;,
  &apos;garden-&apos;: &apos;hobby&apos;,
  
  // Food Reality
  &apos;food-&apos;: &apos;food&apos;,
  &apos;cooking-&apos;: &apos;food&apos;,
  &apos;recipe-&apos;: &apos;food&apos;,
  &apos;nutrition-&apos;: &apos;food&apos;,
  &apos;restaurant-&apos;: &apos;food&apos;,
  &apos;cuisine-&apos;: &apos;food&apos;,
  
  // Guides Reality
  &apos;guide-&apos;: &apos;guides&apos;,
  &apos;tutorial-&apos;: &apos;guides&apos;,
  &apos;how-to-&apos;: &apos;guides&apos;,
  &apos;learn-&apos;: &apos;guides&apos;,
  &apos;master-&apos;: &apos;guides&apos;,
  &apos;beginner-&apos;: &apos;guides&apos;,
};

// Function to determine which reality a blog post belongs to
export function getRealityForBlog(blogFileName: string): string {
  const fileName = blogFileName.replace(&apos;.tsx&apos;, &apos;&apos;).toLowerCase();
  
  // Check for specific mappings first
  for (const [pattern, reality] of Object.entries(blogToRealityMap)) {
    if (fileName.includes(pattern)) {
      return reality;
    }
  }
  
  // Default to tech if no specific mapping found
  return &apos;tech&apos;;
}

// Function to get sub-category for a blog post within a reality
export function getSubCategoryForBlog(blogFileName: string, reality: string): string {
  const fileName = blogFileName.replace(&apos;.tsx&apos;, &apos;&apos;).toLowerCase();
  
  switch (reality) {
    case &apos;tech&apos;:
      if (fileName.includes(&apos;ai-&apos;) || fileName.includes(&apos;artificial-intelligence&apos;)) return &apos;ai-ml&apos;;
      if (fileName.includes(&apos;web-&apos;) || fileName.includes(&apos;frontend&apos;) || fileName.includes(&apos;backend&apos;)) return &apos;web-dev&apos;;
      if (fileName.includes(&apos;cybersecurity&apos;) || fileName.includes(&apos;security&apos;)) return &apos;cybersecurity&apos;;
      if (fileName.includes(&apos;hardware&apos;) || fileName.includes(&apos;iot&apos;)) return &apos;hardware&apos;;
      if (fileName.includes(&apos;blockchain&apos;) || fileName.includes(&apos;web3&apos;)) return &apos;web3&apos;;
      if (fileName.includes(&apos;cloud&apos;)) return &apos;cloud&apos;;
      return &apos;ai-ml&apos;; // default
      
    case &apos;travel&apos;:
      if (fileName.includes(&apos;destination&apos;) || fileName.includes(&apos;country&apos;)) return &apos;destinations&apos;;
      if (fileName.includes(&apos;adventure&apos;) || fileName.includes(&apos;extreme&apos;)) return &apos;adventures&apos;;
      if (fileName.includes(&apos;culture&apos;) || fileName.includes(&apos;tradition&apos;)) return &apos;cultures&apos;;
      if (fileName.includes(&apos;tech&apos;) || fileName.includes(&apos;digital&apos;)) return &apos;travel-tech&apos;;
      return &apos;destinations&apos;; // default
      
    case &apos;design&apos;:
      if (fileName.includes(&apos;ui&apos;) || fileName.includes(&apos;ux&apos;)) return &apos;ui-ux&apos;;
      if (fileName.includes(&apos;brand&apos;)) return &apos;branding&apos;;
      if (fileName.includes(&apos;graphic&apos;)) return &apos;graphic&apos;;
      if (fileName.includes(&apos;3d&apos;) || fileName.includes(&apos;motion&apos;)) return &apos;3d-motion&apos;;
      return &apos;ui-ux&apos;; // default
      
    case &apos;business&apos;:
      if (fileName.includes(&apos;strategy&apos;)) return &apos;strategy&apos;;
      if (fileName.includes(&apos;marketing&apos;)) return &apos;marketing&apos;;
      if (fileName.includes(&apos;finance&apos;) || fileName.includes(&apos;investment&apos;)) return &apos;finance&apos;;
      if (fileName.includes(&apos;leader&apos;) || fileName.includes(&apos;management&apos;)) return &apos;leadership&apos;;
      if (fileName.includes(&apos;innovat&apos;)) return &apos;innovation&apos;;
      if (fileName.includes(&apos;entrepreneur&apos;)) return &apos;entrepreneurship&apos;;
      return &apos;strategy&apos;; // default
      
    case &apos;science&apos;:
      if (fileName.includes(&apos;physics&apos;)) return &apos;physics&apos;;
      if (fileName.includes(&apos;biology&apos;) || fileName.includes(&apos;bio&apos;)) return &apos;biology&apos;;
      if (fileName.includes(&apos;chemistry&apos;)) return &apos;chemistry&apos;;
      if (fileName.includes(&apos;astronomy&apos;) || fileName.includes(&apos;space&apos;)) return &apos;astronomy&apos;;
      if (fileName.includes(&apos;environment&apos;) || fileName.includes(&apos;climate&apos;)) return &apos;environment&apos;;
      if (fileName.includes(&apos;math&apos;)) return &apos;mathematics&apos;;
      return &apos;physics&apos;; // default
      
    case &apos;lifestyle&apos;:
      if (fileName.includes(&apos;wellness&apos;) || fileName.includes(&apos;health&apos;)) return &apos;wellness&apos;;
      if (fileName.includes(&apos;food&apos;) || fileName.includes(&apos;nutrition&apos;)) return &apos;food&apos;;
      if (fileName.includes(&apos;fitness&apos;) || fileName.includes(&apos;exercise&apos;)) return &apos;fitness&apos;;
      if (fileName.includes(&apos;mindful&apos;) || fileName.includes(&apos;meditation&apos;)) return &apos;mindfulness&apos;;
      if (fileName.includes(&apos;relationship&apos;)) return &apos;relationships&apos;;
      if (fileName.includes(&apos;growth&apos;) || fileName.includes(&apos;develop&apos;)) return &apos;personal-growth&apos;;
      return &apos;wellness&apos;; // default
      
    case &apos;hobby&apos;:
      if (fileName.includes(&apos;diy&apos;) || fileName.includes(&apos;project&apos;)) return &apos;diy&apos;;
      if (fileName.includes(&apos;craft&apos;)) return &apos;crafts&apos;;
      if (fileName.includes(&apos;music&apos;)) return &apos;music&apos;;
      if (fileName.includes(&apos;garden&apos;)) return &apos;gardening&apos;;
      if (fileName.includes(&apos;photo&apos;)) return &apos;photography&apos;;
      if (fileName.includes(&apos;collect&apos;)) return &apos;collecting&apos;;
      return &apos;diy&apos;; // default
      
    case &apos;food&apos;:
      if (fileName.includes(&apos;recipe&apos;)) return &apos;recipes&apos;;
      if (fileName.includes(&apos;cook&apos;)) return &apos;cooking-tech&apos;;
      if (fileName.includes(&apos;nutrition&apos;)) return &apos;nutrition&apos;;
      if (fileName.includes(&apos;restaurant&apos;)) return &apos;restaurants&apos;;
      if (fileName.includes(&apos;cuisine&apos;)) return &apos;cuisines&apos;;
      if (fileName.includes(&apos;science&apos;)) return &apos;food-science&apos;;
      return &apos;recipes&apos;; // default
      
    case &apos;guides&apos;:
      if (fileName.includes(&apos;tech&apos;)) return &apos;tech-guides&apos;;
      if (fileName.includes(&apos;life&apos;)) return &apos;life-skills&apos;;
      if (fileName.includes(&apos;career&apos;)) return &apos;career&apos;;
      if (fileName.includes(&apos;health&apos;) || fileName.includes(&apos;fitness&apos;)) return &apos;health&apos;;
      if (fileName.includes(&apos;finance&apos;)) return &apos;finance&apos;;
      if (fileName.includes(&apos;creative&apos;)) return &apos;creativity&apos;;
      return &apos;tech-guides&apos;; // default
      
    default:
      return &apos;general&apos;;
  }
}