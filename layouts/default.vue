<template>
  <main>
    <slot></slot>
  </main>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s linear;
}

.page-enter-from {
  opacity: 0;
  /*  transform: translateY(100%) scale(0.9); */
}

.page-leave-to {
  opacity: 0;
  /*   transform: translateY(-100%) scale(0); */
}
</style>
