<template>
  <main>
    <slot></slot>
  </main>
</template>

<style>
/* .page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
  transition: all 0.5s linear;
   position: fixed;
  top: 0;
  left: 0;
  right: 0; 
}

.page-left-enter-from,
.page-right-leave-to {
  transform: translateX(100%);
}

.page-left-leave-to,
.page-right-enter-from {
  transform: translateX(-100%);
}
.page-left-enter-to,
.page-right-enter-to {
  transform: translateX(-100%);
} */

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
