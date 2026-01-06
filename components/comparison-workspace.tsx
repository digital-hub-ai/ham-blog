// components/comparison-workspace.tsx
'use client';

import { ComparisonDimension } from '../lib/comparison-context';
import { 
  SpecsMatrix, 
  PerformanceRadar, 
  CostTimeline, 
  StackSynergy, 
  SentimentSphere, 
  AIAnalyst 
} from './comparison-dimensions';

interface ComparisonWorkspaceProps {
  dimension: ComparisonDimension;
  tools: string[];
  userPreferences: any;
  onWorkspaceReady: () => void;
}

export default function ComparisonWorkspace({ 
  dimension, 
  tools, 
  userPreferences, 
  onWorkspaceReady 
}: ComparisonWorkspaceProps) {
  const renderDimension = () => {
    if (tools.length < 2) {
      return (
        <div className="flex items-center justify-center h-full&quot;>
          <div className="text-center&quot;>
            <div className="text-6xl mb-4&quot;>⚡</div>
            <h3 className="text-2xl font-bold mb-2&quot;>Quantum Comparator Ready</h3>
            <p className="text-gray-400&quot;>Select at least 2 tools to begin analysis</p>
          </div>
        </div>
      );
    }

    const componentProps = {
      tools,
      userPreferences,
      onReady: onWorkspaceReady
    };

    switch (dimension) {
      case &apos;specs_matrix&apos;:
        return <SpecsMatrix {...componentProps} />;
      case &apos;performance_radar&apos;:
        return <PerformanceRadar {...componentProps} />;
      case &apos;cost_timeline&apos;:
        return <CostTimeline {...componentProps} />;
      case &apos;stack_synergy&apos;:
        return <StackSynergy {...componentProps} />;
      case &apos;sentiment_sphere&apos;:
        return <SentimentSphere {...componentProps} />;
      case &apos;ai_analyst&apos;:
        return <AIAnalyst {...componentProps} />;
      default:
        return <SpecsMatrix {...componentProps} />;
    }
  };

  return (
    <div className="h-full overflow-auto&quot;>
      {renderDimension()}
    </div>
  );
}
