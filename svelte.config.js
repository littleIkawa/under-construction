// import adapter from '@sveltejs/adapter-auto';
import staticAdapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
const production = process.env.NODE_ENV === "production";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    paths: {
      // base: production ? "/under-construction" : ""
    },
    adapter: staticAdapter({
      fallback: null,
      precompress: false
    }),
    trailingSlash: "always"
  }
};

export default config;
