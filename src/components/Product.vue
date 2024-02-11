<template>
  <div
    class="bg-stone-400 flex flex-col items-center justify-center sm:flex-col sm:items-start sm:justify-start md:flex-col md:items-start md:justify-start overflow-hidden rounded-md sm:rounded-xl md:rounded-md lg:rounded-md xl:rounded-md"
  >
    <img
      :src="product.image"
      :alt="product.name"
      class="w-full h-64 object-cover xl:w-120 xl:h-64 lg:w-120 lg:h-64 sm:block lg:transition-transform lg:transform lg:origin-center lg:hover:scale-105 xl:transition-transform xl:transform xl:origin-center xl:hover:scale-105"
    />
    <div
      class="xl:flex xl:flex-row xl:items-start xl:justify-start sm:flex sm:flex-col m-5 xl:hidden lg:hidden md:hidden"
    >
      <h1 class="text-2xl">{{ product.name }}</h1>
      <p class="text-xl">{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style scoped>
/* Add or modify styles as needed */
</style>
