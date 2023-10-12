<template>
  <footer class="py-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-sm flex flex-col md:flex-row">
        <nuxt-link
          to="/impressum"
          class="hover:text-black transition duration-300 py-1 md:p-0"
          >Impressum</nuxt-link
        >
        <a href="mailto:info@civan-erbay.de" class="py-1 md:ml-6 md:p-0"
          >info@civan-erbay.de</a
        >
        <p class="py-1 md:ml-6 md:p-0">2023 - Civan Erbay</p>
      </div>
      <div class="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/civan-erbay-009bb01ab/"
          target="_blank"
        >
          <img class="h-6" src="../assets/linkedin.svg" alt="linkedin link" />
        </a>
        <a href="https://www.instagram.com/cvn.001/" target="_blank">
          <img class="h-6" src="../assets/instagram.svg" alt="instagram link" />
        </a>
      </div>
      <img class="h-[8rem] right-[61px] -bottom-[20px] md:h-36 absolute md:right-[10%]" src="../assets/pixel_me.png" alt="linkedin link" />
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
