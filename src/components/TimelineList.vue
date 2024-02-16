<template>
  <div
    v-if="loading"
    class="fixed inset-0 flex justify-center items-center bg-white opacity-50 z-10"
  >
    <Loading />
  </div>
  <div class="gap-4 mx-10 sm:mx-10 md:mx-20 lg:mx-30 xl:mx-40 my-10">
    <div
      v-for="(timeline, index) in timelineArray"
      :key="timeline.id"
      :class="{ 'flex-row-reverse': index % 2 !== 0 }"
      class="block sm:block md:block lg:flex xl:flex 2xl:flex w-full mb-6 shadow-lg rounded-2xl border border-[#DDDDDD] overflow-hidden"
    >
      <img
        :src="'data:image/jpeg;base64,' + timeline.image"
        alt="timeline"
        :class="{
          'rounded-tl-lg rounded-bl-lg': index % 2 === 0,
          'rounded-tr-lg rounded-br-lg': index % 2 !== 0,
        }"
        class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 h-[40rem] object-cover"
      />
      <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2">
        <div class="flex justify-between p-4">
          <h2
            class="text-lg sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl text-[#57534F] font-bold"
          >
            {{ timeline.header[selectedLanguage] }}
          </h2>
          <div>
            <p
              class="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-gray-600 border border-[#DDDDDD] rounded-full w-14 h-14 flex items-center justify-center font-bold text-[#57534F]"
            >
              {{ timeline.order }}
            </p>
          </div>
        </div>
        <div class="p-4">
          <h2
            class="text-md sm:text-md md:text-lg lg:text-lg xl:text-xl text-gray-600"
          >
            {{ timeline.description[selectedLanguage] }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimelineService from '../services/TimelineServices';
import Loading from './Loading.vue';

export default {
  data() {
    return {
      loading: true,
      selectedLanguage: localStorage.getItem('selectedLanguage'),
      timelineArray: [],
    };
  },
  components: {
    Loading,
  },
  methods: {
    async fetchTimelines() {
      this.loading = true;
      try {
        const response = await TimelineService.getTimelines();
        this.timelineArray = response.data;
        this.loading = false;
      } catch (error) {
        console.error('Error fetching timelines:', error);
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    this.fetchTimelines();
  },
};
</script>

<style scoped>
.flex-row-reverse {
  flex-direction: row-reverse;
}
</style>
