<template>
  <div class="h-full">
    <GMapMap
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
        :position="{ lat: location.y, lng: location.x }"
        :clickable="true"
        :draggable="true"
        @click="center = { lat: location.y, lng: location.x }"
      />
    </GMapMap>
  </div>
</template>

<script>
export default {
  props: {
    locations: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      center: { lat: 51.093048, lng: 6.84212 },
    };
  },
  components: {},
};
</script>
