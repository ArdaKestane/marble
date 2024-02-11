<template>
  <div>
    <NavigationDrawer />
    <div class="flex justify-center py-24 h-screen bg-gray-100">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-8">
          <div class="flex justify-center">
            <h1
              class="ml-auto text-2xl font-semibold mb-4 text-center text-black"
            >
              Carousel
            </h1>
            <button
              @click="openAddModal"
              class="ml-auto flex justify-center text-center"
            >
              <PlusBoxOutline fillColor="#2b4c65" :size="32" class="ml-auto" />
            </button>
          </div>

          <div class="overflow-x-auto relative">
            <div
              v-if="loading"
              class="fixed inset-0 flex justify-center items-center bg-white opacity-50 z-10"
            >
              <Loading />
            </div>
            <table v-else class="min-w-full border rounded bg-white">
              <thead>
                <tr>
                  <th class="border p-2 text-black font-medium">Görsel</th>
                  <th class="border p-2 text-black font-medium">Yazı Rengi</th>
                  <th class="border p-2 text-black font-medium">Türkçe</th>
                  <th class="border p-2 text-black font-medium">İngilizce</th>
                  <th class="border p-2 text-black font-medium">Arapça</th>
                  <th class="border p-2 text-black font-medium">Fransızca</th>
                  <th class="border p-2 text-black font-medium">Aksiyonlar</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="carousel in carouselArray" :key="carousel.id">
                  <td class="border p-2">
                    <img
                      :src="'data:image/jpeg;base64,' + carousel.image"
                      alt="avatar"
                      class="w-96 h-auto"
                    />
                  </td>
                  <td class="border p-2">
                    <div
                      class="border p-2 w-36 h-48"
                      :style="{ backgroundColor: carousel.color }"
                    ></div>
                  </td>

                  <td class="border p-2 text-center">
                    <p class="text-gray-600">{{ carousel.header.turkish }}</p>
                  </td>
                  <td class="border p-2 text-center">
                    <p class="text-gray-600">{{ carousel.header.english }}</p>
                  </td>
                  <td class="border p-2 text-center">
                    <p class="text-gray-600">{{ carousel.header.arabic }}</p>
                  </td>
                  <td class="border p-2 text-center">
                    <p class="text-gray-600">{{ carousel.header.french }}</p>
                  </td>

                  <td class="flex flex-row justify-center items-center h-48">
                    <button
                      @click="editCarouselMethod(carousel)"
                      class="flex justify-center items-center text-center"
                    >
                      <PencilBoxOutline fillColor="green" />
                    </button>
                    <button
                      @click="deleteCarousel(carousel.id)"
                      class="flex justify-center items-center text-center"
                    >
                      <TrashCanOutline fillColor="red" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              v-if="addModalVisible"
              class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
            >
              <div class="bg-white p-8 w-1/3 mx-auto rounded shadow-lg">
                <h2 class="text-2xl font-semibold mb-4 text-center text-black">
                  Ekle
                </h2>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Görsel:</label
                  >
                  <input
                    type="file"
                    accept="image/*"
                    @change="handleAddFileChange"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Yazı Rengi:</label
                  >
                  <input
                    v-model="newCarousel.color"
                    type="color"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <label
                  for="addTurkish"
                  class="block text-gray-600 text-sm font-medium mb-2"
                  >Türkçe</label
                >
                <input
                  v-model="newCarousel.header.turkish"
                  type="text"
                  id="addTurkish"
                  class="w-full border p-2 rounded text-gray-600"
                />

                <label
                  for="addEnglish"
                  class="block text-gray-600 text-sm font-medium mb-2"
                  >İngilizce</label
                >
                <input
                  v-model="newCarousel.header.english"
                  type="text"
                  id="addEnglish"
                  class="w-full border p-2 rounded text-gray-600"
                />

                <label
                  for="addArabic"
                  class="block text-gray-600 text-sm font-medium mb-2"
                  >Arapça</label
                >
                <input
                  v-model="newCarousel.header.arabic"
                  type="text"
                  id="addArabic"
                  class="w-full border p-2 rounded text-gray-600"
                />

                <label
                  for="addFrench"
                  class="block text-gray-600 text-sm font-medium mb-2"
                  >Fransızca</label
                >
                <input
                  v-model="newCarousel.header.french"
                  type="text"
                  id="addFrench"
                  class="w-full border p-2 rounded text-gray-600"
                />

                <div class="flex justify-center gap-x-4 pt-4">
                  <button
                    @click="cancelAdd"
                    class="ml-2 px-4 py-2 bg-gray-300 text-gray-600 rounded font-bold"
                  >
                    İptal
                  </button>
                  <button
                    @click="addCarousel"
                    class="px-4 py-2 bg-blue-500 text-white rounded font-bold"
                  >
                    Ekle
                  </button>
                </div>
              </div>
            </div>
            <div
              v-if="editModalVisible"
              class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
            >
              <div class="bg-white p-8 w-1/3 mx-auto rounded shadow-lg">
                <h2 class="text-2xl font-semibold mb-4 text-center text-black">
                  Düzenle
                </h2>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Görsel:</label
                  >
                  <input
                    type="file"
                    accept="image/*"
                    @change="handleFileChange"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Yazı Rengi:</label
                  >
                  <input
                    v-model="editCarousel.color"
                    type="color"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <label
                  for="editTurkish"
                  class="block text-gray-600 text-sm font-medium mb-2"
                  >Türkçe</label
                >
                <input
                  v-model="editCarousel.header.turkish"
                  type="text"
                  id="editTurkish"
                  class="w-full border p-2 rounded text-gray-600"
                />

                <label
                  for="editEnglish"
                  class="block text-gray-600 text-sm font-medium mb-2"
                  >İngilizce</label
                >
                <input
                  v-model="editCarousel.header.english"
                  type="text"
                  id="editEnglish"
                  class="w-full border p-2 rounded text-gray-600"
                />

                <label
                  for="editArabic"
                  class="block text-gray-600 text-sm font-medium mb-2"
                  >Arapça</label
                >

                <input
                  v-model="editCarousel.header.arabic"
                  type="text"
                  id="editArabic"
                  class="w-full border p-2 rounded text-gray-600"
                />

                <label
                  for="editFrench"
                  class="block text-gray-600 text-sm font-medium mb-2"
                  >Fransızca</label
                >
                <input
                  v-model="editCarousel.header.french"
                  type="text"
                  id="editFrench"
                  class="w-full border p-2 rounded text-gray-600"
                />

                <div class="flex justify-center gap-x-4 pt-4">
                  <button
                    @click="cancelEdit"
                    class="ml-2 px-4 py-2 bg-gray-300 text-gray-600 rounded font-bold"
                  >
                    İptal
                  </button>
                  <button
                    @click="saveCarousel"
                    class="px-4 py-2 bg-blue-500 text-white rounded font-bold"
                  >
                    Kaydet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationDrawer from '@/components/Dashboard/NavigationDrawer.vue';
import HomeService from '@/services/HomeServices';
import Loading from '@/components/Loading.vue';
import PencilBoxOutline from 'vue-material-design-icons/PencilBoxOutline.vue';
import PlusBoxOutline from 'vue-material-design-icons/PlusBoxOutline.vue';
import TrashCanOutline from 'vue-material-design-icons/TrashCanOutline.vue';

export default {
  name: 'User',
  components: {
    NavigationDrawer,
    Loading,
    PencilBoxOutline,
    PlusBoxOutline,
    TrashCanOutline,
  },
  data() {
    return {
      loading: true,
      carouselArray: null,

      newCarousel: {
        header: {
          turkish: '',
          english: '',
          arabic: '',
          french: '',
        },
        color: '#000000',
        base64File: null,
      },
      addModalVisible: false,

      editCarousel: {
        header: {
          turkish: '',
          english: '',
          arabic: '',
          french: '',
        },
        color: '#000000',
        base64File: null,
      },
      editModalVisible: false,
    };
  },
  mounted() {
    this.fetchCarousel();
  },

  methods: {
    async fetchCarousel() {
      try {
        const response = await HomeService.getItems();
        this.carouselArray = response.data;
        this.loading = false;
      } catch (error) {
        console.error(error);
      }
    },

    openAddModal() {
      this.addModalVisible = true;
    },

    handleAddFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64String = e.target.result;
          const base64Data = base64String.split(',')[1];
          this.newCarousel.base64File = base64Data;
        };
        reader.readAsDataURL(file);
      }
    },

    async addCarousel() {
      let body = {
        header: {
          turkish: this.newCarousel.header.turkish,
          english: this.newCarousel.header.english,
          arabic: this.newCarousel.header.arabic,
          french: this.newCarousel.header.french,
        },
        color: this.newCarousel.color,
        base64File: this.newCarousel.base64File,
      };

      HomeService.postItem(body).then((response) => {
        this.loading = false;
        this.addModalVisible = false;
        this.fetchCarousel();
      });
    },

    cancelAdd() {
      this.newCarousel = {
        header: {
          turkish: '',
          english: '',
          arabic: '',
          french: '',
        },
        color: '#000000',
        base64File: null,
      };
      this.addModalVisible = false;
    },

    editCarouselMethod(carousel) {
      this.editCarousel = {
        id: carousel.id,
        header: {
          turkish: carousel.header.turkish,
          english: carousel.header.english,
          arabic: carousel.header.arabic,
          french: carousel.header.french,
        },
        color: carousel.color,
        base64File: null,
      };

      this.editModalVisible = true;
    },
    deleteCarousel(id) {
      this.loading = true;
      HomeService.deleteItem(id).then((response) => {
        this.loading = false;
        this.fetchCarousel();
      });
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64String = e.target.result;
          const base64Data = base64String.split(',')[1];
          this.editCarousel.base64File = base64Data;
        };
        reader.readAsDataURL(file);
      }
    },

    async saveCarousel() {
      let body = {
        header: {
          turkish: this.editCarousel.header.turkish,
          english: this.editCarousel.header.english,
          arabic: this.editCarousel.header.arabic,
          french: this.editCarousel.header.french,
        },
        color: this.editCarousel.color,
        base64File: this.editCarousel.base64File,
      };

      console.log(body)

      HomeService.putItem(this.editCarousel.id ,body).then((response) => {
        this.loading = false;
        this.editModalVisible = false;
        this.fetchCarousel();
      });
    },

    cancelEdit() {
      this.editCarousel = null;
      this.editModalVisible = false;
    },
  },
};
</script>
