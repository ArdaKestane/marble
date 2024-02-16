<template>
  <div class="w-full h-fit grid gap-5 py-5 px-4 grid-cols-1 2xl:grid-cols-2">
    <div
      v-for="location in locations"
      :key="location.id"
      class="text-center rounded-lg p-4 flex flex-col whitespace-normal shadow-lg rounded-2xl border border-[#DDDDDD]"
    >
      <h2
        class="mb-2 text-lg sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl text-[#57534F]"
      >
        {{ location.name[selectedLanguage] }}
      </h2>
      <p
        class="mb-2 text-md sm:text-md md:text-lg lg:text-lg xl:text-xl text-gray-600 break-all"
      >
        {{ location.address[selectedLanguage] }}
      </p>
      <p
        class="mb-2 text-md sm:text-md md:text-lg lg:text-lg xl:text-xl text-gray-600 break-all"
      >
        <template v-if="selectedLanguage === 'turkish'"
          >Telefon: {{ location.phone }}</template
        >
        <template v-if="selectedLanguage === 'english'"
          >Phone: {{ location.phone }}</template
        >
        <template v-if="selectedLanguage === 'arabic'"
          >الهاتف: {{ location.phone }}</template
        >
        <template v-if="selectedLanguage === 'french'"
          >Téléphone: {{ location.phone }}</template
        >
      </p>

      <p
        class="mb-2 text-md sm:text-md md:text-lg lg:text-lg xl:text-xl text-gray-600 break-all"
      >
        <template v-if="selectedLanguage === 'turkish'"
          >E-posta: {{ location.email }}</template
        >
        <template v-if="selectedLanguage === 'english'"
          >Email: {{ location.email }}</template
        >
        <template v-if="selectedLanguage === 'arabic'"
          >البريد الإلكتروني: {{ location.email }}</template
        >
        <template v-if="selectedLanguage === 'french'"
          >E-mail: {{ location.email }}</template
        >
      </p>
    </div>
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
      selectedLanguage: localStorage.getItem('selectedLanguage'),
    };
  },
};
</script>

<style scoped>
/* Add or modify styles as needed */
</style>
