import type { Config } from "tailwindcss";
import type { PluginUtils } from "tailwindcss/types/config"
import typographyPlugin from '@tailwindcss/typography'
import daisyui from 'daisyui';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: ({ theme }: PluginUtils) => ({ // <-- Works too
        myTheme: {
          css: {
            "--tw-prose-body": theme("colors.blue.800"),
          },
        },
      }),
    },
  },
  plugins: [typographyPlugin, daisyui],
};
export default config;
