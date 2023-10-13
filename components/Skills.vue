<template>
  <section class="flex flex-col">
    <h3 class="font-rubik text-4xl md:text-7xl mb-9">My Expertise</h3>

    <div class="flex flex-wrap md:gap-10">
      <div class="max-w-md">
        <div class="md:h-60 anim-appear">
          <div class="flex items-center mb-6 mt-9">
            <span
              class="flex items-center before:block before:absolute before:-inset-1 before:-skew-y-3 p-2 before:bg-pink-500 relative"
            >
              <img
                alt="whoami-icon"
                class="h-10 z-10"
                src="../assets/language-json-svgrepo-com.svg"
              />

              <h5 class="font-bold text-xl font-rubik ml-3 relative text-white">
                WhoAmI?
              </h5>
            </span>
          </div>
          <p class="p-1">
            A professional web developer with several years of experience in a
            renowned agency.
          </p>
          <p class="p-1">
            Confident in handling complex project requirements, design and style
            guides - ready to craft your personal digital landscape!
          </p>
        </div>

        <div class="md:h-60">
          <div class="flex items-center mb-6 mt-9">
            <span
              class="flex items-center before:block before:absolute before:-inset-1 before:-skew-y-3 p-2 before:bg-[#2C49D8] relative"
            >
              <img
                class="h-10 z-10"
                alt="display-icon"
                src="../assets/monitor-svgrepo-com.svg"
              />

              <h5 class="font-bold text-xl font-rubik ml-3 relative text-white">
                HowCanIHelp?
              </h5>
            </span>
          </div>
          <p class="p-1">
            Reliable implementation of websites, complex web applications and
            digital solutions that are both functional and aesthetically
            pleasing.
          </p>
          <p class="p-1">
            Customer-focused & agile approach, and a good understanding of how
            to translate their needs into effective digital solutions.
          </p>
        </div>
      </div>

      <div class="max-w-md">
        <div class="md:h-60">
          <div class="flex items-center mb-6 mt-9">
            <span
              class="flex items-center before:block before:absolute before:-inset-1 before:-skew-y-3 p-2 before:bg-[#FF6B2B] relative"
            >
              <img
                alt="vuejs-icon"
                class="h-10 z-10"
                src="../assets/vuejs-svgrepo-com.svg"
              />

              <h5 class="font-bold text-xl font-rubik ml-1 relative text-white">
                TechStack?
              </h5>
            </span>
          </div>
          <p class="p-1">
            Passionate about UI/UX. Over 3 years of development experience in
            HTML, CSS, JS, Vue and Nuxt.
          </p>
          <p class="p-1">
            Apart from that I can be of service with Angular, jQuery, Firebase,
            Express, Stripe and many more.
          </p>
        </div>

        <!-- <div class="md:h-60">
          <div class="flex items-center mb-6 mt-9">
            <img alt="" class="h-10" src="../assets/cup-svgrepo-com.svg" />
            <h5 class="font-bold text-xl font-rubik ml-3">WhatElse?</h5>
          </div>
          <p class="p-1">I'm fun to work with!</p>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
