<template>
  <div>
    <!-- Loading overlay -->
    <div
      v-if="loading"
      class="fixed inset-0 flex justify-center items-center bg-mainDark opacity-50 z-10"
    >
      <Loading />
    </div>

    <!-- Content Section -->
    <div
      v-else
      class="block sm:block md:flex lg:flex xl:flex 2xl:flex justify-center items-center w-full text-black bg-secondaryLight py-2 sm:py-2 md:py-2 lg:py-4 xl:py-6 2xl:py-8"
    >
      <div class="flex flex-col justify-center items-center w-full my-8">
        <h1
          class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-mainDark font-medium"
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
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl my-8 text-mainDark font-bold"
          >{{ animatedValues.totalCustomers + '+' }}</span
        >
        <FaceAgent :size="64" class="text-mainDark" />
      </div>

      <div class="flex flex-col justify-center items-center w-full my-8">
        <h1
          class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-mainDark font-medium"
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
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl my-8 text-mainDark font-bold"
          >{{ animatedValues.totalMarbleProduction + '+' }} m<sup>2</sup></span
        >
        <ChartLine :size="64" class="text-mainDark" />
      </div>

      <div class="flex flex-col justify-center items-center w-full my-8">
        <h1
          class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-mainDark font-medium"
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
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl my-8 text-mainDark font-bold"
          >{{ animatedValues.yearsOfExperience + '+' }}</span
        >
        <StarShooting :size="64" class="text-mainDark" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch, onMounted } from 'vue';
import gsap from 'gsap';
import FaceAgent from 'vue-material-design-icons/FaceAgent.vue';
import ChartLine from 'vue-material-design-icons/ChartLine.vue';
import StarShooting from 'vue-material-design-icons/StarShooting.vue';
import Loading from './Loading.vue';
import ExperienceService from '@/services/ExperienceServices';

export default {
  components: {
    FaceAgent,
    ChartLine,
    StarShooting,
    Loading,
  },
  setup() {
    const selectedLanguage = ref(localStorage.getItem('selectedLanguage'));
    const totalCustomers = ref(0);
    const totalMarbleProduction = ref(0);
    const yearsOfExperience = ref(0);
    const loading = ref(true);

    const animatedValues = reactive({
      totalCustomers: 0,
      totalMarbleProduction: 0,
      yearsOfExperience: 0,
    });

    const updateGSAP = () => {
      gsap.to(animatedValues, {
        duration: 3,
        totalCustomers: totalCustomers.value,
        totalMarbleProduction: totalMarbleProduction.value,
        yearsOfExperience: yearsOfExperience.value,
        onUpdate: () => {
          // Force reactivity update
          animatedValues.totalCustomers =
            animatedValues.totalCustomers.toFixed(0);
          animatedValues.totalMarbleProduction =
            animatedValues.totalMarbleProduction.toFixed(0);
          animatedValues.yearsOfExperience =
            animatedValues.yearsOfExperience.toFixed(0);
        },
      });
    };

    watch([totalCustomers, totalMarbleProduction, yearsOfExperience], () => {
      updateGSAP();
    });

    onMounted(async () => {
      await getExperience();
    });

    const getExperience = async () => {
      try {
        const response = await ExperienceService.getExperiences();
        totalCustomers.value = response.data.totalCustomers;
        totalMarbleProduction.value = response.data.totalMarbleProduction;
        yearsOfExperience.value = response.data.yearsOfExperience;

        // Hide the loading screen once data is fetched
        loading.value = false;
      } catch (error) {
        console.error('Error fetching experience data:', error);
      }
    };

    return {
      selectedLanguage,
      animatedValues,
      loading,
    };
  },
};
</script>
