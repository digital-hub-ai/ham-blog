import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface InitialAvatarProps {
  name: string;
  size?: number;
  className?: string;
  colors?: string[];
  fontSize?: number | string;
  fontWeight?: number | string;
  square?: boolean;
  onClick?: () => void;
}

const COLORS = [
  &apos;#FF6B6B&apos;, // Red
  &apos;#4ECDC4&apos;, // Teal
  &apos;#45B7D1&apos;, // Blue
  &apos;#96CEB4&apos;, // Green
  &apos;#FFEEAD&apos;, // Yellow
  &apos;#D4A5A5&apos;, // Pink
  &apos;#9B59B6&apos;, // Purple
  &apos;#E67E22&apos;, // Orange
  &apos;#1ABC9C&apos;, // Turquoise
  &apos;#E74C3C&apos;, // Red-Orange
];

const InitialAvatar: React.FC<InitialAvatarProps> = ({
  name = '',
  size = 40,
  className = '',
  colors = COLORS,
  fontSize = '60%',
  fontWeight = 600,
  square = false,
  onClick,
}) => {
  // Generate initials from name
  const initials = useMemo(() => {
    if (!name) return '??';
    
    const nameParts = name.trim().split(/\s+/);
    if (nameParts.length === 1) {
      return nameParts[0].charAt(0).toUpperCase();
    }
    
    return `${nameParts[0].charAt(0)}${nameParts[nameParts.length - 1].charAt(0)}`.toUpperCase();
  }, [name]);

  // Generate a consistent color based on the name
  const colorIndex = useMemo(() => {
    if (!name) return 0;
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % colors.length;
  }, [name, colors.length]);

  const bgColor = colors[colorIndex];
  const textColor = getContrastColor(bgColor);

  const avatarStyle = {
    width: size,
    height: size,
    minWidth: size,
    minHeight: size,
    borderRadius: square ? &apos;0.5rem&apos; : &apos;50%&apos;,
    backgroundColor: bgColor,
    color: textColor,
    fontSize: typeof fontSize === &apos;number&apos; ? `${fontSize}px` : fontSize,
    fontWeight,
    display: &apos;flex&apos;,
    alignItems: &apos;center&apos;,
    justifyContent: &apos;center&apos;,
    userSelect: &apos;none&apos; as const,
    overflow: &apos;hidden&apos;,
    textTransform: &apos;uppercase&apos; as const,
    cursor: onClick ? &apos;pointer&apos; : &apos;default&apos;,
  };

  return (
    <motion.div
      className={`initial-avatar ${className}`}
      style={avatarStyle}
      whileHover={onClick ? { scale: 1.05 } : {}}
      whileTap={onClick ? { scale: 0.95 } : {}}
      onClick={onClick}
      title={name}
    >
      {initials}
    </motion.div>
  );
};

// Helper function to determine text color based on background brightness
function getContrastColor(hexColor: string): string {
  // Convert hex to RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  
  // Calculate relative luminance (perceived brightness)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Return black for light colors, white for dark colors
  return luminance > 0.5 ? &apos;#000000&apos; : &apos;#FFFFFF&apos;;
}

export default InitialAvatar;
