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
              Header
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
                  <th class="border p-2 text-black font-medium">Başlık</th>
                  <th class="border p-2 text-black font-medium">Yazı Rengi</th>
                  <th class="border p-2 text-black font-medium">Logo</th>
                  <th class="border p-2 text-black font-medium">Düzenle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border p-2">
                    <p class="text-gray-600">{{ header?.headerText }}</p>
                  </td>
                  <td class="border p-2">
                    <div
                      :style="{ backgroundColor: header?.color }"
                      style="width: 100%; height: 40px"
                    ></div>
                  </td>
                  <td class="border p-2">
                    <img
                      :src="
                         header?.image
                      "
                      alt="avatar"
                      class="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td class="flex flex-row justify-center items-center h-14">
                    <button
                      @click="editHeaderMethod()"
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
              <div class="bg-white p-8 w-1/3 mx-auto rounded shadow-lg">
                <h2 class="text-2xl font-semibold mb-4 text-center text-black">
                  Düzenle
                </h2>
                <div class="mb-4">
                  <label
                    for="editUsername"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >Başlık</label
                  >
                  <input
                    v-model="editHeader.headerText"
                    type="text"
                    id="editUsername"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="editColor"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >Renk</label
                  >
                  <input
                    v-model="editHeader.color"
                    type="color"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="editAvatarUrl"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >Logo:</label
                  >
                  <input
                    type="file"
                    accept="image/*"
                    @change="handleFileChange"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="flex justify-center gap-x-4 pt-4">
                  <button
                    @click="cancelEdit"
                    class="ml-2 px-4 py-2 bg-gray-300 text-gray-600 rounded font-bold"
                  >
                    İptal
                  </button>
                  <button
                    @click="saveHeader"
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
import HeaderService from '@/services/HeaderServices';
import Loading from '@/components/Loading.vue';
import PencilBoxOutline from 'vue-material-design-icons/PencilBoxOutline.vue';

export default {
  name: 'User',
  components: {
    NavigationDrawer,
    Loading,
    PencilBoxOutline,
  },
  data() {
    return {
      loading: false,
      header: null,
      editHeader: {
        headerText: '',
        color: '#000000',
         image: null,
      },
      editModalVisible: false,
    };
  },
  mounted() {
    this.fetchHeader();
  },

  methods: {
    async fetchHeader() {
      try {
        this.loading = true;
        const response = await HeaderService.getHeader();
        this.header = response.data;
        this.loading = false;
      } catch (error) {
        console.error(error);
      }
    },

    editHeaderMethod() {
      this.editModalVisible = true;
      this.editHeader = {
        headerText: this.header.headerText,
        color: this.header.color,
         image: this.header.image,
      };
    },

    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64String = e.target.result;
          const base64Data = base64String.split(',')[1];
          this.editHeader.image = base64Data;
        };
        reader.readAsDataURL(file);
      }
    },

    async saveHeader() {
      let body = {
        headerText: this.editHeader.headerText,
        color: this.editHeader.color,
         image: this.editHeader.image,
      };
      this.loading = true;
      HeaderService.editHeader(body).then((response) => {
        this.editHeader = {
          headerText: '',
          color: '#000000',
           image: null,
        };
        this.editModalVisible = false;
        this.loading = false;
        this.fetchHeader();
      });
    },

    cancelEdit() {
      this.editHeader = {
        headerText: '',
        color: '#000000',
         image: null,
      };
      this.editModalVisible = false;
    },
  },
};
</script>
