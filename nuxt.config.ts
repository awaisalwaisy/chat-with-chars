// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/kinde"],

  typescript: {
    shim: false,
  },

  dir: {
    assets: "./app/assets",
    layouts: "./app/layouts",
    middleware: "./app/middleware",
    pages: "./app/pages",
    plugins: "./app/plugins",
  },

  plugins: [
    // './app/plugins/v-calender.client.ts',
    // './app/plugins/testingPlugin.client.ts',
    "./app/plugins/sonner.client.ts",
  ],

  imports: {
    autoImport: true,
    dirs: [
      "./app/functions",
      "./app/stores",
      "./app/constants", // doesn't work, error: Cannot find name 'EMAIL_PATTERN'.ts(2304)
    ],
  },

  components: [{ path: "~/app/components" }, { path: "~/layouts" }],

  app: {
    rootTag: "main",
  },

  devServer: {
    port: 3333,
  },

  css: ["~/app/assets/global.css"],
  // https://tailwindcss.com/docs/installation
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
