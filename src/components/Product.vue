<template>
  <div
    class="w-full bg-stone-400 flex flex-col items-center justify-center sm:flex-col sm:items-start sm:justify-start md:flex-col md:items-start md:justify-start overflow-hidden rounded-md sm:rounded-xl md:rounded-md lg:rounded-md xl:rounded-md"
    style="cursor: pointer"
    @click="openProductDetail(product)"
  >
    <img
      :src=" product.mainImage"
      :alt="product.name"
      class="w-full h-64 object-cover xl:w-120 xl:h-64 lg:w-120 lg:h-64 sm:block lg:transition-transform lg:transform lg:origin-center lg:hover:scale-105 xl:transition-transform xl:transform xl:origin-center xl:hover:scale-105"
    />
    <div
      class="xl:flex xl:flex-row xl:items-start xl:justify-start sm:flex sm:flex-col m-5 xl:hidden lg:hidden md:hidden"
    >
      <h1 class="text-2xl">{{ product.header[selectedLanguage] }}</h1>
      <p class="text-xl">{{ product.description[selectedLanguage] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      selectedLanguage: localStorage.getItem('selectedLanguage'),
    };
  },
  methods: {
    openProductDetail(product) {
      this.$router.push({ name: 'ProductDetail', params: { id: product.id } });
    },
  },
};
</script>

<style scoped>
/* Add or modify styles as needed */
</style>
