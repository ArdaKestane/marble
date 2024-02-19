<template>
  <div
    v-if="loading"
    class="fixed inset-0 flex justify-center items-center bg-white opacity-50 z-10"
  >
    <Loading />
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4 mx-10 sm:mx-10 md:mx-20 lg:mx-30 xl:mx-40 my-10 overflow-hidden"
  >
    <router-link
      v-for="(product, index) in productArray"
      :to="{
        name: 'ProductDetail',
        params: { id: product.id },
        query: { lang: selectedLanguage },
      }"
      :key="index"
      class="relative overflow-hidden group rounded-md sm:rounded-xl md:rounded-md lg:rounded-md xl:rounded-md"
      @click="scrollToTop"
    >
      <img
        :src=" product.mainImage"
        :alt="product.header[selectedLanguage]"
        class="w-full h-64 object-cover xl:w-120 xl:h-64 lg:w-120 lg:h-64 md:w-120 md:h-64 sm:w-120 sm:h-64 sm:block lg:transition-transform lg:transform lg:origin-center lg:hover:scale-105 xl:transition-transform xl:transform xl:origin-center xl:hover:scale-105"
      />
      <div
        class="absolute bottom-10 left-10 bg-neutral-600 bg-opacity-75 px-5 py-2 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <div class="text-white text-center">
          <h1 class="text-md md:text-md lg:text-lg xl:text-xl font-semibold">
            {{ product.header[selectedLanguage] }}
          </h1>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import ProductService from '../services/ProductServices';
import Loading from './Loading.vue';
export default {
  data() {
    return {
      loading: true,
      selectedLanguage: localStorage.getItem('selectedLanguage'),
      productArray: [],
    };
  },
  components: {
    Loading,
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await ProductService.getProducts();
        this.productArray = response.data.map((product) => ({
          id: product.id,
          header: {
            turkish: product.header.turkish,
            english: product.header.english,
            arabic: product.header.arabic,
            french: product.header.french,
          },
          description: {
            turkish: product.description.turkish,
            english: product.description.english,
            arabic: product.description.arabic,
            french: product.description.french,
          },
          mainImage: product.mainImage,
          images: product.images,
        }));
        this.loading = false;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>
<style scoped></style>
