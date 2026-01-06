import { NextRequest, NextResponse } from &apos;next/server&apos;;
import { z } from &apos;zod&apos;;

// Common validation schemas
export const schemas = {
  email: z.string().email(&apos;Invalid email format&apos;).min(5).max(255).trim(),
  password: z.string()
    .min(12, &apos;Password must be at least 12 characters&apos;)
    .regex(/[A-Z]/, &apos;Password must contain at least one uppercase letter&apos;)
    .regex(/[a-z]/, &apos;Password must contain at least one lowercase letter&apos;)
    .regex(/[0-9]/, &apos;Password must contain at least one number&apos;)
    .regex(/[^A-Za-z0-9]/, &apos;Password must contain at least one special character&apos;),
  name: z.string().min(2).max(100).trim(),
  twoFactorCode: z.string().length(6, &apos;Code must be 6 digits&apos;).regex(/^\d+$/, &apos;Code must contain only numbers&apos;),
  backupCode: z.string().length(12, &apos;Backup code must be 12 characters&apos;).regex(/^[A-Z0-9]+$/, &apos;Invalid backup code format&apos;),
};

// Validation error response
class ValidationError extends Error {
  status: number;
  errors: Record<string, string[]>;

  constructor(errors: Record<string, string[]>) {
    super(&apos;Validation failed&apos;);
    this.name = &apos;ValidationError&apos;;
    this.status = 400;
    this.errors = errors;
  }
}

// Validate request body against schema
export function validateBody<T extends z.ZodTypeAny>(schema: T) {
  return async (req: NextRequest) => {
    try {
      const body = await req.json();
      const result = await schema.safeParseAsync(body);
      
      if (!result.success) {
        const errors: Record<string, string[]> = {};
        
        result.error.issues.forEach((issue) => {
          const path = issue.path.join(&apos;.&apos;);
          if (!errors[path]) {
            errors[path] = [];
          }
          errors[path].push(issue.message);
        });
        
        throw new ValidationError(errors);
      }
      
      return result.data as z.infer<typeof schema>;
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new ValidationError({ _: [&apos;Invalid JSON body&apos;] });
      }
      throw error;
    }
  };
}

// Validate query parameters against schema
export function validateQuery<T extends z.ZodTypeAny>(schema: T) {
  return (req: NextRequest) => {
    const query = Object.fromEntries(req.nextUrl.searchParams);
    const result = schema.safeParse(query);
    
    if (!result.success) {
      const errors: Record<string, string[]> = {};
      
      result.error.issues.forEach((issue) => {
        const path = issue.path.join(&apos;.&apos;);
        if (!errors[path]) {
          errors[path] = [];
        }
        errors[path].push(issue.message);
      });
      
      throw new ValidationError(errors);
    }
    
    return result.data as z.infer<typeof schema>;
  };
}

// Error handler for API routes
export function withValidation(handler: (req: NextRequest, ...args: any) => Promise<NextResponse>) {
  return async (req: NextRequest, ...args: any) => {
    try {
      return await handler(req, ...args);
    } catch (error) {
      if (error instanceof ValidationError) {
        return NextResponse.json(
          { 
            success: false, 
            error: &apos;Validation failed&apos;,
            errors: error.errors 
          },
          { status: error.status }
        );
      }
      
      console.error(&apos;Validation error:&apos;, error);
      
      return NextResponse.json(
        { 
          success: false, 
          error: &apos;An unexpected error occurred&apos;,
          message: error instanceof Error ? error.message : &apos;Unknown error&apos;
        },
        { status: 500 }
      );
    }
  };
}

// Helper to validate API keys
export function validateApiKey(apiKey: string | null) {
  if (!apiKey) {
    throw new ValidationError({ apiKey: [&apos;API key is required&apos;] });
  }
  
  // In production, validate against your actual API keys
  if (process.env.NODE_ENV === &apos;production&apos;) {
    const validKeys = process.env.API_KEYS?.split(&apos;,&apos;) || [];
    if (!validKeys.includes(apiKey)) {
      throw new ValidationError({ apiKey: [&apos;Invalid API key&apos;] });
    }
  }
  
  return true;
}
