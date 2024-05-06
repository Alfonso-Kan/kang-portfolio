import { transform } from "next/dist/build/swc";
import { blob } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        layout: [
          `navbar navbar navbar`,
          `profile profile profile`,
          `formation formation formation`,
        ]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
       'kang-pixels': ['PIXELS', 'sans-serif'],
       'kang-cracked': ['CRACKED', 'sans-serif'],
       'kang-invasion': ['INVASION', 'sans-serif']
      },
      colors: {
        'kang-gray': {
          300: '#d0d0d0',
          900: '#231f20'
        },
        'kang-red': {
          300: '#ff6666',
          900: '#bb4430'
        },
        'kang-blue': {
          300: '#7ebdc2',
          900: '#66b3ff '
        },
        'kang-beige': {
          300: '#ffd699',
          900: '#f3dfa2'
        },
        'kang-ivory': {
          300: '#fffacd',
          900: '#efe6dd'
        }
      },
      boxShadow: {
        myShadow1: '4.1px -5px 0 0 rgb(17, 24, 39)',
        myShadow2: '-4.1px -5px 0 0 rgb(17, 24, 39)'
      }
    },
  },
  plugins: [
    function({addUtilities}: any) { // se debería definir una interface pero sería un monstruo
      const newUtilities = {
        '.custom-button-hover': {
          '&:hover': {
            background: 'url(/images/pixel.png)',
            'transition-delay': '0.8s',
            'background-size': '180px',
            animation: 'animate 0.8s steps(8) forwards',
          },
          '@keyframes animate': {
            '0%': {
              'background-position-y': '0',
            },
            '100%': {
              'background-position-y': '-480px',
            }
          }
        }
      }
      addUtilities(newUtilities, ['hover'])
    }
  ],
};
export default config;
