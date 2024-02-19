<template>
  <div class="h-full">
    <GMapMap
      v-if="center"
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="
        width: 100%;
        height: 100%;
        min-width: 300px;
        min-height: 500px;
        max-height: 750px;
      "
    >
      <GMapMarker
        :key="index"
        v-for="(location, index) in locations"
        :position="{ lat: location?.y, lng: location?.x }"
        :clickable="true"
        :draggable="true"
      />
    </GMapMap>
  </div>
</template>

<script>
import FooterService from '@/services/FooterServices';
export default {
  props: {},
  mounted() {
    this.setupMap();
  },
  data() {
    return {
      center: null,
      locations: null,
    };
  },
  methods: {
    async setupMap() {
      const response = await FooterService.getFooter();
      this.locations = response.data.locations;

      this.center = {
        lat: response.data.locations[0].y,
        lng: response.data.locations[0].x,
      };

      console.log(this.center);
    },
  },
};
</script>
