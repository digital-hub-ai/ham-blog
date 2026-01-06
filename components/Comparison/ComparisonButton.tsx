&apos;use client&apos;;

import { useState, useEffect } from &apos;react&apos;;
import { Tool } from &apos;@/types/tool&apos;;
import { useComparison } from &apos;@/contexts/ComparisonContext&apos;;
import { FontAwesomeIcon } from &apos;@fortawesome/react-fontawesome&apos;;
import { faBalanceScale, faCheck, faPlus } from &apos;@fortawesome/free-solid-svg-icons&apos;;

interface ComparisonButtonProps {
  tool: Tool;
  size?: &apos;sm&apos; | &apos;md&apos; | &apos;lg&apos;;
  showLabel?: boolean;
  className?: string;
}

const ComparisonButton: React.FC<ComparisonButtonProps> = ({
  tool,
  size = 'md',
  showLabel = true,
  className = '',
}) => {
  const { addToComparison, removeFromComparison, isInComparison, canAddMore } = useComparison();
  const [isInCompare, setIsInCompare] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Handle hydration mismatch
  useEffect(() => {
    setIsClient(true);
    setIsInCompare(isInComparison(tool.id));
  }, [isInComparison, tool.id]);

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const iconClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInCompare) {
      removeFromComparison(tool.id);
    } else if (canAddMore) {
      addToComparison(tool);
    }
    setIsInCompare(!isInCompare);
  };

  if (!isClient) {
    return (
      <button 
        className={`inline-flex items-center ${sizeClasses[size]} ${className}`}
        disabled
      >
        <FontAwesomeIcon icon={faBalanceScale} className={iconClasses[size]} />
        {showLabel && <span className="ml-2&quot;>Compare</span>}
      </button>
    );
  }

  const isDisabled = !isInCompare && !canAddMore;
  const buttonText = isInCompare ? &apos;Added&apos; : canAddMore ? &apos;Compare&apos; : &apos;Max 3&apos;;

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`inline-flex items-center ${sizeClasses[size]} ${
        isInCompare 
          ? &apos;text-green-500 hover:text-green-600&apos; 
          : isDisabled
            ? &apos;text-gray-400 cursor-not-allowed&apos;
            : &apos;text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300&apos;
      } transition-colors ${className}`}
      aria-label={isInCompare ? &apos;Remove from comparison&apos; : &apos;Add to comparison&apos;}
      title={isInCompare ? &apos;Remove from comparison&apos; : &apos;Add to comparison}
    >
      {isInCompare ? (
        <FontAwesomeIcon icon={faCheck} className="mr-1&quot; />
      ) : (
        <FontAwesomeIcon icon={faBalanceScale} className={iconClasses[size]} />
      )}
      {showLabel && (
        <span className="ml-2&quot;>
          <FontAwesomeIcon icon={faPlus} className="mr-1&quot; />
          {buttonText}
        </span>
      )}
    </button>
  );
};

export default ComparisonButton;
