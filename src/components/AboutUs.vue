<template>
  <div
    v-if="loading"
    class="fixed inset-0 flex justify-center items-center bg-white opacity-50 z-10"
  >
    <Loading />
  </div>
  <div
    class="flex py-10 px-10 flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col align-center justify-center"
  >
    <div
      class="flex items-center justify-center w-full xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xl:mr-5"
    >
      <img
        :src="'data:image/jpeg;base64,' + base64File"
        alt="Logo"
        class="w-2/5 xl:w-1/2 lg:w-3/4 md:w-2/5 sm:w-2/5"
      />
    </div>
    <div
      class="flex flex-col m-5 xl:w-1/2 lg:w-1/2 md:w-full xl:text-left lg:text-left md:text-center sm:text-center"
    >
      <h2
        class="mx-auto text-black text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4"
      >
        {{ headerText[selectedLanguage] }}
      </h2>
      <p
        class="text-lg text-black sm:text-lg md:text-xl lg:text-2xl xl:text-2xl"
      >
        {{ description[selectedLanguage] }}
      </p>
    </div>
  </div>
</template>

<script>
import AboutUsService from '../services/AboutUsServices';
import Loading from './Loading.vue';

export default {
  data() {
    return {
      loading: true,
      selectedLanguage: localStorage.getItem('selectedLanguage'),
      base64File: null,
      headerText: {
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
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        this.loading = true;
        const response = await AboutUsService.getAboutUs();
        const { id, base64File, description, headerText } = response.data;

        this.base64File = base64File;
        this.description = {
          turkish: description.turkish,
          english: description.english,
          arabic: description.arabic,
          french: description.french,
        };
        this.headerText = {
          turkish: headerText.turkish,
          english: headerText.english,
          arabic: headerText.arabic,
          french: headerText.french,
        };

        this.loading = false;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
  components: {
    Loading,
  },
};
</script>
