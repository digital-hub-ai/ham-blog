import { NextApiRequest, NextApiResponse } from &apos;next&apos;;
import { getSearchAnalytics } from &apos;../../services/searchService&apos;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &apos;GET&apos;) {
    return res.status(405).json({ 
      success: false,
      message: &apos;Method not allowed&apos; 
    });
  }

  try {
    const analytics = getSearchAnalytics();
    
    return res.status(200).json({ 
      success: true,
      data: analytics
    });
  } catch (error) {
    console.error(&apos;Analytics API error:&apos;, error);
    return res.status(500).json({ 
      success: false,
      message: &apos;Error fetching analytics data&apos;,
      error: error instanceof Error ? error.message : &apos;Unknown error&apos;
    });
  }
}