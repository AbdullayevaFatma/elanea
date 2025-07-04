
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-slide': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },

      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'slide-in': 'slide-in 0.3s ease-out forwards',
        'fade-slide': 'fade-slide 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
  safelist: [
    "object-top",
    "object-center",
    "object-bottom",
  ],
  
};
