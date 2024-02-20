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
              About Us
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
                  <th class="border p-2 text-black font-medium">Başlık</th>
                  <th class="border p-2 text-black font-medium">Açıklama</th>
                  <th class="border p-2 text-black font-medium">Aksiyonlar</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="aboutUs.id">
                  <td class="border p-2">
                    <img
                      :src=" aboutUs.image"
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
              v-if="addModalVisible"
              class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
            >
              <div class="bg-white p-8 w-1/3 mx-auto rounded shadow-lg">
                <h2 class="text-2xl font-semibold mb-4 text-center text-black">
                  Add New About Us
                </h2>

                <label class="block text-gray-600 text-lg font-bold mb-2"
                  >Başlık</label
                >
                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Türkçe
                  </label>
                  <input
                    v-model="newAboutUs.header.turkish"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >İngilizce
                  </label>
                  <input
                    v-model="newAboutUs.header.english"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Arapça
                  </label>
                  <input
                    v-model="newAboutUs.header.arabic"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Fransızca
                  </label>
                  <input
                    v-model="newAboutUs.header.french"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <label class="block text-gray-600 text-lg font-bold mb-2"
                  >Açıklama</label
                >

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Türkçe
                  </label>
                  <input
                    v-model="newAboutUs.description.turkish"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >İngilizce
                  </label>
                  <input
                    v-model="newAboutUs.description.english"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Arapça
                  </label>
                  <input
                    v-model="newAboutUs.description.arabic"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Fransızca
                  </label>
                  <input
                    v-model="newAboutUs.description.french"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Color:</label
                  >
                  <input
                    v-model="newAboutUs.color"
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
                    @change="handleAddFileChange"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="flex justify-center gap-x-4 pt-4">
                  <button
                    @click="cancelAddAboutUs"
                    class="ml-2 px-4 py-2 bg-gray-300 text-gray-600 rounded font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    @click="addAboutUs"
                    class="px-4 py-2 bg-blue-500 text-white rounded font-bold"
                  >
                    Add
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
                    @change="handleEditAboutUsFileChange"
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
import NavigationDrawer from '@/components/Dashboard/NavigationDrawer.vue';
import AboutUsService from '@/services/AboutUsServices';
import FileServices from '@/services/FileServices';
import Loading from '@/components/Loading.vue';
import PencilBoxOutline from 'vue-material-design-icons/PencilBoxOutline.vue';
import PlusBoxOutline from 'vue-material-design-icons/PlusBoxOutline.vue';

export default {
  name: 'User',
  components: {
    NavigationDrawer,
    Loading,
    PencilBoxOutline,
    PlusBoxOutline,
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

    openAddModal() {
      this.addModalVisible = true;
    },

    handleAddAboutUsFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newAboutUs.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    async addAboutUs() {
      let body = {
        header: { ...this.newAboutUs.header },
        description: { ...this.newAboutUs.description },
        color: this.newAboutUs.color,
         image: this.newAboutUs.image,
      };

      AboutUsService.addAboutUs(body).then((response) => {
        this.loadingAboutUs = false;
        this.addModalVisible = false;
        this.newAboutUs = {
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
        this.fetchAboutUs();
      });
    },

    cancelAddAboutUs() {
      this.newAboutUs = {
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
      this.addModalVisible = false;
    },

    editAboutUsMethod(aboutUs) {
      this.editAboutUs = {
        id: aboutUs.id,
        headerText: { ...aboutUs.headerText },
        description: { ...aboutUs.description },
        color: aboutUs.color,
         image: aboutUs.image,
      };
      this.editModalVisible = true;
    },

    handleEditAboutUsFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append('files', file);
        
        FileServices.uploadFile(formData)
          .then(response => {
            console.log('File uploaded successfully:', response);
            this.editAboutUs.image = response[0];
          })
          .catch(error => {
            console.error('Error uploading file:', error);
          });
      }
    },

    async saveAboutUs() {
      let body = {
        id: this.editAboutUs.id,
        headerText: { ...this.editAboutUs.headerText },
        description: { ...this.editAboutUs.description },
        color: this.editAboutUs.color,
         image: this.editAboutUs.image,
      };

      AboutUsService.editAboutUs(body).then((response) => {
        this.loadingAboutUs = false;
        this.editModalVisible = false;
        this.fetchAboutUs();
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
