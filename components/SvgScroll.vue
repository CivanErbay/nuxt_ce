<template>
  <div v-show="!timeoutBool" class="svg-container">
    <svg width="103" height="3996" viewBox="0 0 103 4304">
      <path
        d="M95.5 4303.5V3713.11V2525.5H8V0"
        fill="none"
        id="svgPath"
        stroke-width="10"
        stroke="rgb(44, 62, 80)"
        stroke-dasharray="0"
        stroke-dashoffset="0"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visibleMe: false,
      timeoutBool: true,
    };
  },
  methods: {
    fillingSVGPaths() {
      let scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      if (scrollPercentage > 0.025) this.timeoutBool = false;

      let path = document.getElementById("svgPath");

      let pathLength = path.getTotalLength();

      path.style.strokeDasharray = pathLength;
      path.style.strokeDashoffset = pathLength;

      let drawLength = pathLength * scrollPercentage;
      path.style.strokeDashoffset = pathLength - drawLength;

      scrollPercentage > 0.6
        ? (this.visibleMe = true)
        : (this.visibleMe = false);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.fillingSVGPaths);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.fillingSVGPaths);
  },
};
</script>

<style scoped>
.svg-container {
  width: 100%;
  display: flex;
  position: absolute;
  right: 60px;
  opacity: 0.1;
  display: none;
}

svg path {
  transition: stroke-dashoffset 0.2s;
}

.me {
  position: absolute;
  height: 520px;
  opacity: 0;
  margin-bottom: 133px;
  margin-right: 92px;
  transition: all 0.5s ease-in-out;
}

.visible-me {
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

@media (min-width: 1024px) {
  .svg-container {
    display: block;
  }
}
</style>
