import { h } from 'vue';
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
              Products
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
                  <th class="border p-2 text-black font-medium">Başlık</th>
                  <th class="border p-2 text-black font-medium">Açıklama</th>
                  <th class="border p-2 text-black font-medium">Görsel</th>
                  <th class="border p-2 text-black font-medium">Aksiyonlar</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in productArray" :key="product.id">
                  <td class="border p-2">
                    <p class="text-black font-medium">
                      {{ product.header[selectedLanguage] }}
                    </p>
                  </td>
                  <td class="border p-2">
                    <p class="text-black font-medium">
                      {{ product.description[selectedLanguage] }}
                    </p>
                  </td>

                  <td class="border p-2">
                    <img
                      :src="'data:image/jpeg;base64,' + product.mainImage"
                      alt="avatar"
                      class="w-96 h-auto"
                    />
                  </td>

                  <td class="flex flex-row justify-center items-center h-96">
                    <button
                      @click="editProductMethod(product)"
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
                  Ekle
                </h2>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Kapak Görseli:</label
                  >
                  <input
                    type="file"
                    accept="image/*"
                    @change="handleAddFileChange"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <label class="block text-gray-600 text-lg font-bold mb-2"
                  >Başlık
                </label>
                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Türkçe
                  </label>
                  <input
                    v-model="newProduct.header.turkish"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >İngilizce</label
                  >
                  <input
                    v-model="newProduct.header.english"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Arapça</label
                  >
                  <input
                    v-model="newProduct.header.arabic"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Fransızca</label
                  >
                  <input
                    v-model="newProduct.header.french"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>
                <label class="block text-gray-600 text-lg font-bold mb-2"
                  >Açıklama
                </label>
                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Türkçe</label
                  >
                  <input
                    v-model="newProduct.description.turkish"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >İngilizce</label
                  >
                  <input
                    v-model="newProduct.description.english"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Arapça</label
                  >
                  <input
                    v-model="newProduct.description.arabic"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Fransızca</label
                  >
                  <input
                    v-model="newProduct.description.french"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Yazı Rengi:</label
                  >
                  <input
                    v-model="newProduct.color"
                    type="color"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Galeri:</label
                  >
                  <input
                    type="file"
                    accept="image/*"
                    @change="handleEditGalleryChange"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="flex justify-center gap-x-4 pt-4">
                  <button
                    @click="cancelAdd"
                    class="ml-2 px-4 py-2 bg-gray-300 text-gray-600 rounded font-bold"
                  >
                    İptal
                  </button>
                  <button
                    @click="addProduct"
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
                    >Kapak Görseli:</label
                  >
                  <input
                    type="file"
                    accept="image/*"
                    @change="handleFileChange"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <label class="block text-gray-600 text-lg font-bold mb-2"
                  >Başlık
                </label>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Türkçe</label
                  >
                  <input
                    v-model="editProduct.header.turkish"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >İngilizce</label
                  >
                  <input
                    v-model="editProduct.header.english"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Arapça</label
                  >
                  <input
                    v-model="editProduct.header.arabic"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Fransızca</label
                  >
                  <input
                    v-model="editProduct.header.french"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <label class="block text-gray-600 text-lg font-bold mb-2"
                  >Açıklama
                </label>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Türkçe</label
                  >
                  <input
                    v-model="editProduct.description.turkish"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >İngilizce</label
                  >
                  <input
                    v-model="editProduct.description.english"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Arapça</label
                  >
                  <input
                    v-model="editProduct.description.arabic"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Fransızca</label
                  >
                  <input
                    v-model="editProduct.description.french"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Galeri:</label
                  >
                  <input
                    type="file"
                    accept="image/*"
                    multiple="true"
                    @change="handleEditGalleryChange"
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
                    @click="saveProduct"
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
import ProductService from '@/services/ProductServices.js';
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
      productArray: null,
      addModalVisible: false,
      editModalVisible: false,
      newProduct: {
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
        base64File: null,
      },
      editProduct: {
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
        mainImage: '',
        images: [],
      },
    };
  },
  mounted() {
    this.fetchProduct();
  },

  methods: {
    async fetchProduct() {
      try {
        const response = await ProductService.getProducts();
        this.productArray = response.data;
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
          this.newProduct.base64File = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    handleAddGalleryChange(event) {
      const files = event.target.files;
      if (files && files.length > 0) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newProduct.base64Files = Array.from(files).map(
            (file) => e.target.result
          );
        };
        reader.readAsDataURL(files[0]);
      }
    },

    async addProduct() {
      let body = {
        turkish: this.newProduct.turkish,
        english: this.newProduct.english,
        arabic: this.newProduct.arabic,
        french: this.newProduct.french,
        color: this.newProduct.color,
        base64File: this.newProduct.base64File,
      };

      ProductService.addProduct(body).then((response) => {
        this.loading = false;
        this.addModalVisible = false;
        this.fetchProduct();
      });
    },

    cancelAdd() {
      this.newProduct = {
        turkish: '',
        english: '',
        arabic: '',
        french: '',
        color: '#000000',
        base64File: null,
      };
      this.addModalVisible = false;
    },

    editProductMethod(product) {
      this.editProduct = {
        id: product.id,
        header: {
          turkish: product.header.turkish,
          english: product.header.english,
          arabic: product.header.arabic,
          french: product.header.french,
        },
        description: {
          turkish: product.description.turkish,
          english: product.description.english,
          arabic: product.description.arabic,
          french: product.description.french,
        },
        color: product.color,
        base64File: product.mainImage,
      };

      this.editModalVisible = true;
    },

    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.editProduct.base64File = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    handleEditGalleryChange(event) {
      const files = event.target.files;
      if (files && files.length > 0) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.editProduct.images = Array.from(files).map(
            (file) => e.target.result
          );
        };

        console.log(this.editProduct.images);
        reader.readAsDataURL(files[0]);
      }
    },

    async saveProduct() {
      let body = {
        turkish: this.editProduct.turkish,
        english: this.editProduct.english,
        arabic: this.editProduct.arabic,
        french: this.editProduct.french,
        color: this.editProduct.color,
        base64File: this.editProduct.base64File,
      };

      ProductService.editProduct(body).then((response) => {
        this.loading = false;
        this.editModalVisible = false;
        this.fetchProduct();
      });
    },

    cancelEdit() {
      this.editProduct = null;
      this.editModalVisible = false;
    },
  },
};
</script>
