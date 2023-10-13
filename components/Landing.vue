<template>
  <section class="flex flex-col md:justify-center relative md:py-56">
  <h1
      v-scroll-reveal="{
        delay: 250,
        distance: '150px',
        duration: 2000,
        origin: 'top',
      }"
      class="font-rubik text-5xl md:text-9xl"
    >
      Crafting Digital Landscapes.
    </h1> 
      <h2
        v-scroll-reveal="{
          delay: 250,
          distance: '150px',
          duration: 1000,
          origin: 'bottom',
        }"
        class="text-md md:text-2xl mt-3 md:mt-8"
      >
        I'm Civan, a freelance web developer with
      </h2>
      <h2
        v-scroll-reveal="{
          delay: 450,
          distance: '150px',
          duration: 1000,
          origin: 'bottom',
        }"
        class="text-md md:text-2xl mt-3 md:mt-2"
      >
        passion for pixels & reliability in code
      </h2>

      <SvgCode
        v-scroll-reveal="{
          delay: 350,
          distance: '350px',
          duration: 2000,
          origin: 'right',
        }"
        class="opacity-10 absolute md:right-12 top-[50%] md:top-[45%]"
      ></SvgCode>

  </section>
</template>

<script setup>
import SvgCode from "./SvgCode.vue";
</script>

<style scoped></style>
