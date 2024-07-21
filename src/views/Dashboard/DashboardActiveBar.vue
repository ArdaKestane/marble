<template>
  <div>
    <NavigationDrawer />
    <div class="flex justify-center py-24 min-h-screen h-max bg-secondaryLight">
      <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-fourthLight overflow-hidden shadow-xl sm:rounded-lg p-8">
          <div class="flex justify-center">
            <h1
              class="mx-auto text-2xl font-semibold mb-4 text-center text-black"
            >
              Active Bar
            </h1>
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
                  <th class="border p-2 text-black font-medium">
                    Memnun Müşteriler
                  </th>
                  <th class="border p-2 text-black font-medium">
                    Toplam Üretim
                  </th>
                  <th class="border p-2 text-black font-medium">
                    Deneyim Yılı
                  </th>
                  <th class="border p-2 text-black font-medium">Düzenle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border p-2 text-black font-medium">
                    {{ activeBar.totalCustomers }}
                  </td>
                  <td class="border p-2 text-black font-medium">
                    {{ activeBar.totalMarbleProduction }}
                  </td>
                  <td class="border p-2 text-black font-medium">
                    {{ activeBar.yearsOfExperience }}
                  </td>
                  <td class="flex flex-row justify-center items-center h-14">
                    <button
                      @click="editActiveBarMethod()"
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
              class="fixed inset-0 flex items-center justify-center bg-mainDark bg-opacity-50 z-10"
            >
              <div
                class="bg-secondaryLight p-8 w-1/3 mx-auto rounded shadow-lg"
              >
                <h2 class="text-2xl font-semibold mb-4 text-center text-black">
                  Düzenle
                </h2>
                <div class="mb-4">
                  <label
                    for="editTotalCustomer"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >Memnun Müşteri Sayısı</label
                  >
                  <input
                    v-model="editActiveBar.totalCustomers"
                    type="numeric"
                    id="editTotalCustomer"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="editTotalMarbleProduction"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >Toplam Üretim</label
                  >
                  <input
                    v-model="editActiveBar.totalMarbleProduction"
                    type="numeric"
                    id="editTotalMarbleProduction"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="editYearsOfExperience"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >Deneyim Yılı</label
                  >
                  <input
                    v-model="editActiveBar.yearsOfExperience"
                    type="numeric"
                    id="editYearsOfExperience"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="flex justify-center gap-x-4 pt-4">
                  <button
                    @click="cancelEdit"
                    class="ml-2 px-4 py-2 bg-mainLight text-gray-600 rounded font-bold"
                  >
                    İptal
                  </button>
                  <button
                    @click="saveActiveBar"
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
import ExperienceServices from '@/services/ExperienceServices';
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
      activeBar: {
        totalCustomers: 0,
        totalMarbleProduction: 0.0,
        yearsOfExperience: 0,
      },
      editActiveBar: {
        totalCustomers: 0,
        totalMarbleProduction: 0.0,
        yearsOfExperience: 0,
      },
      editModalVisible: false,
    };
  },
  mounted() {
    this.fetchActiveBar();
  },

  methods: {
    async fetchActiveBar() {
      try {
        this.loading = true;
        const response = await ExperienceServices.getExperiences();
        this.activeBar = response.data;
        this.loading = false;
      } catch (error) {
        console.error(error);
        this.loading = false;
      }
    },

    editActiveBarMethod() {
      this.editModalVisible = true;
      this.editActiveBar = {
        totalCustomers: this.activeBar.totalCustomers,
        totalMarbleProduction: this.activeBar.totalMarbleProduction,
        yearsOfExperience: this.activeBar.yearsOfExperience,
      };
    },

    async saveActiveBar() {
      let body = {
        totalCustomers: this.editActiveBar.totalCustomers,
        totalMarbleProduction: this.editActiveBar.totalMarbleProduction,
        yearsOfExperience: this.editActiveBar.yearsOfExperience,
      };
      this.loading = true;

      try {
        await ExperienceServices.updateExperiences(body);
        this.loading = false;
        this.editModalVisible = false;
        this.editActiveBar = {
          totalCustomers: 0,
          totalMarbleProduction: 0.0,
          yearsOfExperience: 0,
        };
        this.fetchActiveBar();
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('token');
          this.$router.push('/login');
        }
        this.loading = false;
      }
    },

    cancelEdit() {
      this.editActiveBar = {};
      this.editModalVisible = false;
    },
  },
};
</script>
