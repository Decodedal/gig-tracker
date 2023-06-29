/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
       offWhite:	"#FAF9F6",
       coldWhite:"#d5e8e7",
      },
    },
    variants: {
      extend: {
        backgroundColor: ['dark', 'dark-hover', 'dark-group-hover'],
        borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
        textColor: ['dark', 'dark-hover', 'dark-active'],
      },
    darkMode: 'class', // 'media' or 'class'
  },
    plugins: [],
  }
}