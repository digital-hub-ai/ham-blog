import React from 'react';

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  src, 
  alt, 
  width = '100%', 
  height = '300px',
  className = ''
}) => {
  // If we have a real image src, use it; otherwise show a placeholder
  if (src) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={`rounded-lg shadow-md ${className}`}
        style={{ width, height, objectFit: 'cover' }}
      />
    );
  }

  // Placeholder with gradient background
  return (
    <div 
      className={`rounded-lg shadow-md flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-dashed border-amber-300 ${className}`}
      style={{ width, height }}
    >
      <div className="text-center text-amber-800">
        <div className="text-4xl mb-2">🖼️</div>
        <div className="font-medium">{alt}</div>
      </div>
    </div>
  );
};

export default ImagePlaceholder;