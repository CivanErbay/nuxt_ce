<template>
  <section id="projects" class="relative z-10">
    <h3
      v-scroll-reveal="{
        delay: 250,
        distance: '150px',
        duration: 2000,
        origin: 'top',
      }"
      class="font-rubik text-4xl md:text-7xl mb-9 mx-auto"
    >
      My Experience
    </h3>
    <p
      v-scroll-reveal="{
        delay: 250,
        distance: '150px',
        duration: 1000,
        origin: 'bottom',
      }"
      class="p-1 md:text-xl"
    >
      Relevant projects I was allowed to participate in
    </p>
    <div class="flex flex-wrap items-center gap-10 py-[36px]">
      <div
        v-for="(project, index) in projects"
        v-scroll-reveal="{
          delay: 50 + index * 250,
          distance: '150px',
          duration: 1000,
          origin: 'bottom',
        }"
        class="relative cursor-pointer overflow-hidden group"
      >
        <nuxt-link
          :to="`/project/${project.path}`"
        >
          <img
            alt=""
            class="h-[300px] w-[450px] object-cover transition-all duration-300 hover:scale-105 grayscale hover:grayscale-0"
            :src="project.imgPath"
          />
        </nuxt-link>
        <a
          :href="project.link"
          target="_blank"
          :alt="`${project.name} website link`"
          class="absolute text-[1.1rem] font-bold bottom-10 left-0 px-5 py-9 pl-8 z-20 group/link flex items-center before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-white"
        >
          <span class="z-20 group-hover/link:text-white duration-700">{{
            project.name
          }}</span>
          <div
            :style="{ backgroundColor: randomColor() }"
            style="transform: skewY(-3deg)"
            :class="`absolute w-2 h-16 bottom-4 group-hover/link:w-full z-10 transition-all inset-x-4 flex items-center before:block before:absolute before:-inset-1 before:-skew-y-3 duration-500`"
          ></div>
        </a>
        <p
          class="absolute bottom-0 md:-left-28 py-2 px-4 text-base font-bold group-hover:left-0 transition-bottom duration-500 flex items-center before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-white"
        >
          <span class="z-10">{{ project.year }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>

const projects = [
  {
    name: "kappes-kimchi.de",
    path: "kappes-kimchi",
    link: "https://kappes-kimchi.de/",
    imgPath: "./projectImgs/kappes-5.png",
    year: "2022-2023",
  },
  {
    name: "schwarmplaner.zugvoegelfestival.org",
    path: "schwarmplaner-zugvoegel",
    link: "https://schwarmplaner.zugvoegelfestival.org/",
    imgPath: "./projectImgs/schwarm-1.png",
    year: "2022-2023",
  },
  {
    name: "meine.swm.de",
    path: "meine-swm",
    link: "https://meine.swm.de/",
    imgPath: "./projectImgs/mswm-1.png",
    year: "2022-2023",
  },
  {
    name: "swm.de",
    path: "swm",
    link: "https://www.swm.de/",
    imgPath: "./projectImgs/swm-1.png",
    year: "2021-2023",
  },
  {
    name: "mundzumund.org",
    path: "mundzumund-festival",
    link: "https://mundzumund.org/",
    imgPath: "./projectImgs/mzm-1.png",
    year: "2021-2022",
  },
  {
    name: "deka.de",
    path: "deka",
    link: "https://www.deka.de/",
    imgPath: "./projectImgs/deka-1.png",
    year: "2020-2021",
  },
];

const randomColor = () => {
  const colors = ["#FF6B2B", "#2C49D8", "#ec4899"];
  const rndInt = Math.floor(Math.random() * colors.length);
  return colors[rndInt];
};
</script>
