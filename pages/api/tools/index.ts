import { NextApiRequest, NextApiResponse } from &apos;next&apos;;
import dbConnect from &apos;../../../lib/dbConnect&apos;;
import Tool from &apos;../../../models/Tool&apos;;
import { getCurrentUser } from &apos;../../../lib/auth&apos;;

type QueryParams = {
  q?: string | string[];
  page?: string | string[];
  limit?: string | string[];
  category?: string | string[];
  pricing?: string | string[];
  sort?: string | string[];
};

type ToolResponse = {
  success: boolean;
  data?: any;
  error?: string;
  details?: any;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ToolResponse>
) {
  const { method } = req;
  
  await dbConnect();
  
  switch (method) {
    case &apos;GET&apos;:
      try {
        const { 
          q = &apos;&apos;, 
          page = &apos;1&apos;, 
          limit = &apos;10&apos;,
          category,
          pricing,
          sort = &apos;-createdAt&apos;
        } = req.query as QueryParams;
        
        // Ensure we have string values
        const searchQuery = Array.isArray(q) ? q[0] : q || &apos;&apos;;
        const pageNum = Math.max(1, parseInt(Array.isArray(page) ? page[0] : page || &apos;1&apos;, 10));
        const limitNum = Math.min(50, Math.max(1, parseInt(Array.isArray(limit) ? limit[0] : limit || &apos;10&apos;, 10)));
        const categoryFilter = Array.isArray(category) ? category[0] : category;
        const pricingFilter = Array.isArray(pricing) ? pricing[0] : pricing;
        const sortField = Array.isArray(sort) ? sort[0] : sort;
        
        const result = await Tool.search(searchQuery, {
          page: pageNum,
          limit: limitNum,
          category: categoryFilter,
          pricing: pricingFilter,
          sort: sortField
        });
        
        res.status(200).json({
          success: true,
          data: result.tools,
          pagination: {
            page: result.page,
            limit: parseInt(limit as string),
            total: result.total,
            totalPages: result.totalPages
          }
        });
      } catch (error) {
        console.error(&apos;Error fetching tools:&apos;, error);
        res.status(500).json({ 
          success: false, 
          error: &apos;Server error while fetching tools&apos;,
          details: process.env.NODE_ENV === &apos;development&apos; ? (error as Error).message : undefined
        });
      }
      break;
      
    case &apos;POST&apos;:
      try {
        const user = await getCurrentUser(req);
              
        // In production, you might want to add authentication
        // if (!user) {
        //   return res.status(401).json({ success: false, error: &apos;Not authorized&apos; });
        // }
              
        const tool = await Tool.create({
          ...req.body,
          submittedBy: user?.id || null
        });
              
        res.status(201).json({ success: true, data: tool });
      } catch (error) {
        console.error(&apos;Error creating tool:&apos;, error);
        const errorMessage = error instanceof Error ? error.message : &apos;An unknown error occurred&apos;;
        res.status(400).json({ 
          success: false, 
          error: &apos;Error creating tool&apos;,
          details: process.env.NODE_ENV === &apos;development&apos; ? errorMessage : undefined
        });
      }
      break;
      
    default:
      res.setHeader(&apos;Allow&apos;, [&apos;GET&apos;, &apos;POST&apos;]);
      res.status(405).json({ 
        success: false, 
        error: `Method ${method} not allowed` 
      });
      break;
  }
}
