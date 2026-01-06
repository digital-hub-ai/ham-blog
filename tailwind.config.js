/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slideUp': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme(&apos;colors.gray.700&apos;),
            a: {
              color: theme(&apos;colors.primary.600&apos;),
              &apos;&:hover&apos;: {
                color: theme(&apos;colors.primary.700&apos;),
              },
            },
            &apos;h1, h2, h3, h4, h5, h6&apos;: {
              color: theme(&apos;colors.gray.900&apos;),
              fontWeight: &apos;700&apos;,
            },
            code: {
              backgroundColor: theme(&apos;colors.gray.100&apos;),
              color: theme(&apos;colors.pink.600&apos;),
              padding: &apos;0.2em 0.4em&apos;,
              borderRadius: &apos;0.25rem&apos;,
              fontSize: &apos;0.875em&apos;,
            },
            &apos;code::before, code::after&apos;: {
              content: &apos;none&apos;,
            },
            &apos;pre code&apos;: {
              backgroundColor: &apos;transparent&apos;,
              color: &apos;inherit&apos;,
              padding: 0,
              borderRadius: 0,
            },
          },
        },
        dark: {
          css: {
            color: theme(&apos;colors.gray.300&apos;),
            a: {
              color: theme(&apos;colors.primary.400&apos;),
              &apos;&:hover&apos;: {
                color: theme(&apos;colors.primary.300&apos;),
              },
            },
            &apos;h1, h2, h3, h4, h5, h6&apos;: {
              color: theme(&apos;colors.white&apos;),
            },
            code: {
              backgroundColor: theme(&apos;colors.gray.800&apos;),
              color: theme(&apos;colors.pink.400&apos;),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require(&apos;@tailwindcss/typography&apos;),
  ],
}
