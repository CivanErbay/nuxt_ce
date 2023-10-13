<template>
  <div>
    <section class="flex min-h-full">
      <div class="w-full sm:w-1/2 md:w-[600px]">
        <h3
          class="font-rubik text-4xl md:text-7xl mb-9"
        >
          Contact
        </h3>

        <form ref="contactForm" v-if="!hasBeenSubmitted">
          <div
            class="mb-4"
          >
            <label for="name" class="block font-bold mb-2">Name:</label>
            <input
              type="text"
              name="name"
              class="w-full px-3 py-2 border border-gray-400 font-rubik text-black"
              required
              v-model="formData.name"
            />
          </div>
          <div
            class="mb-4"
          >
            <label for="email" class="block font-bold mb-2">Email:</label>
            <input
              type="email"
              name="email"
              class="w-full px-3 py-2 border border-gray-400 font-rubik text-black"
              required
              v-model="formData.email"
            />
          </div>
          <div
            class="mb-4"
          >
            <label for="message" class="block font-bold mb-2">Message:</label>
            <textarea
              name="message"
              rows="4"
              class="w-full px-3 py-2 border border-gray-400 font-rubik text-black"
              required
              v-model="formData.message"
            ></textarea>
          </div>

          <button
            @click.prevent="validateAndSubmit"
            v-if="!isSubmitting"
            class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-md group w-fit"
          >
            <span
              class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-sky-200 opacity-[3%]"
            ></span>
            <span
              class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-sky-200 opacity-100 group-hover:-translate-x-8"
            ></span>
            <span
              class="relative w-full text-left text-gray-600 transition-colors duration-200 ease-in-out group-hover:text-gray-900"
              >SEND MSG</span
            >
            <span
              class="absolute inset-0 border-2 border-sky-200 rounded-md"
            ></span>
          </button>
          <div v-else><p>Please wait...</p></div>
        </form>
        <div v-show="hasBeenSubmitted" class="md:ml-20 h-[380px]">
          <img
            alt="back button"
            class="h-[140px]"
            src="../assets/checkmark.svg"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const isSubmitting = ref(false);
const hasBeenSubmitted = ref(false);
const contactForm = ref(null);
const formData = ref({
  name: "",
  email: "",
  message: "",
});

const validateAndSubmit = () => {
  if (validateForm()) {
    handleFormSubmit();
  }
};

const validateForm = () => {
  const { name, email, message } = formData.value;
  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return false;
  }
  return true;
};

const handleFormSubmit = async () => {
  isSubmitting.value = true;

  axios
    .post("https://pf-express.vercel.app/sendmail", {
      sender: formData.value.name,
      email: formData.value.email,
      text: formData.value.message,
    })
    .then(function (response) {
      if (response.data.message == "success") hasBeenSubmitted.value = true;
    })
    .catch(function (error) {
      console.log(error);
    });
};
</script>
