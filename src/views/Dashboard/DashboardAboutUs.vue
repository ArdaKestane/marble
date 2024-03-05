<template>
  <div>
    <NavigationDrawer />
    <div class="flex justify-center py-24 h-screen bg-gray-100">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-8">
          <div class="flex justify-center">
            <h1
              class="mx-auto text-2xl font-semibold mb-4 text-center text-black"
            >
              About Us
            </h1>
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
                  <th class="border p-2 text-black font-medium">Başlık</th>
                  <th class="border p-2 text-black font-medium">Açıklama</th>
                  <th class="border p-2 text-black font-medium">Aksiyonlar</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="aboutUs.id">
                  <td class="border p-2">
                    <img
                      :src="aboutUs.image"
                      alt="avatar"
                      class="w-96 h-auto"
                    />
                  </td>
                  <td class="border p-2">
                    <p class="text-black font-medium">
                      {{ aboutUs.headerText[selectedLanguage] }}
                    </p>
                  </td>
                  <td class="border p-2">
                    <p class="text-black font-medium">
                      {{ aboutUs.description[selectedLanguage] }}
                    </p>
                  </td>

                  <td class="flex flex-row justify-center items-center h-96">
                    <button
                      @click="editAboutUsMethod(aboutUs)"
                      class="flex justify-center items-center text-center"
                    >
                      <PencilBoxOutline fillColor="green" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div
              v-if="editModalVisible"
              class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
            >
              <div
                class="bg-white p-8 w-1/3 h-2/3 mx-auto rounded shadow-lg overflow-y-auto"
              >
                <h2 class="text-2xl font-semibold mb-4 text-center text-black">
                  Edit About Us
                </h2>

                <label class="block text-gray-600 text-lg font-bold mb-2"
                  >Header</label
                >

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Turkish
                  </label>
                  <input
                    v-model="editAboutUs.headerText.turkish"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >English
                  </label>
                  <input
                    v-model="editAboutUs.headerText.english"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Arabic
                  </label>
                  <input
                    v-model="editAboutUs.headerText.arabic"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >French
                  </label>
                  <input
                    v-model="editAboutUs.headerText.french"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <label class="block text-gray-600 text-lg font-bold mb-2"
                  >Description</label
                >

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Turkish
                  </label>
                  <input
                    v-model="editAboutUs.description.turkish"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >English
                  </label>
                  <input
                    v-model="editAboutUs.description.english"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Arabic
                  </label>
                  <input
                    v-model="editAboutUs.description.arabic"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >French
                  </label>
                  <input
                    v-model="editAboutUs.description.french"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Color:</label
                  >
                  <input
                    v-model="editAboutUs.color"
                    type="color"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Image:</label
                  >
                  <input
                    type="file"
                    accept="image/*"
                    @change="handleEditAboutUsFileChange($event)"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="flex justify-center gap-x-4 pt-4">
                  <button
                    @click="cancelEditAboutUs"
                    class="ml-2 px-4 py-2 bg-gray-300 text-gray-600 rounded font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    @click="saveAboutUs"
                    class="px-4 py-2 bg-blue-500 text-white rounded font-bold"
                  >
                    Save
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
import PencilBoxOutline from 'vue-material-design-icons/PencilBoxOutline.vue';
import Loading from '@/components/Loading.vue';
import NavigationDrawer from '@/components/Dashboard/NavigationDrawer.vue';
import AboutUsService from '@/services/AboutUsServices';
import FileService from '@/services/FileServices';

export default {
  name: 'User',
  components: {
    NavigationDrawer,
    Loading,
    PencilBoxOutline,
  },
  data() {
    return {
      loading: true,
      selectedLanguage: localStorage.getItem('selectedLanguage'),
      aboutUs: null,
      addModalVisible: false,
      editModalVisible: false,
      newAboutUs: {
        header: {
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
        color: '#000000',
        image: null,
      },
      editAboutUs: {
        id: null,
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
        color: '#000000',
        image: null,
      },
    };
  },
  mounted() {
    this.fetchAboutUs();
  },

  methods: {
    async fetchAboutUs() {
      try {
        const response = await AboutUsService.getAboutUs();
        this.aboutUs = response.data;
        this.loading = false;
      } catch (error) {
        console.error(error);
      }
    },

    async uploadFile() {
      await FileService.upload(this.editAboutUs.image)
        .then((response) => {
          this.editAboutUs.image = response.data[0];
        })
        .catch((error) => {
          console.error(error);
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            this.$router.push('/');
          }
        });
    },

    editAboutUsMethod(aboutUs) {
      this.editAboutUs = {
        id: aboutUs.id,
        headerText: { ...aboutUs.headerText },
        description: { ...aboutUs.description },
        color: aboutUs.color,
        image: null,
      };
      this.editModalVisible = true;
    },

    handleEditAboutUsFileChange(event) {
      this.editAboutUs.image = event.target.files[0];
    },

    async saveAboutUs() {
      if (this.editAboutUs.image) {
        await this.uploadFile();
      }

      let body = {
        id: this.editAboutUs.id,
        headerText: { ...this.editAboutUs.headerText },
        description: { ...this.editAboutUs.description },
        color: this.editAboutUs.color,
        image: this.editAboutUs.image,
      };

      AboutUsService.editAboutUs(body)
        .then((response) => {
          this.loadingAboutUs = false;
          this.editModalVisible = false;
          this.fetchAboutUs();
        })
        .catch((error) => {
          console.error(error);
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            this.$router.push('/login');
          }
        });
    },

    cancelEditAboutUs() {
      this.editAboutUs = {
        id: null,
        header: {
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
        color: '#000000',
        image: null,
      };
      this.editModalVisible = false;
    },
  },
};
</script>
