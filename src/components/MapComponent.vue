<template>
  <div class="h-full">
    <!-- <GMap
      :center="center"
      :zoom="10"
      map-container-class="w-full h-full min-w-[300px] min-h-[500px] max-h-[750px]"
    >
      <GMarker
        v-for="(location, index) in locations"
        :key="index"
        :position="{ lat: location.y, lng: location.x }"
        :title="location.name[selectedLanguage]"
      />
    </GMap> -->
  </div>
</template>

<script>
// import { GMap, GMarker } from 'vue3-google-map';
import { ref, onMounted } from 'vue';

export default {
  props: {
    locations: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const center = ref({ lat: 38.4333, lng: 27.15 });
    const selectedLanguage = ref(
      localStorage.getItem('selectedLanguage')
    );

    onMounted(() => {
      // Load Google Maps API script here if needed
      // For example, you can use the 'load-script' library
      // (https://www.npmjs.com/package/load-script)
    });

    return {
      center,
      selectedLanguage,
    };
  },
};
</script>

<style scoped>
/* Add or modify styles as needed */
</style>
