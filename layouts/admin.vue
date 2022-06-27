<template>
  <div class="flex">
    <div class="w-72 bg-gray-50 shadow-lg h-fit">
      <sidebar/>
    </div>
    <div class="pl-4 pr-4 w-full">
    <Navbar />
    <slot />
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
