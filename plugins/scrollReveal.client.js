// plugins/scrollReveal.client.ts

import { vScrollReveal } from 'vue-scroll-reveal'; // if using default options

export default defineNuxtPlugin((nuxtApp) => {
  // if using default options
  nuxtApp.vueApp.directive('scroll-reveal', vScrollReveal);
});