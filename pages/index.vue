<template>
  <div>
    <SvgScroll class="rotate-180"></SvgScroll>
    <div class="relative">
      <Landing></Landing>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup>
const { gsap } = useNuxtApp();

function setupAnimation() {
  const elements = gsap.utils.toArray('.anim-appear');
  elements.forEach((element, index) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 40%', // Adjust the start point as needed
          end: 'center center',
          once: true,
          markers: true,
        },
      }
    );
  });
}

onMounted(()=> {
  if (process.client) {
    // register gsap scroll
     setupAnimation();
  }
})
</script>
