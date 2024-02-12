<template>
  <div class="w-full flex flex-col">
    <div class="w-full">
      <MapComponent :locations="locations" />
    </div>
    <div
      class="flex w-full p-2 flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col items-center"
    >
      <LocationCard class="w-1/2" :locations="locations" />
      <ContactUs class="w-1/2" />
    </div>
    <div
      class="h-fit w-full py-4 flex items-center justify-center bg-opacity-30 bg-gray-200 relative"
    >
      <div
        class="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center justify-between space-x-0 sm:space-x-5 md:space-x-32 lg:space-x-48 xl:space-x-80"
      >
        <div class="text-center w-full text-black sm:w-auto mb-4 sm:mb-0">
          <p>{{ contactLabel }}</p>
          <p>{{ companyEMail }}</p>
        </div>
        <div
          class="text-center w-full text-black sm:w-auto mb-4 sm:mb-0 sm:order-3"
        >
          <p>{{ detailsLabel }}</p>
          <p>{{ companyPhoneNumber }}</p>
        </div>
        <div class="text-center w-full text-black sm:w-auto sm:order-2">
          <p>© Copyright 2023 Marble Company</p>
          <p>{{ allRightsReservedLabel }}</p>
        </div>
      </div>

      <div
        class="flex gap-x-4"
        style="position: absolute; bottom: 25px; right: 25px"
      >
        <img
          @click="toggleLanguage('turkish')"
          src="@/assets/Images/Flags/tr.jpg"
          class="w-8 h-auto"
          style="cursor: pointer"
        />
        <img
          @click="toggleLanguage('arabic')"
          src="@/assets/Images/Flags/ar.jpg"
          class="w-8 h-auto"
          style="cursor: pointer"
        />
        <img
          @click="toggleLanguage('english')"
          src="@/assets/Images/Flags/en.jpg"
          class="w-8 h-auto"
          style="cursor: pointer"
        />
        <img
          @click="toggleLanguage('french')"
          src="@/assets/Images/Flags/fr.jpg"
          class="w-8 h-auto"
          style="cursor: pointer"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MapComponent from './MapComponent.vue';
import LocationCard from './LocationCard.vue';
import ContactUs from './ContactUs.vue';
import FooterService from '../services/FooterServices';
import Loading from './Loading.vue';

export default {
  components: {
    MapComponent,
    LocationCard,
    ContactUs,
    Loading,
  },
  data() {
    return {
      selectedLanguage: localStorage.getItem('selectedLanguage'),
      loading: true,
      companyPhoneNumber: '',
      companyEMail: '',
      locations: [],
    };
  },
  mounted() {
    this.getLocations();
  },
  methods: {
    toggleLanguage(language) {
      this.selectedLanguage = language;
      localStorage.setItem('selectedLanguage', language);
      window.location.reload();
    },
    getLocations() {
      FooterService.getLocations()
        .then((response) => {
          this.locations = response.data.locations;
          console.log(this.locations);
          this.loading = false;
        })
        .catch((error) => {
          console.error(error);
          this.loading = false;
        });
    },
    getLabel(key) {
      const languageLabels = {
        turkish: {
          Contact: 'İletişim',
          Details: 'Detaylı Bilgi',
          'All Rights Reserved': 'Tüm Hakları Saklıdır.',
        },
        english: {
          Contact: 'Contact',
          Details: 'Details',
          'All Rights Reserved': 'All Rights Reserved.',
        },
        arabic: {
          Contact: 'اتصال',
          Details: 'تفاصيل',
          'All Rights Reserved': 'كل الحقوق محفوظة.',
        },
        french: {
          Contact: 'Contact',
          Details: 'Détails',
          'All Rights Reserved': 'Tous droits réservés.',
        },
      };
      return languageLabels[this.selectedLanguage][key];
    },
  },
  computed: {
    contactLabel() {
      return this.getLabel('Contact');
    },
    detailsLabel() {
      return this.getLabel('Details');
    },
    allRightsReservedLabel() {
      return this.getLabel('All Rights Reserved');
    },
  },
};
</script>

<style scoped>
/* Add or modify styles as needed */
</style>
