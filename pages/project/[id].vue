<template>
  <div class="p-4 flex flex-col md:flex-row">
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 w-auto">
      <div v-for="(image, index) in currProject.images" :key="index">
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-40 h-40 object-cover rounded-lg cursor-pointer"
          @click="openImage(image)"
        />
      </div>
    </div>

    <div class="mt-8 md:mt-0 md:ml-8 md:w-1/3 flex flex-col justify-between">
      <h2 class="text-2xl font-semibold font-rubik">{{ currProject.name }}</h2>
      <p class="text-gray-600 mt-2 text-justify">
        {{ currProject.description }}
      </p>

      <div class="flex flex-col md:flex-row gap-8 my-9">
        <div class="text-gray-600 pt-2 border-t">
          <p class="font-bold font-rubik">technology</p>
          <p class="mt-2">
            {{ currProject.technology }}
          </p>
        </div>
        <div class="text-gray-600 pt-2 border-t">
          <p class="font-bold font-rubik">client</p>
          <p class="mt-2">
            {{ currProject.employer }}
          </p>
        </div>
        <div class="text-gray-600 pt-2 border-t">
          <p class="font-bold font-rubik">year</p>
          <p class="mt-2">
            {{ currProject.year }}
          </p>
        </div>
      </div>
      <div class="flex justify-between">
        <nuxt-link
          to="/#projects"
          class="hover:-ml-1 transition-all duration-300"
        >
          <img alt="back button" class="h-[40px]" src="../assets/back.svg"
        /></nuxt-link>
        <a
          target="_blank"
          :href="currProject.link"
          :alt="`${currProject.name} website link`"
          class="relative text-base font-bold py-2 group-hover:bg-white group/link"
        >
          visit website
          <div
            class="absolute bg-blue-100 h-0 bottom-1 group-hover/link:h-7 -z-10 transition-all w-full duration-300"
          ></div>
        </a>
      </div>
    </div>
  </div>

  <div
    v-if="isImageModalOpen"
    class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50 overflow-scroll cursor-pointer"
    @click="closeImage"
  >
    <div class="relative max-w-4xl max-h-4xl">
      <img
        :src="selectedImage.src"
        :alt="selectedImage.alt"
        class="max-w-full max-h-full mx-auto"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import kappesKimchiImageFirst from "@/assets/project-img/kappes/kappes-5.png";
import kappesKimchiImageSecond from "@/assets/project-img/kappes/kappes-1.png";
import kappesKimchiImageThird from "@/assets/project-img/kappes/kappes-2.png";
import kappesKimchiImageFourth from "@/assets/project-img/kappes/kappes-3.png";
import kappesKimchiImageFifth from "@/assets/project-img/kappes/kappes-4.png";

import schwarmplanerImageFirst from "@/assets/project-img/schwarmplaner/schwarm-5.png";
import schwarmplanerImageSecond from "@/assets/project-img/schwarmplaner/schwarm-1.png";
import schwarmplanerImageThird from "@/assets/project-img/schwarmplaner/schwarm-2.png";
import schwarmplanerImageFourth from "@/assets/project-img/schwarmplaner/schwarm-3.png";
import schwarmplanerImageFifth from "@/assets/project-img/schwarmplaner/schwarm-4.png";

import meineSwmImageFirst from "@/assets/project-img/mswm/mswm-1.png";
import meineSwmImageSecond from "@/assets/project-img/mswm/mswm-2.png";
import meineSwmImageThird from "@/assets/project-img/mswm/mswm-3.png";

import swmImageFirst from "@/assets/project-img/swm/swm-1.png";
import swmImageSecond from "@/assets/project-img/swm/swm-2.png";
import swmImageThird from "@/assets/project-img/swm/swm-3.png";
import swmImageFourth from "@/assets/project-img/swm/swm-4.png";

import mzmFirst from "@/assets/project-img/mzm/mzm-1.png";
import mzmSecond from "@/assets/project-img/mzm/mzm-2.png";
import mzmThird from "@/assets/project-img/mzm/mzm-3.png";
import mzmFourth from "@/assets/project-img/mzm/mzm-4.png";

import dekaFirst from "@/assets/project-img/deka/deka-1.png";
import dekaSecond from "@/assets/project-img/deka/deka-2.png";
import dekaThird from "@/assets/project-img/deka/deka-3.png";
import dekaFourth from "@/assets/project-img/deka/deka-4.png";

const route = useRoute();
const projectId = computed(() => route.params.id);

const projects = [
  {
    name: "Kappes Kimchi",
    path: "kappes-kimchi",
    link: "https://kappes-kimchi.de/",
    description:
      "Creation of a feature-rich webshop for Kappes-Kimchi, enabling an online presentation of high-quality products.",
    technology: "Vue, GCP, Firebase, Stripe",
    year: "2022-2023",
    employer: "kappes kimchi",
    images: [
      {
        src: kappesKimchiImageFirst,
        alt: "kappes kimchi project photo 1",
      },
      {
        src: kappesKimchiImageSecond,
        alt: "kappes kimchi project photo 2",
      },
      {
        src: kappesKimchiImageThird,
        alt: "kappes kimchi project photo 3",
      },
      {
        src: kappesKimchiImageFourth,
        alt: "kappes kimchi project photo 4",
      },

      {
        src: kappesKimchiImageFifth,
        alt: "kappes kimchi project photo 5",
      },
    ],
  },
  {
    name: "Schwarmplaner",
    path: "schwarmplaner-zugvoegel",
    link: "https://schwarmplaner.zugvoegelfestival.org/",
    description:
      "Participation in the implementation of the staff planning tool 'Schwarmplaner' for the migratory bird festival. The main function of the tool is the efficient assignment of staff shifts.",
    technology: "Vue, Express",
    year: "2022-2023",
    employer: "Zugvögel e.V.",
    images: [
      {
        src: schwarmplanerImageFirst,
        alt: "schwarmplaner project photo 1",
      },
      {
        src: schwarmplanerImageSecond,
        alt: "schwarmplaner project photo 2",
      },
      {
        src: schwarmplanerImageThird,
        alt: "schwarmplaner project photo 3",
      },
      {
        src: schwarmplanerImageFourth,
        alt: "schwarmplaner project photo 4",
      },

      {
        src: schwarmplanerImageFifth,
        alt: "schwarmplaner project photo 5",
      },
    ],
  },
  {
    name: "MeineSWM",
    path: "meine-swm",
    link: "https://meine.swm.de/",
    description:
      "Further development of the customer portal of Stadtwerke München, which allows customers to access account data, invoices, contracts and meter readings. My task was to implement an interactive interface, to visualize corresponding customer data and to implement a variety of other portal-specific functions.",
    technology: "Angular",
    year: "2022-2023",
    employer: "denkwerk",
    images: [
      {
        src: meineSwmImageFirst,
        alt: "meine SWM project photo 1",
      },
      {
        src: meineSwmImageSecond,
        alt: "meine SWM project photo 2",
      },
      {
        src: meineSwmImageThird,
        alt: "meine SWM project photo 3",
      },
    ],
  },
  {
    name: "Stadtwerke München",
    path: "swm",
    link: "https://www.swm.de/",
    description:
      "Co-development and implementation of swm.de, which contains a variety of individualized components and reusable patterns.",
    technology: "Vue, Nunjucks",
    year: "2021-2023",
    employer: "denkwerk",
    images: [
      {
        src: swmImageFirst,
        alt: "swm project photo 1",
      },
      {
        src: swmImageSecond,
        alt: "swm project photo 2",
      },
      {
        src: swmImageThird,
        alt: "swm project photo 3",
      },
      {
        src: swmImageFourth,
        alt: "swm project photo 4",
      },
    ],
  },
  {
    name: "MundzuMund-Festival 2022",
    path: "mundzumund-festival",
    link: "https://mundzumund.org/",
    description:
      "Creation of a website for the presentation of the mundzumund festival 2022 including the implementation of Paypal and Klarna as payment services, e-mail services and login area using an express backend.",
    technology: "Vue, Express, Klarna, PayPal",
    year: "2021-2022",
    employer: "rosarot e.V.",
    images: [
      {
        src: mzmFirst,
        alt: "mundzumund project photo 1",
      },
      {
        src: mzmSecond,
        alt: "mundzumund project photo 2",
      },
      {
        src: mzmThird,
        alt: "mundzumund project photo 3",
      },
      {
        src: mzmFourth,
        alt: "mundzumundproject photo 4",
      },
    ],
  },
  {
    name: "Deka Investments",
    path: "deka",
    link: "https://www.deka.de/",
    description:
      "Implementation of the deka.de website for the credit institution Deka Investments, which essentially consists of an interplay of reusable and individualized components and creates an appealing user interface.",
    technology: "Vue, Nunjucks",
    year: "2020-2021",
    employer: "denkwerk",
    images: [
      {
        src: dekaFirst,
        alt: "deka project photo 1",
      },
      {
        src: dekaSecond,
        alt: "deka project photo 2",
      },
      {
        src: dekaThird,
        alt: "deka project photo 3",
      },
      {
        src: dekaFourth,
        alt: "deka project photo 4",
      },
    ],
  },
];

const currProject = computed(() => {
  return projects.find((project) => project.path === projectId.value) || null;
});

const isImageModalOpen = ref(false);
const selectedImage = ref(null);

function openImage(image) {
  selectedImage.value = image;
  isImageModalOpen.value = true;
}

function closeImage() {
  selectedImage.value = null;
  isImageModalOpen.value = false;
}
</script>
