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
              Footer
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
                  <th class="border p-2 text-black font-medium">Name</th>
                  <th class="border p-2 text-black font-medium">Address</th>
                  <th class="border p-2 text-black font-medium">Phone</th>
                  <th class="border p-2 text-black font-medium">Email</th>
                  <th class="border p-2 text-black font-medium">X</th>
                  <th class="border p-2 text-black font-medium">Y</th>
                  <th class="border p-2 text-black font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="location in locations" :key="location.id">
                  <td class="border p-2">
                    <p class="text-black font-medium">
                      {{ location.name[selectedLanguage] }}
                    </p>
                  </td>
                  <td class="border p-2">
                    <p class="text-black font-medium">
                      {{ location.address[selectedLanguage] }}
                    </p>
                  </td>
                  <td class="border p-2">
                    <p class="text-black font-medium">{{ location.phone }}</p>
                  </td>
                  <td class="border p-2">
                    <p class="text-black font-medium">{{ location.email }}</p>
                  </td>
                  <td class="border p-2">
                    <p class="text-black font-medium">{{ location.x }}</p>
                  </td>
                  <td class="border p-2">
                    <p class="text-black font-medium">{{ location.y }}</p>
                  </td>
                  <td class="flex flex-row justify-center items-center">
                    <button
                      @click="deleteLocation(location.id)"
                      class="flex justify-center items-center text-center"
                    >
                      <TrashCanOutline fillColor="red" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-8">
              <h2 class="text-2xl font-semibold mb-4 text-center text-black">
                Company Information
              </h2>
              <table class="min-w-full border rounded bg-white">
                <thead>
                  <tr>
                    <th class="border p-2 text-black font-medium">
                      Company Email
                    </th>
                    <th class="border p-2 text-black font-medium">
                      Company Phone
                    </th>
                    <th class="border p-2 text-black font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border p-2">
                      <p class="text-black font-medium">{{ companyEMail }}</p>
                    </td>
                    <td class="border p-2">
                      <p class="text-black font-medium">
                        {{ companyPhoneNumber }}
                      </p>
                    </td>
                    <td class="flex flex-row justify-center items-center">
                      <button
                        @click="openEditCompanyInfoModal"
                        class="flex justify-center items-center text-center"
                      >
                        <PencilBoxOutline fillColor="green" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              v-if="editCompanyInfoModalVisible"
              class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
            >
              <div class="bg-white p-8 w-1/3 mx-auto rounded shadow-lg">
                <h2 class="text-2xl font-semibold mb-4 text-center text-black">
                  Edit Company Information
                </h2>

                <div class="mb-4">
                  <label class="block text-gray-600 text-lg font-bold mb-2"
                    >Company Email:</label
                  >
                  <input
                    v-model="editedCompanyEMail"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-lg font-bold mb-2"
                    >Company Phone:</label
                  >
                  <input
                    v-model="editedCompanyPhoneNumber"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="flex justify-center gap-x-4 pt-4">
                  <button
                    @click="cancelEditCompanyInfo"
                    class="ml-2 px-4 py-2 bg-gray-300 text-gray-600 rounded font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    @click="saveCompanyInfo"
                    class="px-4 py-2 bg-blue-500 text-white rounded font-bold"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div
              v-if="addModalVisible"
              class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
            >
              <div
                class="bg-white p-8 w-1/3 h-2/3 mx-auto rounded shadow-lg overflow-y-auto"
              >
                <h2 class="text-2xl font-semibold mb-4 text-center text-black">
                  Add New Location
                </h2>

                <label class="block text-gray-600 text-lg font-bold mb-2"
                  >İsim
                </label>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Türkçe
                  </label>
                  <input
                    v-model="newLocation.name.turkish"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >English
                  </label>
                  <input
                    v-model="newLocation.name.english"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Arabic
                  </label>
                  <input
                    v-model="newLocation.name.arabic"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >French
                  </label>
                  <input
                    v-model="newLocation.name.french"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <label class="block text-gray-600 text-lg font-bold mb-2"
                  >Adres
                </label>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Türkçe
                  </label>
                  <input
                    v-model="newLocation.address.turkish"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >English
                  </label>
                  <input
                    v-model="newLocation.address.english"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Arabic
                  </label>
                  <input
                    v-model="newLocation.address.arabic"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >French
                  </label>
                  <input
                    v-model="newLocation.address.french"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-lg font-bold mb-2"
                    >Telefon Numarası:</label
                  >
                  <input
                    v-model="newLocation.phone"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-lg font-bold mb-2"
                    >Email:</label
                  >
                  <input
                    v-model="newLocation.email"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-lg font-bold mb-2"
                    >X Koordinatı:</label
                  >
                  <input
                    v-model="newLocation.x"
                    type="number"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-lg font-bold mb-2"
                    >Y Koordinatı:</label
                  >
                  <input
                    v-model="newLocation.y"
                    type="number"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="flex justify-center gap-x-4 pt-4">
                  <button
                    @click="cancelAddLocation"
                    class="ml-2 px-4 py-2 bg-gray-300 text-gray-600 rounded font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    @click="addLocation"
                    class="px-4 py-2 bg-blue-500 text-white rounded font-bold"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <!-- <div
              v-if="editModalVisible"
              class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
            >
              <div class="bg-white p-8 w-1/3 mx-auto rounded shadow-lg">
                <h2 class="text-2xl font-semibold mb-4 text-center text-black">
                  Edit Location
                </h2>

                <label class="block text-gray-600 text-lg font-bold mb-2"
                  >İsim
                </label>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Türkçe
                  </label>
                  <input
                    v-model="editLocation.name.turkish"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >English
                  </label>
                  <input
                    v-model="editLocation.name.english"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Arabic
                  </label>
                  <input
                    v-model="editLocation.name.arabic"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >French
                  </label>
                  <input
                    v-model="editLocation.name.french"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <label class="block text-gray-600 text-lg font-bold mb-2"
                  >Adres
                </label>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Türkçe
                  </label>
                  <input
                    v-model="editLocation.address.turkish"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >English
                  </label>
                  <input
                    v-model="editLocation.address.english"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >Arabic
                  </label>
                  <input
                    v-model="editLocation.address.arabic"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-sm font-medium mb-2"
                    >French
                  </label>
                  <input
                    v-model="editLocation.address.french"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-lg font-bold mb-2"
                    >Telefon Numarası:</label
                  >
                  <input
                    v-model="editLocation.phone"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-lg font-bold mb-2"
                    >Email:</label
                  >
                  <input
                    v-model="editLocation.email"
                    type="text"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-lg font-bold mb-2"
                    >X Koordinatı:</label
                  >
                  <input
                    v-model="editLocation.x"
                    type="number"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-600 text-lg font-bold mb-2"
                    >Y Koordinatı:</label
                  >
                  <input
                    v-model="editLocation.y"
                    type="number"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="flex justify-center gap-x-4 pt-4">
                  <button
                    @click="cancelEditLocation"
                    class="ml-2 px-4 py-2 bg-gray-300 text-gray-600 rounded font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    @click="saveLocation"
                    class="px-4 py-2 bg-blue-500 text-white rounded font-bold"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationDrawer from '@/components/Dashboard/NavigationDrawer.vue';
import FooterServices from '@/services/FooterServices';
import Loading from '@/components/Loading.vue';
import PencilBoxOutline from 'vue-material-design-icons/PencilBoxOutline.vue';
import PlusBoxOutline from 'vue-material-design-icons/PlusBoxOutline.vue';
import TrashCanOutline from 'vue-material-design-icons/TrashCanOutline.vue';

export default {
  name: 'Footer',
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
      selectedLanguage: localStorage.getItem('selectedLanguage'),
      locations: null,
      addModalVisible: false,
      editModalVisible: false,
      editCompanyInfoModalVisible: false,
      companyEMail: '',
      companyPhoneNumber: '',
      newLocation: {
        name: {
          turkish: '',
          english: '',
          arabic: '',
          french: '',
        },
        address: {
          turkish: '',
          english: '',
          arabic: '',
          french: '',
        },
        phone: '',
        email: '',
        x: 0,
        y: 0,
      },
      editLocation: {
        id: null,
        name: {
          turkish: '',
          english: '',
          arabic: '',
          french: '',
        },
        address: {
          turkish: '',
          english: '',
          arabic: '',
          french: '',
        },
        phone: '',
        email: '',
        x: 0,
        y: 0,
      },
    };
  },
  mounted() {
    this.fetchLocations();
  },

  methods: {
    openEditCompanyInfoModal() {
      this.editedCompanyEMail = this.companyEMail;
      this.editedCompanyPhoneNumber = this.companyPhoneNumber;
      this.editCompanyInfoModalVisible = true;
    },

    cancelEditCompanyInfo() {
      this.editedCompanyEMail = '';
      this.editedCompanyPhoneNumber = '';
      this.editCompanyInfoModalVisible = false;
    },

    saveCompanyInfo() {
      let body = {
        companyEMail: this.editedCompanyEMail,
        companyPhoneNumber: this.editedCompanyPhoneNumber,
      };

      FooterServices.updateInformation(body).then((response) => {
        this.loading = false;
        this.editCompanyInfoModalVisible = false;
        this.newLocation = {
          name: {
            turkish: '',
            english: '',
            arabic: '',
            french: '',
          },
          address: {
            turkish: '',
            english: '',
            arabic: '',
            french: '',
          },
          phone: '',
          email: '',
          x: 0,
          y: 0,
        };
        this.fetchLocations();
      });
    },
    async fetchLocations() {
      try {
        const response = await FooterServices.getFooter();
        this.locations = response.data.locations;
        this.companyEMail = response.data.companyEMail;
        this.companyPhoneNumber = response.data.companyPhoneNumber;

        this.loading = false;
      } catch (error) {
        console.error(error);
      }
    },

    openAddModal() {
      this.addModalVisible = true;
    },

    handleAddLocationFileChange(event) {},

    editCompanyInfo() {},

    async addLocation() {
      let body = {
        name: { ...this.newLocation.name },
        address: { ...this.newLocation.address },
        phone: this.newLocation.phone,
        email: this.newLocation.email,
        x: this.newLocation.x,
        y: this.newLocation.y,
      };

      FooterServices.addLocation(body).then((response) => {
        this.loading = false;
        this.addModalVisible = false;
        this.newLocation = {
          name: {
            turkish: '',
            english: '',
            arabic: '',
            french: '',
          },
          address: {
            turkish: '',
            english: '',
            arabic: '',
            french: '',
          },
          phone: '',
          email: '',
          x: 0,
          y: 0,
        };
        this.fetchLocations();
      });
    },

    cancelAddLocation() {
      this.newLocation = {
        name: {
          turkish: '',
          english: '',
          arabic: '',
          french: '',
        },
        address: {
          turkish: '',
          english: '',
          arabic: '',
          french: '',
        },
        phone: '',
        email: '',
        x: 0,
        y: 0,
      };
      this.addModalVisible = false;
    },

    async saveLocation() {
      let body = {
        id: this.editLocation.id,
        name: { ...this.editLocation.name },
        address: { ...this.editLocation.address },
        phone: this.editLocation.phone,
        email: this.editLocation.email,
        x: this.editLocation.x,
        y: this.editLocation.y,
      };

      FooterServices.updateInformation(body).then((response) => {
        this.loading = false;
        this.editLocation = {
          id: null,
          name: {
            turkish: '',
            english: '',
            arabic: '',
            french: '',
          },
          address: {
            turkish: '',
            english: '',
            arabic: '',
            french: '',
          },
          phone: '',
          email: '',
          x: 0,
          y: 0,
        };
        this.editModalVisible = false;
        this.fetchLocations();
      });
    },

    cancelEditLocation() {
      this.editLocation = {
        id: null,
        name: {
          turkish: '',
          english: '',
          arabic: '',
          french: '',
        },
        address: {
          turkish: '',
          english: '',
          arabic: '',
          french: '',
        },
        phone: '',
        email: '',
        x: 0,
        y: 0,
      };
      this.editModalVisible = false;
    },

    async deleteLocation(id) {
      if (confirm('Are you sure you want to delete this location?')) {
        try {
          await FooterServices.deleteLocation(id);
          this.fetchLocations();
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
};
</script>
