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

onMounted(()=> {
  if (process.client) {
    // register gsap scroll
    
  }
})
</script>
