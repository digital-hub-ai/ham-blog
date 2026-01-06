import { motion } from &apos;framer-motion&apos;;

interface AnimatedSVGLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const AnimatedSVGLogo: React.FC<AnimatedSVGLogoProps> = ({
  width = 48,
  height = 48,
  className = '',
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24&quot;
        fill="none&quot;
        xmlns="http://www.w3.org/2000/svg&quot;
        className="text-blue-500&quot;
      >
        <motion.path
          d="M12 2L2 7L12 12L22 7L12 2Z&quot;
          stroke="currentColor&quot;
          strokeWidth="2&quot;
          strokeLinecap="round&quot;
          strokeLinejoin="round&quot;
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.path
          d="M2 17L12 22L22 17&quot;
          stroke="currentColor&quot;
          strokeWidth="2&quot;
          strokeLinecap="round&quot;
          strokeLinejoin="round&quot;
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.path
          d="M2 12L12 17L22 12&quot;
          stroke="currentColor&quot;
          strokeWidth="2&quot;
          strokeLinecap="round&quot;
          strokeLinejoin="round&quot;
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </svg>
    </motion.div>
  );
};
