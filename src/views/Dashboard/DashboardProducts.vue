<template>
  <div>
    <NavigationDrawer />
    <div class="flex justify-center py-24 h-screen bg-gray-100 overflow-y-auto">
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
                  <th class="border p-2 text-black font-medium w-56">Görsel</th>
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
                      :src=" product.mainImage"
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
                    <button
                      @click="deleteProduct(product.id)"
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
                    multiple="true"
                    @change="handleAddGalleryChange"
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
                    @change="handleEditFileChange"
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
                  <button
                    @click="openGalleryModal"
                    class="ml-2 w-full px-4 py-2 bg-gray-300 text-gray-600 rounded font-bold"
                  >
                    Galeriyi düzenle
                  </button>
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
            <div
              v-if="galleryModalVisible"
              class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
            >
              <div
                class="bg-white p-8 w-1/2 flex flex-col justify-center mx-auto rounded shadow-lg"
              >
                <div class="flex justify-center">
                  <h2
                    class="text-2xl font-semibold mb-4 text-center text-black"
                  >
                    Galeriyi Düzenle
                  </h2>
                  <button
                    @click="openFileInput"
                    class="ml-auto flex justify-center text-center"
                  >
                    <PlusBoxOutline
                      fillColor="#2b4c65"
                      :size="32"
                      class="ml-auto"
                    />
                  </button>
                  <input
                    ref="fileInput"
                    type="file"
                    accept="image/*"
                    multiple="true"
                    style="display: none"
                    @change="handleGalleryFileChange"
                  />
                </div>
                <div
                  v-if="editProduct.images.length > 0"
                  class="grid grid-cols-3 gap-4 overflow-y-auto"
                >
                  <div
                    v-for="(image, index) in editProduct.images"
                    :key="index"
                    class="relative"
                  >
                    <img
                      :src=" image"
                      alt="Gallery Image"
                      class="w-full h-32"
                    />
                    <button
                      @click="deleteImage(image)"
                      class="absolute z-50 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
                    >
                      <TrashCanOutline :size="40" fillColor="red" />
                    </button>
                  </div>
                </div>

                <button
                  @click="closeGalleryModal"
                  class="py-2 px-4 mt-4 bg-gray-300 text-gray-600 rounded font-bold"
                >
                  İptal
                </button>
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
      loading: false,
      selectedLanguage: localStorage.getItem('selectedLanguage'),
      productArray: null,
      addModalVisible: false,
      editModalVisible: false,
      galleryModalVisible: false,
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
        mainImage: '',
        images: [],
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
        this.loading = true;
        const response = await ProductService.getProducts();
        this.productArray = response.data;
        this.loading = false;
      } catch (error) {
        console.error(error);
      }
    },

    async deleteProduct(id) {
      try {
        this.loading = true;
        await ProductService.deleteProduct(id);
        this.loading = false;
        this.fetchProduct();
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
          this.newProduct.mainImage = base64Data;
        };
        reader.readAsDataURL(file);
      }
    },

    handleAddGalleryChange(event) {
      const files = event.target.files;
      if (files && files.length > 0) {
        Array.from(files).forEach((file) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const base64String = e.target.result;
            const base64Data = base64String.split(',')[1];
            this.newProduct.images.push(base64Data);
          };
          reader.readAsDataURL(file);
        });
      }
    },

    async addProduct() {
      let body = {
        header: {
          turkish: this.newProduct.header.turkish,
          english: this.newProduct.header.english,
          arabic: this.newProduct.header.arabic,
          french: this.newProduct.header.french,
        },
        description: {
          turkish: this.newProduct.description.turkish,
          english: this.newProduct.description.english,
          arabic: this.newProduct.description.arabic,
          french: this.newProduct.description.french,
        },
        mainImage: this.newProduct.mainImage,
        images: this.newProduct.images,
      };

      this.loading = true;
      this.addModalVisible = false;
      ProductService.createProduct(body).then((response) => {
        this.newProduct = {
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
        };
        this.loading = false;

        this.fetchProduct();
      });
    },

    cancelAdd() {
      this.newProduct = {
        header: {
          turkish: this.newProduct.header.turkish,
          english: this.newProduct.header.english,
          arabic: this.newProduct.header.arabic,
          french: this.newProduct.header.french,
        },
        description: {
          turkish: this.newProduct.description.turkish,
          english: this.newProduct.description.english,
          arabic: this.newProduct.description.arabic,
          french: this.newProduct.description.french,
        },
        mainImage: this.newProduct.mainImage,
        images: this.newProduct.images,
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
        mainImage: product.mainImage,
        images: product.images,
      };

      this.editModalVisible = true;
    },

    handleEditFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64String = e.target.result;
          const base64Data = base64String.split(',')[1];
          this.editProduct.mainImage = base64Data;
        };
        reader.readAsDataURL(file);
      }
    },

    handleEditGalleryChange(event) {
      const files = event.target.files;

      if (files && files.length > 0) {
        const reader = new FileReader();

        reader.onload = (e) => {
          this.editProduct.images = Array.from(files).map((file) => {
            const base64String = e.target.result;
            const base64Data = base64String.split(',')[1];
            return base64Data;
          });
        };
        Array.from(files).forEach((file) => {
          reader.readAsDataURL(file);
        });
      }
    },

    async saveProduct() {
      let body = {
        header: {
          turkish: this.editProduct.header.turkish,
          english: this.editProduct.header.english,
          arabic: this.editProduct.header.arabic,
          french: this.editProduct.header.french,
        },
        description: {
          turkish: this.editProduct.description.turkish,
          english: this.editProduct.description.english,
          arabic: this.editProduct.description.arabic,
          french: this.editProduct.description.french,
        },
        mainImage: this.editProduct.mainImage,
        images: this.editProduct.images,
      };

      this.loading = true;
      ProductService.updateProduct(this.editProduct.id, body).then(
        (response) => {
          this.loading = false;
          this.editModalVisible = false;
          this.fetchProduct();
        }
      );
    },

    cancelEdit() {
      this.editProduct = null;
      this.editModalVisible = false;
    },

    openGalleryModal() {
      this.galleryModalVisible = true;
    },
    openFileInput() {
      this.$refs.fileInput.click();
    },
    closeGalleryModal() {
      this.galleryModalVisible = false;
    },
    handleGalleryFileChange(event) {
      const files = event.target.files;

      if (files && files.length > 0) {
        const reader = new FileReader();

        reader.onload = (e) => {
          const images = Array.from(files).map((file) => {
            const base64String = e.target.result;
            const base64Data = base64String.split(',')[1];
            return base64Data;
          });

          this.insertImages(this.editProduct.id, images);
        };

        Array.from(files).forEach((file) => {
          reader.readAsDataURL(file);
        });
      }
    },
    async insertImages(id, images) {
      try {
        this.loading = true;
        const response = await ProductService.insertImages(id, images);
        this.loading = false;
        console.log('Images inserted successfully:', response);
      } catch (error) {
        console.error('Error inserting images:', error);
      }
    },
    deleteImage(image) {
      this.loading = true;
      ProductService.deleteImage(this.editProduct.id, image).then(
        (response) => {
          this.loading = false;
          this.fetchProduct();
        }
      );
    },
  },
};
</script>
