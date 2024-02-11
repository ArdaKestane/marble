<template>
  <div>
    <Header />

    <div class="bg-stone-400 flex flex-col items-center">
      <img
        :src="'data:image/jpeg;base64,' + product.mainImage"
        :alt="product.header[selectedLanguage]"
        class="object-cover w-full h-[38vh] mb-8 cursor-pointer"
        style="object-fit: cover"
        @click="openLightbox(product.mainImage)"
      />

      <div
        class="grid grid-cols-1 mx-5 max-w-7xl xl:grid-cols-2 gap-x-10 gap-y-10 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 text-md sm:text-md md:text-lg lg:text-2xl xl:text-2xl font-noto"
      >
        <div>
          <h2
            class="text-3xl mb-5 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-noto"
          >
            {{ product.header[selectedLanguage] }}
          </h2>
          <p
            class="pl-5 text-md sm:text-md md:text-lg lg:text-2xl xl:text-2xl font-noto"
          >
            {{ product.description[selectedLanguage] }}
          </p>
        </div>
      </div>

      <div class="w-full px-10 relative z-90">
        <h2
          class="ml-10 text-3xl mb-5 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-noto"
        >
          Gallery
        </h2>
        <div
          class="grid grid-cols-1 mx-5 sm:mx-5 md:mx-10 lg:mx-10 xl:mx-20 pb-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4"
        >
          <div
            v-for="(item, index) in product.images"
            :key="index"
            class="overflow-hidden cursor-pointer rounded-md sm:rounded-xl md:rounded-md lg:rounded-md xl:rounded-md"
            @click="openLightbox(item)"
          >
            <img
              :src="'data:image/jpeg;base64,' + item"
              :alt="'Gallery ' + (index + 1)"
              class="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>

      <div
        v-if="lightboxOpen"
        class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50"
        @click="closeLightbox"
      >
        <img
          :src="selectedImage"
          alt="Enlarged"
          class="object-cover w-[60vw] h-[40vh]"
        />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import ProductService from '../services/ProductServices';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
  
  data() {
    return {
      lightboxOpen: false,
      selectedImage: '',
      selectedLanguage: localStorage.getItem('selectedLanguage'),
      product: {
        header: {
          turkish: '',
          english: '',
          arabic: '',
          french: ''
        },
        description: {
          turkish: '',
          english: '',
          arabic: '',
          french: ''
        },
        mainImage: '',
        images: [],
      },
    };
  },
  methods: {
    openLightbox(image) {
      this.lightboxOpen = true;
      this.selectedImage = image;
    },
    closeLightbox() {
      this.lightboxOpen = false;
      this.selectedImage = '';
    },
    async fetchDetail(productId) {
      try {
        const response = await ProductService.getProduct(productId);
        this.product = response.data;
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    },
  },
  created() {
    const productId = this.$route.params.id;
    this.fetchDetail(productId);
  },
  components: {
    Header,
    Footer,

  },
};
</script>
