&apos;use client&apos;;

import { useEffect, useState } from &apos;react&apos;;
import { FontAwesomeIcon } from &apos;@fortawesome/react-fontawesome&apos;;
import { faHeart as faHeartSolid, faHeart as faHeartRegular } from &apos;@fortawesome/free-solid-svg-icons&apos;;
import { Tool } from &apos;@/types/tool&apos;;
import useFavorites from &apos;@/hooks/useFavorites&apos;;

interface FavoritesButtonProps {
  tool: Tool;
  size?: &apos;sm&apos; | &apos;md&apos; | &apos;lg&apos;;
  showLabel?: boolean;
  className?: string;
}

const FavoritesButton: React.FC<FavoritesButtonProps> = ({
  tool,
  size = 'md',
  showLabel = true,
  className = '',
}) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [isClient, setIsClient] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  
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

  // Handle hydration mismatch
  useEffect(() => {
    setIsClient(true);
    setIsFavorited(isFavorite(tool.id));
  }, [isFavorite, tool.id]);

  if (!isClient) {
    return (
      <button 
        className={`inline-flex items-center ${sizeClasses[size]} ${className}`}
        disabled
      >
        <FontAwesomeIcon icon={faHeartRegular} className={iconClasses[size]} fixedWidth />
        {showLabel && <span className="ml-2&quot;>Save</span>}
      </button>
    );
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(tool.id);
    setIsFavorited(!isFavorited);
  };



  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center ${sizeClasses[size]} ${
        isFavorited 
          ? &apos;text-red-500 hover:text-red-600&apos; 
          : &apos;text-gray-500 hover:text-red-500&apos;
      } transition-colors ${className}`}
      aria-label={isFavorited ? &apos;Remove from favorites&apos; : &apos;Add to favorites&apos;}
      title={isFavorited ? &apos;Remove from favorites&apos; : &apos;Add to favorites&apos;}
    >
      {isFavorited ? (
        <FontAwesomeIcon icon={faHeartSolid} className={iconClasses[size]} style={{ color: &apos;red }} fixedWidth />
      ) : (
        <FontAwesomeIcon icon={faHeartRegular} className={iconClasses[size]} fixedWidth />
      )}
      {showLabel && (
        <span className="ml-2&quot;>
          {isFavorited ? &apos;Saved&apos; : &apos;Save&apos;}
        </span>
      )}
    </button>
  );
};

export default FavoritesButton;
