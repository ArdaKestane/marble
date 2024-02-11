<template>
  <div class="h-[91vh] overflow-hidden relative">
    <vue-slick
      dots="false"
      infinite="true"
      speed="1000"
      use-transform="false"
      autoplay="true"
      autoplay-speed="5000"
      slides-to-show="1"
      slides-to-scroll="1"
      :prev-arrow="Arrow({ direction: 'left' })"
      :next-arrow="Arrow({ direction: 'right' })"
    >
      <div v-for="(item, index) in carouselData" :key="index">
        <div class="relative">
          <img
            class="object-cover w-full h-screen"
            :src="'data:image/jpeg;base64,' + item.image"
            :alt="item.header.th"
          />
          <div
            :style="{ color: item.color }"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-dark whitespace-normal text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-light"
          >
            {{ item.header[selectedLanguage] }}
          </div>
        </div>
      </div>
    </vue-slick>
  </div>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import VueSlickCarousel from 'vue-slick-carousel';
import ChevronLeftOutlined from 'vue-material-design-icons/ChevronLeftBoxOutlined.vue';
import ChevronRightOutlined from 'vue-material-design-icons/ChevronRightBoxOutlined.vue';
import HomeService from '../services/HomeServices';
import Loading from './Loading.vue';

export default {
  components: {
    VueSlickCarousel,
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
  components: {
    Arrow: {
      props: ['direction'],
      template: `
          <div
            :class="{ 'left-4': direction === 'left', 'right-4': direction === 'right' }"
            class="absolute top-1/2 transform -translate-y-1/2 cursor-pointer text-3xl z-10"
            @click="$emit('click')"
          >
            <template v-if="direction === 'left'">
              <ChevronLeftOutlined :style="{ fontSize: '3rem' }" />
            </template>
            <template v-else>
              <ChevronRightOutlined :style="{ fontSize: '3rem' }" />
            </template>
          </div>
        `,
    },
  },
};
</script>

<style scoped>
/* Add or modify styles as needed */
</style>
