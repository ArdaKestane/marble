<template>
  <div
    v-if="loading"
    class="fixed inset-0 flex justify-center items-center bg-mainDark opacity-50 z-10"
  >
    <Loading />
  </div>
  <div class="z-49 h-[95vh] overflow-hidden relative">
    <carousel :items-to-show="1" :wrap-around="true">
      <slide v-for="(item, index) in carouselData" :key="index">
        <div class="relative">
          <img
            :src="item.image"
            :alt="item.header.th"
            class="object-cover h-screen w-screen"
          />
          <div
            :style="{ color: item.color }"
            class="absolute inset-0 flex items-center sm:items-end justify-center sm:justify-start text-center text-dark whitespace-normal text-slide-in"
          >
            <p
              class="px-8 py-4 rounded-xl bg-black opacity-75 transform -translate-y-0 sm:-translate-y-full ml-0 sm:ml-4 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light italic"
            >
              {{ item.header[selectedLanguage] }}
            </p>
          </div>
        </div>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import ChevronRightOutlined from 'vue-material-design-icons/ChevronRightBoxOutline.vue';
import ChevronLeftOutlined from 'vue-material-design-icons/ChevronLeftBoxOutline.vue';
import HomeService from '../services/HomeServices';
import Loading from './Loading.vue';

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    ChevronLeftOutlined,
    ChevronRightOutlined,
    Loading,
  },
  data() {
    return {
      loading: false,
      carouselData: [],
      selectedLanguage: localStorage.getItem('selectedLanguage'),
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        this.loading = true;
        const response = await HomeService.getItems();
        this.carouselData = response.data;
        this.loading = false;
      } catch (error) {
        console.error('Error fetching carousel data:', error);
      }
    },
  },
};
</script>

<style scoped>
@keyframes slide-in-from-left {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.text-slide-in {
  animation: slide-in-from-left 1.25s ease-out;
}
</style>
