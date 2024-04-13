<template>
  <app-header class="fixed top-0 left-0 z-50" />
  <div class="z-0 pt-20 min-h-screen">
    <div
      class="w-full max-w-none flex-grow pt-10 sm:px-10 md:px-10 lg:px-30 xl:px-80 2xl:px-80"
    >
      <div
        class="flex min-h-[50vh] w-full flex-col justify-center gap-6 p-4 lg:flex-row"
      >
        <slot />
      </div>
    </div>
  </div>
  <app-footer class="mt-auto"></app-footer>
</template>

<script setup></script>
