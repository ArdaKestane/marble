<template>
  <div>
    <NavigationDrawer />
    <div class="flex justify-center py-24 min-h-screen h-max bg-secondaryLight">
      <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-fourthLight overflow-hidden shadow-xl sm:rounded-lg p-8">
          <div class="flex justify-center">
            <h1
              class="ml-auto text-2xl font-semibold mb-4 text-center text-black"
            >
              Timeline
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
                  <th class="border p-2 text-black font-medium">Sıra</th>
                  <th class="border p-2 text-black font-medium">Görsel</th>
                  <th class="border p-2 text-black font-medium">Başlık</th>
                  <th class="border p-2 text-black font-medium">Açıklama</th>
                  <th class="border p-2 text-black font-medium">Aksiyonlar</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="time in timeline" :key="time.id">
                  <td class="border p-2">
                    <p class="text-black font-medium">
                      {{ timeline.indexOf(time) + 1 }}
                    </p>
                  </td>
                  <td class="border p-2">
                    <img :src="time.image" alt="avatar" class="w-96 h-auto" />
                  </td>
                  <td class="border p-2">
                    <p class="text-black font-medium">
                      {{ time.header[selectedLanguage] }}
                    </p>
                  </td>

                  <td class="border p-2">
                    <p class="text-black font-medium">
                      {{ time.description[selectedLanguage] }}
                    </p>
                  </td>

                  <td class="flex flex-row justify-center items-center h-96">
                    <button
                      @click="editTimelineMethod(time)"
                      class="flex justify-center items-center text-center"
                    >
                      <PencilBoxOutline fillColor="green" />
                    </button>
                    <button
                      @click="deleteTimeline(time)"
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

                <label class="block text-gray-600 text-lg font-bold mb-2"
                  >Sıra</label
                >

                <div class="mb-4">
                  <select
                    v-model="newTimeline.selectedTimelineIndex"
                    id="dropdown"
                    class="w-full border p-2 rounded text-gray-600"
                  >
                    <option value="0">En son ekle</option>
                    <option
                      v-for="(time, index) in timeline"
                      :value="index"
                      :key="time.id"
                    >
                      {{ index + 1 }}
                    </option>
                  </select>
                </div>

                <label class="block text-gray-600 text-lg font-bold mb-2"
                  >Görsel</label
                >

                <div class="mb-4">
                  <input
                    type="file"
                    accept="image/*"
                    @change="handleAddFileChange($event)"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <label class="block text-gray-600 text-lg font-bold mb-2"
                  >Başlık</label
                >
                <div class="mb-4">
                  <label
                    for="addTurkish"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >Türkçe</label
                  >
                  <input
                    v-model="newTimeline.header.turkish"
                    type="text"
                    id="addTurkish"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="addEnglish"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >İngilizce</label
                  >
                  <input
                    v-model="newTimeline.header.english"
                    type="text"
                    id="addEnglish"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="addArabic"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >Arapça</label
                  >
                  <input
                    v-model="newTimeline.header.arabic"
                    type="text"
                    id="addArabic"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="addFrench"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >Fransızca</label
                  >
                  <input
                    v-model="newTimeline.header.french"
                    type="text"
                    id="addFrench"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <label class="block text-gray-600 text-lg font-bold mb-2"
                  >Açıklama</label
                >

                <div class="mb-4">
                  <label
                    for="addTurkishDesc"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >Türkçe</label
                  >
                  <input
                    v-model="newTimeline.description.turkish"
                    type="text"
                    id="addTurkishDesc"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="addEnglishDesc"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >İngilizce</label
                  >
                  <input
                    v-model="newTimeline.description.english"
                    type="text"
                    id="addEnglishDesc"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="addArabicDesc"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >Arapça</label
                  >
                  <input
                    v-model="newTimeline.description.arabic"
                    type="text"
                    id="addArabicDesc"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="addFrenchDesc"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >Fransızca</label
                  >
                  <input
                    v-model="newTimeline.description.french"
                    type="text"
                    id="addFrenchDesc"
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
                    @click="saveAddTimeline"
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
                class="bg-secondaryLight p-8 w-1/3 h-2/3 mx-auto rounded shadow-lg overflow-y-auto"
              >
                <h2 class="text-2xl font-semibold mb-4 text-center text-black">
                  Düzenle
                </h2>

                <div class="mb-4">
                  <label
                    for="editImage"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >Görsel:</label
                  >
                  <input
                    type="file"
                    accept="image/*"
                    @change="handleFileChange($event)"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <label class="block text-gray-600 text-lg font-bold mb-2"
                  >Başlık</label
                >

                <div class="mb-4">
                  <label
                    for="editTurkish"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >Türkçe</label
                  >
                  <input
                    v-model="editTimeline.header.turkish"
                    type="text"
                    id="editTurkish"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="editEnglish"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >İngilizce</label
                  >
                  <input
                    v-model="editTimeline.header.english"
                    type="text"
                    id="editEnglish"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="editArabic"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >Arapça</label
                  >
                  <input
                    v-model="editTimeline.header.arabic"
                    type="text"
                    id="editArabic"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="editFrench"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >Fransızca</label
                  >
                  <input
                    v-model="editTimeline.header.french"
                    type="text"
                    id="editFrench"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <label class="block text-gray-600 text-lg font-bold mb-2"
                  >Açıklama</label
                >

                <div class="mb-4">
                  <label
                    for="editTurkishDesc"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >Türkçe</label
                  >
                  <input
                    v-model="editTimeline.description.turkish"
                    type="text"
                    id="editTurkishDesc"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="editEnglishDesc"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >İngilizce</label
                  >
                  <input
                    v-model="editTimeline.description.english"
                    type="text"
                    id="editEnglishDesc"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="editArabicDesc"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >Arapça</label
                  >
                  <input
                    v-model="editTimeline.description.arabic"
                    type="text"
                    id="editArabicDesc"
                    class="w-full border p-2 rounded text-gray-600"
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="editFrenchDesc"
                    class="block text-gray-600 text-sm font-medium mb-2"
                    >Fransızca</label
                  >
                  <input
                    v-model="editTimeline.description.french"
                    type="text"
                    id="editFrenchDesc"
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
                    @click="saveTimeline"
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
import Loading from '@/components/Loading.vue';
import PencilBoxOutline from 'vue-material-design-icons/PencilBoxOutline.vue';
import PlusBoxOutline from 'vue-material-design-icons/PlusBoxOutline.vue';
import TrashCanOutline from 'vue-material-design-icons/TrashCanOutline.vue';
import TimelineService from '@/services/TimelineServices';
import FileService from '@/services/FileServices';

export default {
  name: 'Timeline',
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
      timeline: null,
      selectedTimelineIndex: 0,
      newTimeline: {
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
        image: null,
      },

      editTimeline: {
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
        image: null,
      },
      addModalVisible: false,
      editModalVisible: false,
    };
  },
  mounted() {
    this.fetchTimeline();
  },

  methods: {
    async fetchTimeline() {
      try {
        this.loading = true;
        const response = await TimelineService.getTimelines();
        this.timeline = response.data;
        this.loading = false;
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('token');
          this.$router.push('/login');
        }
      }
    },

    async uploadFile() {
      await FileService.upload(this.newTimeline.image)
        .then((response) => {
          this.newTimeline.image = response.data[0];
        })
        .catch((error) => {
          console.error(error);
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            this.$router.push('/login');
          }
        });
    },

    openAddModal() {
      this.addModalVisible = true;
    },

    async saveAddTimeline() {
      this.loading = true;

      if (this.newTimeline.image) {
        await this.uploadFile();
      }

      let body = {
        header: {
          turkish: this.newTimeline.header.turkish,
          english: this.newTimeline.header.english,
          arabic: this.newTimeline.header.arabic,
          french: this.newTimeline.header.french,
        },
        description: {
          turkish: this.newTimeline.description.turkish,
          english: this.newTimeline.description.english,
          arabic: this.newTimeline.description.arabic,
          french: this.newTimeline.description.french,
        },
        image: this.newTimeline.image,
      };

      try {
        await TimelineService.addTimeline(
          body,
          this.newTimeline.selectedTimelineIndex
        );

        this.addModalVisible = false;
        this.fetchTimeline();
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('token');
          this.$router.push('/login');
        }
      } finally {
        this.loading = false;
        this.newTimeline = {
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
          image: null,
        };
      }
    },

    handleAddFileChange(event) {
      this.newTimeline.image = event.target.files[0];
    },

    cancelAdd() {
      this.newTimeline = {
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
        image: null,
      };
      this.addModalVisible = false;
    },

    editTimelineMethod(time) {
      this.editModalVisible = true;
      this.editTimeline = {
        id: time.id,
        header: {
          turkish: time.header.turkish,
          english: time.header.english,
          arabic: time.header.arabic,
          french: time.header.french,
        },
        description: {
          turkish: time.description.turkish,
          english: time.description.english,
          arabic: time.description.arabic,
          french: time.description.french,
        },
        image: time.image,
      };
    },

    handleFileChange(event) {
      this.editTimeline.image = event.target.files[0];
    },

    async uploadEditFile() {
      await FileService.upload(this.editTimeline.image)
        .then((response) => {
          this.editTimeline.image = response.data[0];
        })
        .catch((error) => {
          console.error(error);
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            this.$router.push('/login');
          }
        });
    },

    async saveTimeline() {
      this.loading = true;

      if (this.editTimeline.image) {
        await this.uploadEditFile();
      }

      let body = {
        header: {
          turkish: this.editTimeline.header.turkish,
          english: this.editTimeline.header.english,
          arabic: this.editTimeline.header.arabic,
          french: this.editTimeline.header.french,
        },
        description: {
          turkish: this.editTimeline.description.turkish,
          english: this.editTimeline.description.english,
          arabic: this.editTimeline.description.arabic,
          french: this.editTimeline.description.french,
        },
        image: this.editTimeline.image,
      };
      this.loading = true;
      TimelineService.updateTimeline(this.editTimeline.id, body)
        .then((response) => {
          this.loading = false;
          this.editModalVisible = false;
          this.fetchTimeline();
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
      this.editTimeline = {
        header: {
          turkish: this.timeline.header.turkish,
          english: this.timeline.header.english,
          arabic: this.timeline.header.arabic,
          french: this.timeline.header.french,
        },
        description: {
          turkish: this.timeline.description.turkish,
          english: this.timeline.description.english,
          arabic: this.timeline.description.arabic,
          french: this.timeline.description.french,
        },
        image: this.timeline.image,
      };
      this.editModalVisible = false;
    },

    async deleteTimeline(time) {
      this.loading = true;
      try {
        await TimelineService.deleteTimeline(time.id);
        this.fetchTimeline();
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('token');
          this.$router.push('/login');
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
