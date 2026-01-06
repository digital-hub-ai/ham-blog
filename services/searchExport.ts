/**
 * Search result export service
 */

import { SearchResult } from './searchService';

// Export formats
export type ExportFormat = 'csv' | 'json' | 'xml' | 'html' | 'markdown' | 'pdf';

// Export options
export interface ExportOptions {
  format: ExportFormat;
  includeFields?: string[];
  excludeFields?: string[];
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  limit?: number;
  template?: string;
}

// Export search results
export function exportSearchResults(
  results: SearchResult[],
  options: ExportOptions
): string {
  // Apply sorting if specified
  let sortedResults = [...results];
  if (options.sortBy) {
    sortedResults.sort((a, b) => {
      const aVal = (a as any)[options.sortBy!] || '';
      const bVal = (b as any)[options.sortBy!] || '';
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return options.sortOrder === 'desc' 
          ? bVal.localeCompare(aVal) 
          : aVal.localeCompare(bVal);
      }
      return options.sortOrder === 'desc' 
        ? (bVal > aVal ? 1 : -1) 
        : (aVal > bVal ? 1 : -1);
    });
  }
  
  // Apply limit if specified
  if (options.limit && options.limit < sortedResults.length) {
    sortedResults = sortedResults.slice(0, options.limit);
  }
  
  // Filter fields if specified
  if (options.includeFields || options.excludeFields) {
    sortedResults = sortedResults.map(result => {
      const filteredResult: any = {};
      
      // Determine which fields to include
      const fieldsToInclude = options.includeFields || Object.keys(result);
      const fieldsToExclude = options.excludeFields || [];
      const finalFields = fieldsToInclude.filter(field => !fieldsToExclude.includes(field));
      
      // Copy only the specified fields
      finalFields.forEach(field => {
        (filteredResult as any)[field] = (result as any)[field];
      });
      
      return filteredResult;
    });
  }
  
  // Export based on format
  switch (options.format) {
    case &apos;csv&apos;:
      return exportToCSV(sortedResults);
    case &apos;json&apos;:
      return exportToJSON(sortedResults);
    case &apos;xml&apos;:
      return exportToXML(sortedResults);
    case &apos;html&apos;:
      return exportToHTML(sortedResults, options.template);
    case &apos;markdown&apos;:
      return exportToMarkdown(sortedResults);
    case &apos;pdf&apos;:
      return exportToPDFPlaceholder(sortedResults);
    default:
      throw new Error(`Unsupported export format: ${options.format}`);
  }
}

// Export to CSV
function exportToCSV(results: any[]): string {
  if (results.length === 0) return &apos;&apos;;
  
  // Get all unique keys from all results
  const allKeys = new Set<string>();
  results.forEach(result => {
    Object.keys(result).forEach(key => allKeys.add(key));
  });
  
  const headers = Array.from(allKeys);
  const csvRows = [headers.join(',')];
  
  results.forEach(result => {
    const values = headers.map(header => {
      const value = result[header];
      if (value === null || value === undefined) return &apos;&apos;;
      if (typeof value === &apos;string&apos;) {
        // Escape quotes and wrap in quotes if contains comma or quote
        const escaped = value.replace(/&quot;/g, &apos;&quot;&quot;&apos;);
        return escaped.includes(&apos;,&apos;) || escaped.includes(&apos;&quot;&apos;) ? `&quot;${escaped}&quot;` : escaped;
      }
      return String(value);
    });
    csvRows.push(values.join(&apos;,&apos;));
  });
  
  return csvRows.join(&apos;\n&apos;);
}

// Export to JSON
function exportToJSON(results: any[]): string {
  return JSON.stringify(results, null, 2);
}

// Export to XML
function exportToXML(results: any[]): string {
  let xml = &apos;<?xml version="1.0&quot; encoding="UTF-8&quot;?>\n&apos;;
  xml += &apos;<searchResults>\n';
  
  results.forEach((result, index) => {
    xml += `  <result id="${index}&quot;>\n`;
    Object.entries(result).forEach(([key, value]) => {
      // Convert key to valid XML tag name
      const tagName = key.replace(/[^a-zA-Z0-9_-]/g, &apos;_&apos;);
      xml += `    <${tagName}>${escapeXML(String(value))}</${tagName}>\n`;
    });
    xml += `  </result>\n`;
  });
  
  xml += &apos;</searchResults>&apos;;
  return xml;
}

// Export to HTML
function exportToHTML(results: any[], template?: string): string {
  if (template) {
    // Use custom template
    return template.replace(&apos;{{results}}&apos;, JSON.stringify(results));
  }
  
  // Default HTML template
  let html = `<!DOCTYPE html>
<html>
<head>
    <title>Search Results Export</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
        tr:nth-child(even) { background-color: #f9f9f9; }
    </style>
</head>
<body>
    <h1>Search Results Export</h1>
    <p>Exported ${results.length} results</p>
    <table>
        <thead>
            <tr>`;
  
  if (results.length > 0) {
    const headers = Object.keys(results[0]);
    headers.forEach(header => {
      html += `<th>${escapeHTML(header)}</th>`;
    });
    html += `</tr>
        </thead>
        <tbody>`;
    
    results.forEach(result => {
      html += `<tr>`;
      headers.forEach(header => {
        const value = result[header];
        html += `<td>${escapeHTML(String(value || &apos;&apos;))}</td>`;
      });
      html += `</tr>`;
    });
    
    html += `</tbody>`;
  }
  
  html += `</table>
</body>
</html>`;
  
  return html;
}

// Export to Markdown
function exportToMarkdown(results: any[]): string {
  if (results.length === 0) return '# Search Results Export\n\nNo results found.';
  
  const headers = Object.keys(results[0]);
  let markdown = '# Search Results Export\n\n';
  markdown += `Exported ${results.length} results\n\n`;
  
  // Create table header
  markdown += '| ' + headers.map(h => escapeMarkdown(h)).join(' | ') + ' |\n';
  markdown += '| ' + headers.map(() => '---').join(' | ') + ' |\n';
  
  // Add rows
  results.forEach(result => {
    const row = headers.map(header => {
      const value = result[header];
      return escapeMarkdown(String(value || &apos;&apos;));
    });
    markdown += &apos;| &apos; + row.join(&apos; | &apos;) + &apos; |\n&apos;;
  });
  
  return markdown;
}

// Placeholder for PDF export (would require a PDF library in real implementation)
function exportToPDFPlaceholder(results: any[]): string {
  return `PDF Export Placeholder
  
  This is a placeholder for PDF export functionality.
  In a real implementation, this would generate a PDF document with the search results.
  
  Results count: ${results.length}
  
  To implement PDF export, you would typically use a library like pdfmake or jsPDF.`;
}

// Helper functions for escaping content
function escapeXML(str: string): string {
  return str
    .replace(/&/g, &apos;&amp;&apos;)
    .replace(/</g, '&lt;')
    .replace(/>/g, &apos;&gt;&apos;)
    .replace(/&quot;/g, &apos;&quot;&apos;)
    .replace(/&apos;/g, &apos;&apos;&apos;);
}

function escapeHTML(str: string): string {
  return str
    .replace(/&/g, &apos;&amp;&apos;)
    .replace(/</g, '&lt;')
    .replace(/>/g, &apos;&gt;&apos;)
    .replace(/&quot;/g, &apos;&quot;&apos;);
}

function escapeMarkdown(str: string): string {
  return str
    .replace(/\\/g, &apos;\\\\&apos;)
    .replace(/\*/g, &apos;\\*&apos;)
    .replace(/_/g, &apos;\\_&apos;)
    .replace(/\{/g, &apos;\\{&apos;)
    .replace(/\}/g, &apos;\\}&apos;)
    .replace(/\[/g, &apos;\\[&apos;)
    .replace(/\]/g, &apos;\\]&apos;)
    .replace(/\(/g, &apos;\\(&apos;)
    .replace(/\)/g, &apos;\\)&apos;)
    .replace(/#/g, &apos;\\#&apos;)
    .replace(/\+/g, &apos;\\+&apos;)
    .replace(/\-/g, &apos;\\-&apos;)
    .replace(/\./g, &apos;\\.&apos;)
    .replace(/\!/g, &apos;\\!&apos;);
}

// Generate export filename
export function generateExportFilename(
  query: string,
  format: ExportFormat,
  timestamp: boolean = true
): string {
  let filename = &apos;search-results&apos;;
  
  if (query) {
    // Sanitize query for filename
    filename += `-${query
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, &apos;-&apos;)
      .replace(/^-+|-+$/g, &apos;&apos;)}`;
  }
  
  if (timestamp) {
    const now = new Date();
    filename += `-${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, &apos;0&apos;)}${now.getDate().toString().padStart(2, &apos;0&apos;)}`;
  }
  
  filename += `.${format}`;
  return filename;
}

export default {
  exportSearchResults,
  generateExportFilename
};