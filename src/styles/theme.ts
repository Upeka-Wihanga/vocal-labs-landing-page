export const theme = {
    colors: {
        primary: '#4F46E5',
        secondary: '#7C3AED',
        background: '#FFFFFF',
        backgroundDark: '#111827',
        backgroundLight: '#F3F4F6', // Light background color
        backgroundLightYellow: '#FFF9C4', // Light yellow background color
        backgroundLightBlue: '#E0F7FA', // Light blue background color
        text: '#1F2937',
        gray: {
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
        },
    },
    breakpoints: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
    },
    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    },
    transitions: {
        default: '0.3s ease',
        fast: '0.15s ease',
        slow: '0.5s ease',
    },
    zIndex: {
        navbar: 1000,
        modal: 2000,
        tooltip: 3000,
    },
};

export type Theme = typeof theme;