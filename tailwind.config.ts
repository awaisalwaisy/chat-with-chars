import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
