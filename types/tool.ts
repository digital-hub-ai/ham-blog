export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  logo?: string;
  category: string;
  subcategory: string;
  pricing: &apos;Free&apos; | &apos;Freemium&apos; | &apos;Paid&apos; | &apos;Contact&apos; | &apos;Open Source&apos; | string;
  pricingPeriod?: string;
  pricingDescription?: string;
  tags: string[];
  rating?: number;
  reviews?: number;
  createdAt?: string;
  updatedAt?: string;
  features?: string[];
  languages?: string[];
  platforms?: string[];
  integrations?: string[];
  pricingDetails?: {
    type: string;
    price?: string;
    description?: string;
  }[];
  alternatives?: string[];
  pros?: string[];
  cons?: string[];
  useCases?: string[];
  apiAvailable?: boolean;
  launchDate?: string;
  apiDocsUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  discordUrl?: string;
  youtubeUrl?: string;
  blogUrl?: string;
  documentationUrl?: string;
  status?: &apos;Active&apos; | &apos;Beta&apos; | &apos;Alpha&apos; | &apos;In Development&apos; | &apos;Discontinued&apos;;
  founded?: string;
  teamSize?: number;
  funding?: {
    amount?: string;
    series?: string;
    investors?: string[];
    date?: string;
  };
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
}
