<template>
  <div class="z-49 h-[91vh] overflow-hidden relative">
    <carousel :items-to-show="1">
      <slide v-for="(item, index) in carouselData" :key="index">
        <div class="relative">
          <img
            :src="'data:image/jpeg;base64,' + item.image"
            :alt="item.header.th"
          />
          <div
            :style="{ color: item.color }"
            class="absolute inset-0 flex items-center justify-center text-center text-dark whitespace-normal text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-light"
          >
            {{ item.header[selectedLanguage] }}
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
        const response = await HomeService.getItems();
        this.carouselData = response.data;
      } catch (error) {
        console.error('Error fetching carousel data:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Add or modify styles as needed */
</style>
