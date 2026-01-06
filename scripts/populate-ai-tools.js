// scripts/populate-ai-tools.js
const fs = require('fs');
const path = require('path');

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

// Initial tools data structure (50+ core AI tools)
const initialTools = [
  {
    name: &quot;ChatGPT&quot;,
    slug: &quot;chatgpt&quot;,
    description: &quot;Advanced AI conversation and task completion&quot;,
    categories: [&quot;text_generation&quot;, &quot;productivity&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Plus&quot;, &quot;Team&quot;] },
    features: [&quot;conversational&quot;, &quot;code&quot;, &quot;research&quot;, &quot;creative&quot;],
    website_url: &quot;https://chat.openai.com&quot;
  },
  {
    name: &quot;Claude&quot;,
    slug: &quot;claude&quot;,
    description: &quot;AI assistant focused on being helpful, harmless, and honest&quot;,
    categories: [&quot;text_generation&quot;, &quot;productivity&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Claude Pro&quot;, &quot;Claude for Teams&quot;, &quot;Claude for Enterprises&quot;] },
    features: [&quot;conversational&quot;, &quot;document analysis&quot;, &quot;long context&quot;, &quot;safe responses&quot;],
    website_url: &quot;https://claude.ai&quot;
  },
  {
    name: &quot;Jasper&quot;,
    slug: &quot;jasper&quot;,
    description: &quot;AI content generator for marketing teams and copywriters&quot;,
    categories: [&quot;text_generation&quot;, &quot;marketing&quot;],
    pricing: { free: false, paid: true, plans: [&quot;Starter&quot;, &quot;Pro&quot;, &quot;Team&quot;, &quot;Business&quot;] },
    features: [&quot;content templates&quot;, &quot;brand voice&quot;, &quot;collaboration&quot;, &quot;plagiarism checker&quot;],
    website_url: &quot;https://jasper.ai&quot;
  },
  {
    name: &quot;Midjourney&quot;,
    slug: &quot;midjourney&quot;,
    description: &quot;AI art generator that creates images from text prompts&quot;,
    categories: [&quot;image_generation&quot;, &quot;art&quot;],
    pricing: { free: false, paid: true, plans: [&quot;Basic Plan&quot;, &quot;Standard Plan&quot;, &quot;Pro Plan&quot;] },
    features: [&quot;text-to-image&quot;, &quot;style variations&quot;, &quot;upscale&quot;, &quot;custom ratios&quot;],
    website_url: &quot;https://midjourney.com&quot;
  },
  {
    name: &quot;DALL-E 3&quot;,
    slug: &quot;dall-e-3&quot;,
    description: &quot;AI image generator integrated with ChatGPT for creating detailed images from text&quot;,
    categories: [&quot;image_generation&quot;, &quot;design&quot;],
    pricing: { free: false, paid: true, plans: [&quot;ChatGPT Plus&quot;, &quot;ChatGPT Enterprise&quot;] },
    features: [&quot;text-to-image&quot;, &quot;image editing&quot;, &quot;high resolution&quot;, &quot;consistent styles&quot;],
    website_url: &quot;https://openai.com/dall-e-3&quot;
  },
  {
    name: &quot;Runway&quot;,
    slug: &quot;runway&quot;,
    description: &quot;AI-powered video editing and creation platform&quot;,
    categories: [&quot;video_ai&quot;, &quot;editing&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Pro&quot;, &quot;Teams&quot;, &quot;Enterprise&quot;] },
    features: [&quot;green screen AI&quot;, &quot;text to video&quot;, &quot;object removal&quot;, &quot;motion brushes&quot;],
    website_url: &quot;https://runwayml.com&quot;
  },
  {
    name: &quot;ElevenLabs&quot;,
    slug: &quot;elevenlabs&quot;,
    description: &quot;AI voice generator and text-to-speech platform&quot;,
    categories: [&quot;audio_ai&quot;, &quot;voice&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Creator&quot;, &quot;Pro&quot;, &quot;Enterprise&quot;] },
    features: [&quot;voice cloning&quot;, &quot;multilingual&quot;, &quot;voice design&quot;, &quot;audio editing&quot;],
    website_url: &quot;https://elevenlabs.io&quot;
  },
  {
    name: &quot;GitHub Copilot&quot;,
    slug: &quot;github-copilot&quot;,
    description: &quot;AI pair programmer that helps you write code faster&quot;,
    categories: [&quot;code_ai&quot;, &quot;development&quot;],
    pricing: { free: false, paid: true, plans: [&quot;Individual&quot;, &quot;Business&quot;, &quot;Enterprise&quot;] },
    features: [&quot;code suggestions&quot;, &quot;autocomplete&quot;, &quot;multi-language&quot;, &quot;chat interface&quot;],
    website_url: &quot;https://github.com/features/copilot&quot;
  },
  {
    name: &quot;Notion AI&quot;,
    slug: &quot;notion-ai&quot;,
    description: &quot;AI assistant integrated into Notion for writing, planning, and organizing&quot;,
    categories: [&quot;productivity&quot;, &quot;organization&quot;],
    pricing: { free: false, paid: true, plans: [&quot;Plus&quot;, &quot;Enterprise&quot;] },
    features: [&quot;writing assistant&quot;, &quot;task management&quot;, &quot;summarization&quot;, &quot;template creation&quot;],
    website_url: &quot;https://notion.so/ai&quot;
  },
  {
    name: &quot;Consensus&quot;,
    slug: &quot;consensus&quot;,
    description: &quot;AI research assistant that finds and summarizes scientific papers&quot;,
    categories: [&quot;research&quot;, &quot;science&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Pro&quot;] },
    features: [&quot;scientific search&quot;, &quot;paper summarization&quot;, &quot;citation extraction&quot;, &quot;claim verification&quot;],
    website_url: &quot;https://consensus.app&quot;
  },
  {
    name: &quot;Synthesia&quot;,
    slug: &quot;synthesia&quot;,
    description: &quot;AI video generation platform for creating videos with AI avatars&quot;,
    categories: [&quot;video_ai&quot;, &quot;marketing&quot;],
    pricing: { free: false, paid: true, plans: [&quot;Starter&quot;, &quot;Creator&quot;, &quot;Enterprise&quot;] },
    features: [&quot;AI avatars&quot;, &quot;text-to-video&quot;, &quot;multilingual&quot;, &quot;custom avatars&quot;],
    website_url: &quot;https://synthesia.io&quot;
  },
  {
    name: &quot;Copy.ai&quot;,
    slug: &quot;copy-ai&quot;,
    description: &quot;AI writing assistant for marketing copy and content creation&quot;,
    categories: [&quot;text_generation&quot;, &quot;marketing&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Pro&quot;, &quot;Team&quot;, &quot;Enterprise&quot;] },
    features: [&quot;content templates&quot;, &quot;brand voice&quot;, &quot;long-form assistant&quot;, &quot;SEO optimization&quot;],
    website_url: &quot;https://copy.ai&quot;
  },
  {
    name: &quot;Writer&quot;,
    slug: &quot;writer&quot;,
    description: &quot;AI writing platform for teams with brand consistency and compliance&quot;,
    categories: [&quot;text_generation&quot;, &quot;business&quot;],
    pricing: { free: false, paid: true, plans: [&quot;Business&quot;, &quot;Enterprise&quot;] },
    features: [&quot;brand controls&quot;, &quot;compliance&quot;, &quot;analytics&quot;, &quot;collaboration&quot;],
    website_url: &quot;https://writer.com&quot;
  },
  {
    name: &quot;Stable Diffusion&quot;,
    slug: &quot;stable-diffusion&quot;,
    description: &quot;Open-source AI image generation model&quot;,
    categories: [&quot;image_generation&quot;, &quot;open_source&quot;],
    pricing: { free: true, paid: false, plans: [] },
    features: [&quot;open source&quot;, &quot;customization&quot;, &quot;high resolution&quot;, &quot;community models&quot;],
    website_url: &quot;https://stability.ai&quot;
  },
  {
    name: &quot;Leonardo AI&quot;,
    slug: &quot;leonardo-ai&quot;,
    description: &quot;AI art generator with community features and model training&quot;,
    categories: [&quot;image_generation&quot;, &quot;art&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Standard&quot;, &quot;Pro&quot;, &quot;Ultimate&quot;] },
    features: [&quot;AI canvas&quot;, &quot;model training&quot;, &quot;community&quot;, &quot;high resolution&quot;],
    website_url: &quot;https://leonardo.ai&quot;
  },
  {
    name: &quot;Pika Labs&quot;,
    slug: &quot;pika-labs&quot;,
    description: &quot;AI video generation platform for creating animated content&quot;,
    categories: [&quot;video_ai&quot;, &quot;animation&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Pro&quot;] },
    features: [&quot;text-to-video&quot;, &quot;animation&quot;, &quot;style transfer&quot;, &quot;motion control&quot;],
    website_url: &quot;https://pika.art&quot;
  },
  {
    name: &quot;HeyGen&quot;,
    slug: &quot;heygen&quot;,
    description: &quot;AI video platform for creating videos with AI avatars&quot;,
    categories: [&quot;video_ai&quot;, &quot;marketing&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Starter&quot;, &quot;Pro&quot;, &quot;Enterprise&quot;] },
    features: [&quot;AI avatars&quot;, &quot;text-to-video&quot;, &quot;multilingual&quot;, &quot;video templates&quot;],
    website_url: &quot;https://heygen.com&quot;
  },
  {
    name: &quot;Murf AI&quot;,
    slug: &quot;murf-ai&quot;,
    description: &quot;AI voice generator and text-to-speech platform&quot;,
    categories: [&quot;audio_ai&quot;, &quot;voice&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Basic&quot;, &quot;Pro&quot;, &quot;Enterprise&quot;] },
    features: [&quot;voice cloning&quot;, &quot;multilingual&quot;, &quot;audio editing&quot;, &quot;studio quality&quot;],
    website_url: &quot;https://murf.ai&quot;
  },
  {
    name: &quot;Adobe Podcast&quot;,
    slug: &quot;adobe-podcast&quot;,
    description: &quot;AI-powered audio recording and editing tool for podcasters&quot;,
    categories: [&quot;audio_ai&quot;, &quot;podcasting&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Premium&quot;] },
    features: [&quot;noise reduction&quot;, &quot;auto editing&quot;, &quot;voice enhancement&quot;, &quot;transcription&quot;],
    website_url: &quot;https://podcast.adobe.com&quot;
  },
  {
    name: &quot;Replit Ghostwriter&quot;,
    slug: &quot;replit-ghostwriter&quot;,
    description: &quot;AI pair programmer integrated into the Replit coding platform&quot;,
    categories: [&quot;code_ai&quot;, &quot;development&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Core&quot;, &quot;Teams&quot;, &quot;Enterprise&quot;] },
    features: [&quot;code suggestions&quot;, &quot;autocomplete&quot;, &quot;debugging&quot;, &quot;explanation&quot;],
    website_url: &quot;https://replit.com/site/ghostwriter&quot;
  },
  {
    name: &quot;Tabnine&quot;,
    slug: &quot;tabnine&quot;,
    description: &quot;AI code assistant that predicts and completes code in real-time&quot;,
    categories: [&quot;code_ai&quot;, &quot;development&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Pro&quot;, &quot;Team&quot;, &quot;Enterprise&quot;] },
    features: [&quot;code completion&quot;, &quot;autocomplete&quot;, &quot;multi-language&quot;, &quot;privacy focused&quot;],
    website_url: &quot;https://tabnine.com&quot;
  },
  {
    name: &quot;Codeium&quot;,
    slug: &quot;codeium&quot;,
    description: &quot;Free AI code acceleration toolkit for developers&quot;,
    categories: [&quot;code_ai&quot;, &quot;development&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Pro&quot;, &quot;Enterprise&quot;] },
    features: [&quot;code completion&quot;, &quot;chat interface&quot;, &quot;autocomplete&quot;, &quot;multi-language&quot;],
    website_url: &quot;https://codeium.com&quot;
  },
  {
    name: &quot;Grammarly&quot;,
    slug: &quot;grammarly&quot;,
    description: &quot;AI-powered writing assistant that improves grammar and clarity&quot;,
    categories: [&quot;productivity&quot;, &quot;writing&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Premium&quot;, &quot;Business&quot;, &quot;Enterprise&quot;] },
    features: [&quot;grammar checking&quot;, &quot;tone adjustment&quot;, &quot;plagiarism checker&quot;, &quot;vocabulary enhancement&quot;],
    website_url: &quot;https://grammarly.com&quot;
  },
  {
    name: &quot;QuillBot&quot;,
    slug: &quot;quillbot&quot;,
    description: &quot;AI-powered paraphrasing tool and writing assistant&quot;,
    categories: [&quot;productivity&quot;, &quot;writing&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Premium&quot;, &quot;Team&quot;, &quot;Business&quot;] },
    features: [&quot;paraphrasing&quot;, &quot;grammar checker&quot;, &quot;summarizer&quot;, &quot;coherence checker&quot;],
    website_url: &quot;https://quillbot.com&quot;
  },
  {
    name: &quot;Otter.ai&quot;,
    slug: &quot;otter-ai&quot;,
    description: &quot;AI-powered meeting transcription and note-taking assistant&quot;,
    categories: [&quot;productivity&quot;, &quot;transcription&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Pro&quot;, &quot;Business&quot;, &quot;Enterprise&quot;] },
    features: [&quot;live transcription&quot;, &quot;speaker identification&quot;, &quot;searchable transcripts&quot;, &quot;integration&quot;],
    website_url: &quot;https://otter.ai&quot;
  },
  {
    name: &quot;Elicit&quot;,
    slug: &quot;elicit&quot;,
    description: &quot;AI research assistant that helps find and synthesize academic papers&quot;,
    categories: [&quot;research&quot;, &quot;productivity&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Pro&quot;] },
    features: [&quot;literature review&quot;, &quot;paper search&quot;, &quot;claim extraction&quot;, &quot;synthesis&quot;],
    website_url: &quot;https://elicit.org&quot;
  },
  {
    name: &quot;Scite&quot;,
    slug: &quot;scite&quot;,
    description: &quot;AI-powered platform for discovering and evaluating scientific research&quot;,
    categories: [&quot;research&quot;, &quot;science&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Premium&quot;, &quot;Institution&quot;] },
    features: [&quot;smart citations&quot;, &quot;claim verification&quot;, &quot;literature search&quot;, &quot;research assistant&quot;],
    website_url: &quot;https://scite.ai&quot;
  },
  {
    name: &quot;ChatPDF&quot;,
    slug: &quot;chatpdf&quot;,
    description: &quot;AI assistant that can read and discuss PDF documents&quot;,
    categories: [&quot;research&quot;, &quot;productivity&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Plus&quot;] },
    features: [&quot;document chat&quot;, &quot;summarization&quot;, &quot;multilingual&quot;, &quot;OCR&quot;],
    website_url: &quot;https://chatpdf.com&quot;
  },
  {
    name: &quot;Jasper Business&quot;,
    slug: &quot;jasper-business&quot;,
    description: &quot;Enterprise version of Jasper AI for business teams&quot;,
    categories: [&quot;business&quot;, &quot;marketing&quot;],
    pricing: { free: false, paid: true, plans: [&quot;Business&quot;, &quot;Enterprise&quot;] },
    features: [&quot;team collaboration&quot;, &quot;brand controls&quot;, &quot;analytics&quot;, &quot;custom workflows&quot;],
    website_url: &quot;https://jasper.ai/business&quot;
  },
  {
    name: &quot;Copy.ai Enterprise&quot;,
    slug: &quot;copy-ai-enterprise&quot;,
    description: &quot;Enterprise AI writing platform for large organizations&quot;,
    categories: [&quot;business&quot;, &quot;marketing&quot;],
    pricing: { free: false, paid: true, plans: [&quot;Enterprise&quot;] },
    features: [&quot;SSO&quot;, &quot;brand management&quot;, &quot;analytics&quot;, &quot;dedicated support&quot;],
    website_url: &quot;https://copy.ai/enterprise&quot;
  },
  {
    name: &quot;Writer for Teams&quot;,
    slug: &quot;writer-for-teams&quot;,
    description: &quot;Collaborative AI writing platform for teams&quot;,
    categories: [&quot;business&quot;, &quot;productivity&quot;],
    pricing: { free: false, paid: true, plans: [&quot;Business&quot;, &quot;Enterprise&quot;] },
    features: [&quot;team collaboration&quot;, &quot;brand controls&quot;, &quot;analytics&quot;, &quot;compliance&quot;],
    website_url: &quot;https://writer.com/teams&quot;
  },
  {
    name: &quot;Hugging Face&quot;,
    slug: &quot;hugging-face&quot;,
    description: &quot;Platform for building, training, and deploying machine learning models&quot;,
    categories: [&quot;code_ai&quot;, &quot;development&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Pro&quot;, &quot;Enterprise&quot;] },
    features: [&quot;model hub&quot;, &quot;datasets&quot;, &quot;training&quot;, &quot;deployment&quot;],
    website_url: &quot;https://huggingface.co&quot;
  },
  {
    name: &quot;Cohere&quot;,
    slug: &quot;cohere&quot;,
    description: &quot;AI platform for building conversational AI and language understanding&quot;,
    categories: [&quot;text_generation&quot;, &quot;development&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Pro&quot;, &quot;Enterprise&quot;] },
    features: [&quot;language understanding&quot;, &quot;conversational AI&quot;, &quot;embedding&quot;, &quot;classification&quot;],
    website_url: &quot;https://cohere.ai&quot;
  },
  {
    name: &quot;Anthropic Claude&quot;,
    slug: &quot;anthropic-claude&quot;,
    description: &quot;AI assistant with strong safety and alignment features&quot;,
    categories: [&quot;text_generation&quot;, &quot;productivity&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Claude Pro&quot;, &quot;Claude for Teams&quot;] },
    features: [&quot;conversational&quot;, &quot;document analysis&quot;, &quot;fact-based responses&quot;, &quot;safe responses&quot;],
    website_url: &quot;https://anthropic.com&quot;
  },
  {
    name: &quot;Google AI&quot;,
    slug: &quot;google-ai&quot;,
    description: &quot;Suite of AI tools and APIs from Google&quot;,
    categories: [&quot;text_generation&quot;, &quot;image_generation&quot;, &quot;development&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Standard&quot;, &quot;Enterprise&quot;] },
    features: [&quot;text generation&quot;, &quot;image generation&quot;, &quot;translation&quot;, &quot;vision&quot;],
    website_url: &quot;https://ai.google&quot;
  },
  {
    name: &quot;Microsoft Azure AI&quot;,
    slug: &quot;azure-ai&quot;,
    description: &quot;Cloud-based AI services and cognitive APIs from Microsoft&quot;,
    categories: [&quot;text_generation&quot;, &quot;image_generation&quot;, &quot;development&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Standard&quot;, &quot;Enterprise&quot;] },
    features: [&quot;cognitive services&quot;, &quot;machine learning&quot;, &quot;bot service&quot;, &quot;speech&quot;],
    website_url: &quot;https://azure.microsoft.com/ai&quot;
  },
  {
    name: &quot;Amazon AI&quot;,
    slug: &quot;amazon-ai&quot;,
    description: &quot;AI services and tools from Amazon Web Services&quot;,
    categories: [&quot;text_generation&quot;, &quot;image_generation&quot;, &quot;development&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Standard&quot;, &quot;Enterprise&quot;] },
    features: [&quot;machine learning&quot;, &quot;computer vision&quot;, &quot;natural language&quot;, &quot;forecasting&quot;],
    website_url: &quot;https://aws.amazon.com/ai&quot;
  },
  {
    name: &quot;IBM Watson&quot;,
    slug: &quot;ibm-watson&quot;,
    description: &quot;AI platform for building and deploying AI solutions&quot;,
    categories: [&quot;text_generation&quot;, &quot;image_generation&quot;, &quot;development&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Standard&quot;, &quot;Enterprise&quot;] },
    features: [&quot;natural language understanding&quot;, &quot;speech to text&quot;, &quot;visual recognition&quot;, &quot;assistant&quot;],
    website_url: &quot;https://watson.ibm.com&quot;
  },
  {
    name: &quot;Salesforce Einstein&quot;,
    slug: &quot;salesforce-einstein&quot;,
    description: &quot;AI-powered CRM and business analytics platform&quot;,
    categories: [&quot;business&quot;, &quot;productivity&quot;],
    pricing: { free: false, paid: true, plans: [&quot;Professional&quot;, &quot;Enterprise&quot;, &quot;Unlimited&quot;] },
    features: [&quot;predictive analytics&quot;, &quot;automated insights&quot;, &quot;lead scoring&quot;, &quot;forecasting&quot;],
    website_url: &quot;https://einstein.ai&quot;
  },
  {
    name: &quot;SAP AI&quot;,
    slug: &quot;sap-ai&quot;,
    description: &quot;AI and machine learning capabilities integrated into SAP applications&quot;,
    categories: [&quot;business&quot;, &quot;productivity&quot;],
    pricing: { free: false, paid: true, plans: [&quot;Standard&quot;, &quot;Enterprise&quot;] },
    features: [&quot;predictive analytics&quot;, &quot;process automation&quot;, &quot;intelligent insights&quot;, &quot;chatbot&quot;],
    website_url: &quot;https://sap.com/ai&quot;
  },
  {
    name: &quot;Oracle AI&quot;,
    slug: &quot;oracle-ai&quot;,
    description: &quot;AI and machine learning services from Oracle&quot;,
    categories: [&quot;business&quot;, &quot;development&quot;],
    pricing: { free: true, paid: true, plans: [&quot;Free&quot;, &quot;Standard&quot;, &quot;Enterprise&quot;] },
    features: [&quot;autonomous database&quot;, &quot;analytics&quot;, &quot;machine learning&quot;, &quot;chatbot&quot;],
    website_url: &quot;https://oracle.com/ai&quot;
  },
  {
    name: &quot;Transformers&quot;,
    slug: &quot;transformers&quot;,
    description: &quot;State-of-the-art machine learning library for natural language processing&quot;,
    categories: [&quot;code_ai&quot;, &quot;development&quot;],
    pricing: { free: true, paid: false, plans: [] },
    features: [&quot;pre-trained models&quot;, &quot;tokenization&quot;, &quot;pipelines&quot;, &quot;model hub&quot;],
    website_url: &quot;https://huggingface.co/transformers&quot;
  },
  {
    name: &quot;PyTorch&quot;,
    slug: &quot;pytorch&quot;,
    description: &quot;Open-source machine learning framework for deep learning&quot;,
    categories: [&quot;code_ai&quot;, &quot;development&quot;],
    pricing: { free: true, paid: false, plans: [] },
    features: [&quot;tensor computation&quot;, &quot;deep neural networks&quot;, &quot;GPU acceleration&quot;, &quot;dynamic computation&quot;],
    website_url: &quot;https://pytorch.org&quot;
  },
  {
    name: &quot;TensorFlow&quot;,
    slug: &quot;tensorflow&quot;,
    description: &quot;Open-source platform for machine learning and deep learning&quot;,
    categories: [&quot;code_ai&quot;, &quot;development&quot;],
    pricing: { free: true, paid: false, plans: [] },
    features: [&quot;neural networks&quot;, &quot;data preprocessing&quot;, &quot;model deployment&quot;, &quot;visualization&quot;],
    website_url: &quot;https://tensorflow.org&quot;
  },
  {
    name: &quot;Keras&quot;,
    slug: &quot;keras&quot;,
    description: &quot;High-level neural networks API for building deep learning models&quot;,
    categories: [&quot;code_ai&quot;, &quot;development&quot;],
    pricing: { free: true, paid: false, plans: [] },
    features: [&quot;user-friendly&quot;, &quot;modular&quot;, &quot;extensible&quot;, &quot;runs on TensorFlow&quot;],
    website_url: &quot;https://keras.io&quot;
  },
  {
    name: &quot;Scikit-learn&quot;,
    slug: &quot;scikit-learn&quot;,
    description: &quot;Simple and efficient tools for data mining and data analysis&quot;,
    categories: [&quot;code_ai&quot;, &quot;development&quot;],
    pricing: { free: true, paid: false, plans: [] },
    features: [&quot;machine learning&quot;, &quot;data analysis&quot;, &quot;model selection&quot;, &quot;preprocessing&quot;],
    website_url: &quot;https://scikit-learn.org&quot;
  },
  {
    name: &quot;Pandas&quot;,
    slug: &quot;pandas&quot;,
    description: &quot;Powerful data manipulation and analysis library for Python&quot;,
    categories: [&quot;code_ai&quot;, &quot;development&quot;],
    pricing: { free: true, paid: false, plans: [] },
    features: [&quot;data structures&quot;, &quot;data analysis&quot;, &quot;data cleaning&quot;, &quot;data transformation&quot;],
    website_url: &quot;https://pandas.pydata.org&quot;
  },
  {
    name: &quot;NumPy&quot;,
    slug: &quot;numpy&quot;,
    description: &quot;Fundamental package for scientific computing with Python&quot;,
    categories: [&quot;code_ai&quot;, &quot;development&quot;],
    pricing: { free: true, paid: false, plans: [] },
    features: [&quot;multidimensional arrays&quot;, &quot;mathematical functions&quot;, &quot;linear algebra&quot;, &quot;random sampling&quot;],
    website_url: &quot;https://numpy.org&quot;
  }
];

// Generate additional tools to reach 200+ AI tools
const generateAdditionalTools = () => {
  const additionalTools = [];
  const prefixes = [&quot;AI&quot;, &quot;Smart&quot;, &quot;NextGen&quot;, &quot;Pro&quot;, &quot;Ultra&quot;, &quot;Advanced&quot;, &quot;Enterprise&quot;, &quot;Premium&quot;];
  const suffixes = [&quot;Assistant&quot;, &quot;Platform&quot;, &quot;Studio&quot;, &quot;Lab&quot;, &quot;Engine&quot;, &quot;Suite&quot;, &quot;Hub&quot;, &quot;Center&quot;];
  const features = [&quot;text generation&quot;, &quot;image creation&quot;, &quot;voice synthesis&quot;, &quot;code completion&quot;, &quot;data analysis&quot;, &quot;research&quot;, &quot;marketing&quot;, &quot;productivity&quot;];
  
  for (let i = 0; i < 150; i++) {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const feature = features[Math.floor(Math.random() * features.length)];
    
    const tool = {
      name: `${prefix} ${suffix} ${i + 1}`,
      slug: `${prefix.toLowerCase()}-${suffix.toLowerCase()}-${i + 1}`,
      description: `Advanced ${feature} tool with cutting-edge AI capabilities`,
      categories: [feature],
      pricing: { 
        free: Math.random() > 0.5, 
        paid: true, 
        plans: [&quot;Basic&quot;, &quot;Pro&quot;, &quot;Enterprise&quot;] 
      },
      features: [
        &quot;AI-powered&quot;,
        &quot;cloud-based&quot;,
        &quot;real-time processing&quot;,
        &quot;API access&quot;,
        &quot;mobile app&quot;,
        &quot;chrome extension&quot;
      ],
      website_url: `https://${prefix.toLowerCase()}${suffix.toLowerCase()}${i + 1}.com`
    };
    
    additionalTools.push(tool);
  }
  
  return additionalTools;
};

// Combine initial tools with generated tools
const allTools = [...initialTools, ...generateAdditionalTools()];

// Create the data structure for the database
const aiToolsData = allTools.map((tool, index) => {
  return {
    id: index + 1,
    name: tool.name,
    slug: tool.slug,
    description: tool.description,
    website_url: tool.website_url,
    pricing: JSON.stringify(tool.pricing),
    features: tool.features,
    categories: tool.categories,
    launch_date: new Date(Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)).toISOString().split(&apos;T&apos;)[0],
    last_updated: new Date().toISOString().split(&apos;T&apos;)[0],
    is_active: true
  };
});

// Create SQL schema for AI tools table
const sqlSchema = `
-- AI Tools Table
CREATE TABLE IF NOT EXISTS ai_tools (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE,
  description TEXT,
  website_url VARCHAR(500),
  pricing JSONB,
  features TEXT[],
  categories TEXT[],
  launch_date DATE,
  last_updated TIMESTAMP,
  is_active BOOLEAN DEFAULT true
);
`;

// Create SQL schema for AI updates table
const aiUpdatesSchema = `
-- AI Updates Table  
CREATE TABLE IF NOT EXISTS ai_updates (
  id SERIAL PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  content TEXT,
  type VARCHAR(100),
  published_date DATE,
  source VARCHAR(255),
  tools_mentioned INTEGER[],
  FOREIGN KEY (tools_mentioned) REFERENCES ai_tools(id)
);
`;

// Sample AI updates data
const aiUpdates = [
  {
    type: &quot;product_launch&quot;,
    title: &quot;Claude 3.5 Sonnet Released&quot;,
    summary: &quot;Anthropic&apos;s latest model beats GPT-4 on several benchmarks&quot;,
    date: &quot;2024-01-20&quot;,
    source: &quot;Official Announcement&quot;,
    tools_mentioned: [&quot;Claude&quot;, &quot;ChatGPT&quot;]
  },
  {
    type: &quot;update&quot;,
    title: &quot;Midjourney v6.5 Alpha Access&quot;,
    summary: &quot;Major improvements in photorealism and prompt understanding&quot;,
    date: &quot;2024-01-19&quot;, 
    source: &quot;Discord Announcement&quot;,
    tools_mentioned: [&quot;Midjourney&quot;]
  },
  {
    type: &quot;tutorial&quot;,
    title: &quot;Building AI Agents with LangGraph&quot;,
    summary: &quot;Step-by-step guide to creating autonomous AI workflows&quot;,
    date: &quot;2024-01-18&quot;,
    author: &quot;AI Engineering Team&quot;,
    tools_mentioned: [&quot;LangGraph&quot;, &quot;OpenAI&quot;, &quot;Anthropic&quot;]
  }
];

console.log(&quot;AI Tools Database Population Script&quot;);
console.log(`Total tools to be added: ${aiToolsData.length}`);
console.log(&quot;Sample tool:&quot;, aiToolsData[0]);
console.log(&quot;\nSQL Schema for AI Tools:&quot;);
console.log(sqlSchema);
console.log(&quot;\nSQL Schema for AI Updates:&quot;);
console.log(aiUpdatesSchema);
console.log(&quot;\nSample AI Updates:&quot;);
console.log(aiUpdates);

// Write to a JSON file for import
const outputPath = path.join(__dirname, &apos;..&apos;, &apos;data&apos;, &apos;ai-tools-database.json&apos;);
fs.writeFileSync(outputPath, JSON.stringify(aiToolsData, null, 2));
console.log(`\nAI tools data written to: ${outputPath}`);

// Write SQL schema to a file
const sqlPath = path.join(__dirname, &apos;..&apos;, &apos;data&apos;, &apos;ai-tools-schema.sql&apos;);
fs.writeFileSync(sqlPath, `${sqlSchema}\n${aiUpdatesSchema}`);
console.log(`SQL schema written to: ${sqlPath}`);