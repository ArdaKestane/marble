<template>
  <div
    class="block sm:block md:flex lg:flex xl:flex 2xl:flex justify-center items-center w-full text-black bg-[#C1B8AD] py-2 sm:py-2 md:py-2 lg:py-4 xl:py-6 2xl:py-8"
  >
    <div class="flex flex-col justify-center items-center w-full my-8">
      <h1
        class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold"
      >
        {{
          selectedLanguage === 'turkish'
            ? 'Memnun müşteriler'
            : selectedLanguage === 'english'
              ? 'Satisfied Customers'
              : selectedLanguage === 'arabic'
                ? 'عملاء راضون'
                : selectedLanguage === 'french'
                  ? 'Clients satisfaits'
                  : ''
        }}
      </h1>
      <span
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl my-8 text-white font-bold"
        >{{ totalCustomers }}</span
      >
      <FaceAgent :size="64" class="text-white" />
    </div>
    <div class="flex flex-col justify-center items-center w-full my-8">
      <h1
        class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold"
      >
        {{
          selectedLanguage === 'turkish'
            ? 'Toplam üretim'
            : selectedLanguage === 'english'
              ? 'Total Production'
              : selectedLanguage === 'arabic'
                ? 'إجمالي الإنتاج'
                : selectedLanguage === 'french'
                  ? 'Production totale'
                  : ''
        }}
      </h1>
      <span
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl my-8 text-white font-bold"
        >{{ totalMarbleProduction }} m<sup>2</sup></span
      >
      <ChartLine :size="64" class="text-white" />
    </div>
    <div class="flex flex-col justify-center items-center w-full my-8">
      <h1
        class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold"
      >
        {{
          selectedLanguage === 'turkish'
            ? 'Deneyim yılı'
            : selectedLanguage === 'english'
              ? 'Years of Experience'
              : selectedLanguage === 'arabic'
                ? 'سنوات الخبرة'
                : selectedLanguage === 'french'
                  ? "Années d'expérience"
                  : ''
        }}
      </h1>
      <span
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl my-8 text-white font-bold"
        >{{ yearsOfExperience }}</span
      >
      <StarShooting :size="64" class="text-white" />
    </div>
  </div>
</template>

<script>
import FaceAgent from 'vue-material-design-icons/FaceAgent.vue';
import ChartLine from 'vue-material-design-icons/ChartLine.vue';
import StarShooting from 'vue-material-design-icons/StarShooting.vue';

export default {
  data() {
    return {
      selectedLanguage: localStorage.getItem('selectedLanguage'),
      totalCustomers: 0,
      totalMarbleProduction: 0,
      yearsOfExperience: 0,
    };
  },
  components: {
    FaceAgent,
    ChartLine,
    StarShooting,
    FaceAgent,
  },
};
</script>
