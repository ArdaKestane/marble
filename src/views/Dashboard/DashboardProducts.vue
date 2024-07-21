<template>
  <div>
    <NavigationDrawer />
    <div
      class="flex justify-center py-24 min-h-screen h-max bg-secondaryLight overflow-y-auto"
    >
      <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-fourthLight overflow-hidden shadow-xl sm:rounded-lg p-8">
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
              class="fixed inset-0 flex justify-center items-center bg-mainDark opacity-50 z-10"
            >
              <Loading />
            </div>
            <table v-else class="min-w-full border rounded bg-fourthLight">
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
                      :src="product.mainImage"
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
              class="fixed inset-0 flex items-center justify-center bg-mainDark bg-opacity-50 z-10"
            >
              <div
                class="bg-secondaryLight p-8 w-1/3 h-2/3 mx-auto rounded shadow-lg overflow-y-auto"
              >
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
                    @change="handleAddFileChange($event)"
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
                    @change="handleAddGalleryChange($event)"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="flex justify-center gap-x-4 pt-4">
                  <button
                    @click="cancelAdd"
                    class="ml-2 px-4 py-2 bg-mainLight text-gray-600 rounded font-bold"
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
              class="fixed inset-0 flex items-center justify-center bg-mainDark bg-opacity-50 z-10"
            >
              <div
                class="bg-secondaryLight p-8 w-1/3 mx-auto rounded shadow-lg overflow-y-auto h-2/3"
              >
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
                    @change="handleEditFileChange($event)"
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
                    class="ml-2 w-full px-4 py-2 bg-mainLight text-gray-600 rounded font-bold"
                  >
                    Galeriyi düzenle
                  </button>
                </div>

                <div class="flex justify-center gap-x-4 pt-4">
                  <button
                    @click="cancelEdit"
                    class="ml-2 px-4 py-2 bg-mainLight text-gray-600 rounded font-bold"
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
              class="fixed inset-0 flex items-center justify-center bg-mainDark bg-opacity-50 z-10"
            >
              <div
                class="bg-secondaryLight p-8 w-1/2 flex flex-col justify-center mx-auto rounded shadow-lg"
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
                    @change="handleGalleryFileChange($event)"
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
                    <img :src="image" alt="Gallery Image" class="w-full h-32" />
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
                  class="py-2 px-4 mt-4 bg-mainLight text-gray-600 rounded font-bold"
                >
                  Kapat
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
import PencilBoxOutline from 'vue-material-design-icons/PencilBoxOutline.vue';
import PlusBoxOutline from 'vue-material-design-icons/PlusBoxOutline.vue';
import TrashCanOutline from 'vue-material-design-icons/TrashCanOutline.vue';
import Loading from '@/components/Loading.vue';
import NavigationDrawer from '@/components/Dashboard/NavigationDrawer.vue';
import ProductService from '@/services/ProductServices.js';
import FileService from '@/services/FileServices.js';

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
        images: null,
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
        images: null,
      },
      imagesToAdd: [],
    };
  },
  mounted() {
    this.fetchProduct();
  },

  methods: {
    async fetchProduct() {
      try {
        this.loading = true;
        this.addModalVisible = false;
        this.editModalVisible = false;
        this.galleryModalVisible = false;
        const response = await ProductService.getProducts();
        this.productArray = response.data;
        this.loading = false;
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('token');
          this.$router.push('/login');
        }
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
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('token');
          this.$router.push('/login');
        }
      }
    },

    openAddModal() {
      this.addModalVisible = true;
    },

    handleAddFileChange(event) {
      this.newProduct.mainImage = event.target.files[0];
    },

    async uploadNewFile() {
      await FileService.upload(this.newProduct.mainImage)
        .then((response) => {
          this.newProduct.mainImage = response.data[0];
        })
        .catch((error) => {
          console.error(error);
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            this.$router.push('/login');
          }
        });
    },

    handleEditFileChange(event) {
      this.editProduct.mainImage = event.target.files[0];
    },

    async uploadEditFile() {
      await FileService.upload(this.editProduct.mainImage)
        .then((response) => {
          this.editProduct.mainImage = response.data[0];
        })
        .catch((error) => {
          console.error(error);
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            this.$router.push('/login');
          }
        });
    },

    handleAddGalleryChange(event) {
      this.newProduct.images = event.target.files;
    },

    async uploadNewGallery() {
      await FileService.upload(this.newProduct.images)
        .then((response) => {
          this.newProduct.images = response.data;
        })
        .catch((error) => {
          console.error(error);
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            this.$router.push('/login');
          }
        });
    },

    handleGalleryFileChange(event) {
      this.imagesToAdd = event.target.files;
      this.insertImages(this.editProduct.id, this.imagesToAdd);
    },

    async uploadEditGallery() {
      await FileService.upload(this.imagesToAdd)
        .then((response) => {
          this.imagesToAdd = response.data;
        })
        .catch((error) => {
          console.error(error);
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            this.$router.push('/login');
          }
        });
    },

    async addProduct() {
      if (this.newProduct.mainImage) {
        await this.uploadNewFile();
      }

      if (this.newProduct.images.length > 0) {
        await this.uploadNewGallery();
      }

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
      ProductService.createProduct(body)
        .then((response) => {
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
        })
        .catch((error) => {
          console.error(error);
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            this.$router.push('/login');
          }
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
        mainImage: null,
        images: product.images,
      };

      this.editModalVisible = true;
    },

    async saveProduct() {
      if (this.editProduct.mainImage) {
        await this.uploadEditFile();
      }

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
      };

      this.loading = true;
      ProductService.updateProduct(this.editProduct.id, body)
        .then((response) => {
          this.loading = false;
          this.editModalVisible = false;
          this.fetchProduct();
        })
        .catch((error) => {
          console.error(error);
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            this.$router.push('/login');
          }
        });
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

    async insertImages(id, images) {
      try {
        this.loading = true;
        await this.uploadEditGallery();
        const response = await ProductService.insertImages(
          id,
          this.imagesToAdd
        );
        this.loading = false;
        this.fetchProduct();
      } catch (error) {
        console.error('Error inserting images:', error);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('token');
          this.$router.push('/login');
        }
      }
    },
    deleteImage(image) {
      this.loading = true;
      ProductService.deleteImage(this.editProduct.id, image)
        .then((response) => {
          this.loading = false;
          this.fetchProduct();
        })
        .catch((error) => {
          console.error('Error deleting image:', error);
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            this.$router.push('/login');
          }
        });
    },
  },
};
</script>
