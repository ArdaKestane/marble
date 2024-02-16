<template>
  <div
    v-if="loading"
    class="fixed inset-0 flex justify-center items-center bg-white opacity-50 z-10"
  >
    <Loading />
  </div>
  <div>
    <Header />

    <div class="bg-[#57534F] flex flex-col items-center">
      <img
        :src="'data:image/jpeg;base64,' + product.mainImage"
        :alt="product.header[selectedLanguage]"
        class="object-cover w-full h-[38vh] mb-8 cursor-pointer"
        style="object-fit: cover"
        @click="openLightbox(product.mainImage)"
      />

      <div
        class="w-full px-2 sm:px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-20 text-md sm:text-md md:text-lg lg:text-2xl xl:text-2xl"
      >
        <h2
          class="text-3xl mb-5 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center sm:text-center md:text-center lg:text-left"
        >
          {{ product.header[selectedLanguage] }}
        </h2>
        <p
          class="pl-5 text-md sm:text-md md:text-lg lg:text-2xl xl:text-2xl text-center sm:text-center md:text-center lg:text-left"
        >
          {{ product.description[selectedLanguage] }}
        </p>
      </div>

      <div
        class="w-full mt-36 px-2 sm:px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-20 relative z-90"
      >
        <h2
          class="text-3xl mb-6 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center sm:text-center md:text-center lg:text-left"
        >
          Gallery
        </h2>
        <div
          class="grid grid-cols-1 pb-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4"
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
          :src="'data:image/jpeg;base64,' + selectedImage"
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
import Loading from '../components/Loading.vue';
export default {
  data() {
    return {
      loading: false,
      lightboxOpen: false,
      selectedImage: '',
      selectedLanguage: localStorage.getItem('selectedLanguage'),
      product: {
        header: {
          turkish: '',
          english: '',
          arabic: '',
          french: '',
        },
        description: {
          turkish: '',
          english: '',
          arabic: '',
          french: '',
        },
        mainImage: '',
        images: [],
      },
    };
  },
  components: {
    Header,
    Footer,
    Loading,
  },
  mounted() {
    this.goTop();
    const productId = this.$route.params.id;
    this.fetchDetail(productId);
  },
  methods: {
    goTop() {
      window.scrollTo(0, 0);
    },
    openLightbox(image) {
      this.lightboxOpen = true;
      this.selectedImage = image;
      console.log('image:', image);
    },
    closeLightbox() {
      this.lightboxOpen = false;
      this.selectedImage = '';
    },
    async fetchDetail(productId) {
      try {
        this.loading = true;
        const response = await ProductService.getProduct(productId);
        this.product = response.data;
        this.loading = false;
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    },
  },
};
</script>
