<template>
  <div
    v-if="loading"
    class="fixed inset-0 flex justify-center items-center bg-white opacity-50 z-10"
  >
    <Loading />
  </div>
  <div>
    <NavigationDrawer />
    <div class="flex justify-center py-24 h-screen bg-gray-100">
      <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-8">
          <div class="flex justify-between items-center">
            <h1 class="text-2xl font-semibold mb-4 text-center text-black">
              Top Products
            </h1>
          </div>

          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            <div
              v-for="product in products"
              :key="product.id"
              class="bg-stone-400 flex flex-col relative overflow-hidden rounded-md sm:rounded-xl md:rounded-md lg:rounded-md xl:rounded-md"
            >
              <input
                type="checkbox"
                v-model="product.isTopProduct"
                @change="toggleSelection(product.id, product.isTopProduct)"
                class="absolute top-2 right-2 z-10 w-6 h-6"
              />
              <img
                :src="product.mainImage"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationDrawer from '@/components/Dashboard/NavigationDrawer.vue';
import Loading from '@/components/Loading.vue';
import ProductService from '@/services/ProductServices.js';

export default {
  name: 'User',
  components: {
    NavigationDrawer,
    Loading,
  },
  data() {
    return {
      loading: false,
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },

  methods: {
    async fetchProducts() {
      try {
        this.loading = true;
        const response = await ProductService.getProducts();
        this.products = response.data.map((product) => ({
          ...product,
          selected: false,
        }));
        this.loading = false;

        console.log(this.products);
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('token');
          this.$router.push('/login');
        }
      }
    },
    toggleSelection(productId, isSelected) {
      this.loading = true;
      ProductService.updateIsTopProduct(productId, isSelected)
        .then(() => {
          this.loading = false;
        })
        .catch((error) => {
          console.error(error);
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            this.$router.push('/login');
          }
        });
    },
  },
};
</script>
