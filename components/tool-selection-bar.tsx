// components/tool-selection-bar.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { tools } from '../data/tools';
import { Tool } from '../types/tool';

interface ToolSelectionBarProps {
  tools: string[];
  availableTools: typeof tools;
  onAddTool: (toolName: string) => void;
  onRemoveTool: (toolName: string) => void;
  maxTools: number;
}

export default function ToolSelectionBar({ 
  tools, 
  availableTools, 
  onAddTool, 
  onRemoveTool, 
  maxTools 
}: ToolSelectionBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const selectedToolData = availableTools.filter(tool => tool !== undefined && tools.includes(tool.name)) as Tool[];
  const filteredSuggestions = availableTools.filter(tool => tool !== undefined && 
    !tools.includes(tool.name) &&
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    tools.length < maxTools
  ) as Tool[];

  return (
    <div className="border-b border-white/10 bg-white/5 backdrop-blur-md&quot;>
      <div className="max-w-7xl mx-auto px-4 py-6&quot;>
        <div className="space-y-4&quot;>
          {/* Search and Add Tools */}
          <div className="relative&quot;>
            <div className="flex gap-4&quot;>
              <div className="flex-1 relative&quot;>
                <input
                  type="text&quot;
                  placeholder="Search for tools to compare...&quot;
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400&quot;
                />
                
                {/* Suggestions Dropdown */}
                {showSuggestions && searchTerm && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden z-50&quot;>
                    {filteredSuggestions.length > 0 ? (
                      filteredSuggestions.map((tool) => (
                        <button
                          key={tool.name}
                          onClick={() => {
                            onAddTool(tool.name);
                            setSearchTerm(&apos;);
                            setShowSuggestions(false);
                          }}
                          className="w-full p-3 hover:bg-white/20 transition-colors text-left&quot;
                        >
                          <div className="flex items-center gap-3&quot;>
                            <Image
                              src={`https://www.google.com/s2/favicons?domain=${tool.url ? (() => {
                                try {
                                  return new URL(tool.url).hostname;
                                } catch {
                                  return &apos;example.com&apos;;
                                }
                              })() : &apos;example.com}&sz=24`}
                              alt={tool.name}
                              width={24}
                              height={24}
                              className="rounded&quot;
                            />
                            <div className="flex-1&quot;>
                              <div className="font-medium text-white&quot;>{tool.name}</div>
                              <div className="text-sm text-gray-400&quot;>{tool.category} • {tool.subcategory}</div>
                            </div>
                            <div className="text-sm text-blue-400&quot;>+ Add</div>
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="p-3 text-gray-400 text-center&quot;>
                        {tools.length >= maxTools 
                          ? `Maximum ${maxTools} tools reached` 
                          : &apos;No tools found&apos;
                        }
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <div className="text-sm text-gray-400 flex items-center&quot;>
                {tools.length} / {maxTools} tools
              </div>
            </div>
          </div>

          {/* Selected Tools */}
          {tools.length > 0 && (
            <div className="flex flex-wrap gap-3&quot;>
              {selectedToolData.map((tool) => (
                <div
                  key={tool.name}
                  className="group relative bg-white/10 border border-white/20 rounded-lg p-3 hover:bg-white/20 transition-all duration-300&quot;
                >
                  <div className="flex items-center gap-3&quot;>
                    <Image
                      src={`https://www.google.com/s2/favicons?domain=${tool.url ? (() => {
                        try {
                          return new URL(tool.url).hostname;
                        } catch {
                          return &apos;example.com&apos;;
                        }
                      })() : &apos;example.com}&sz=32`}
                      alt={tool.name}
                      width={32}
                      height={32}
                      className="rounded&quot;
                    />
                    <div>
                      <div className="font-medium text-white&quot;>{tool.name}</div>
                      <div className="text-sm text-gray-400&quot;>{tool.category}</div>
                    </div>
                    <button
                      onClick={() => onRemoveTool(tool.name)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-red-400 hover:text-red-300&quot;
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
              
              {/* Add More Tools Button */}
              {tools.length < maxTools && (
                <button
                  onClick={() => document.querySelector(&apos;input)?.focus()}
                  className="border-2 border-dashed border-white/30 rounded-lg p-3 hover:border-white/50 transition-colors min-w-[200px]&quot;
                >
                  <div className="text-center text-gray-400&quot;>
                    <div className="text-2xl mb-1&quot;>+</div>
                    <div className="text-sm&quot;>Add Tool</div>
                  </div>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
