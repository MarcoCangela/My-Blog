// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Marco Garujo";
export const SITE_DESCRIPTION =
  "Welcome to my personal website! I write abput Software Quality Assurance and Technology in general.";
export const TWITTER_HANDLE = "@MarcoCangela";
export const MY_NAME = "Marco Garujo";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
