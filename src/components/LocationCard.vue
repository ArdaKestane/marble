<template>
  <div
    class="w-full grid grid-cols-1 gap-5 py-5 px-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1"
  >
    <div
      v-for="location in locations"
      :key="location.id"
      class="bg-gray-100 text-center rounded-lg p-4 drop-shadow-lg flex flex-col items-center justify-center whitespace-normal"
    >
      <h2 class="mb-2 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        {{ location.name[selectedLanguage] }}
      </h2>
      <p
        class="mb-2 text-sm sm:text-lg md:text-xl lg:text-sm xl:text-lg text-gray-700 break-all"
      >
        {{ location.address[selectedLanguage] }}
      </p>
      <p
        class="mb-2 text-sm sm:text-lg md:text-xl lg:text-sm xl:text-lg text-gray-700 break-all"
      >
        {{ selectedLanguage === 'turkish' && `Telefon: ${location.phone}` }}
        {{ selectedLanguage === 'english' && `Phone: ${location.phone}` }}
        {{ selectedLanguage === 'arabic' && `الهاتف: ${location.phone}` }}
        {{ selectedLanguage === 'french' && `Téléphone: ${location.phone}` }}
      </p>
      <p
        class="mb-2 text-sm sm:text-lg md:text-xl lg:text-sm xl:text-lg text-gray-700 break-all"
      >
        {{ selectedLanguage === 'turkish' && `E-posta: ${location.email}` }}
        {{ selectedLanguage === 'english' && `Email: ${location.email}` }}
        {{
          selectedLanguage === 'arabic' &&
          `البريد الإلكتروني: ${location.email}`
        }}
        {{ selectedLanguage === 'french' && `E-mail: ${location.email}` }}
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
