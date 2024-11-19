import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
        'satoshi-bold': ['Satoshi Bold', 'sans-serif'],
        'satoshi-italic': ['Satoshi Italic', 'sans-serif'],
        'satoshi-medium': ['Satoshi Medium', 'sans-serif'],
        'product-sans': ['Product Sans', 'sans-serif'],
        'product-sans-medium': ['Product Sans Medium', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'dm-sans-bold': ['DM Sans Bold', 'sans-serif'],
        'dm-sans-medium': ['DM Sans Medium', 'sans-serif'],
        'dm-sans-italic': ['DM Sans Italic', 'sans-serif'],
        'dm-sans-extra-bold': ['DM Sans Extra Bold', 'sans-serif'],
        'dm-sans-black': ['DM Sans Black', 'sans-serif'],
        'janitor': ['Janitor', 'sans-serif'],
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, #BFBFBF 1.5px, transparent 1px)', // Defines the dot pattern
      },
      backgroundSize: {
        'dot-size': '40px 40px', // Sets the size of the pattern
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
