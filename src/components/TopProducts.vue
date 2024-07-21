<template>
  <div
    v-if="loading"
    class="fixed inset-0 flex justify-center items-center bg-mainDark opacity-50 z-10"
  >
    <Loading />
  </div>
  <div class="bg-mainLight px-5 py-10 xl:px-40 lg:px-20 md:px-10 sm:px-10">
    <router-link
      to="/products"
      class="flex items-center inline-flex"
      @click="scrollToTop"
    >
      <h1
        class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-mainDark font-medium"
      >
        {{
          selectedLanguage === 'turkish'
            ? 'En Popüler Ürünler'
            : selectedLanguage === 'english'
              ? 'Top Products'
              : selectedLanguage === 'arabic'
                ? 'أفضل المنتجات'
                : selectedLanguage === 'french'
                  ? 'Meilleurs produits'
                  : ''
        }}
      </h1>

      <ChevronRight :size="48" class="text-mainDark font-medium mt-3" />
    </router-link>
    <div
      class="grid grid-cols-1 gap-4 mt-10 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-1"
    >
      <Product
        v-for="(product, index) in productArray"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import Product from './Product.vue';
import ProductService from '../services/ProductServices';
import Loading from './Loading.vue';

export default {
  data() {
    return {
      loading: false,
      selectedLanguage: localStorage.getItem('selectedLanguage'),
      productArray: [],
    };
  },
  mounted() {
    this.getTopProducts();
  },
  methods: {
    getTopProducts() {
      this.loading = true;
      ProductService.getTopProducts()
        .then((response) => {
          this.productArray = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
  components: {
    ChevronRight,
    Product,
    Loading,
  },
};
</script>

<style scoped>
/* Add or modify styles as needed */
</style>
