import { type ClassValue, clsx } from &apos;clsx&apos;;
import { twMerge } from &apos;tailwind-merge&apos;;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Add other utility functions here as needed
export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString(&apos;en-US&apos;, {
    year: &apos;numeric&apos;,
    month: &apos;long&apos;,
    day: &apos;numeric&apos;,
  });
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL || &apos;&apos;}${path}`;
}
