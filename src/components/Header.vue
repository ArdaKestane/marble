<template>
  <div
    class="relative"
    :class="{
      'rounded-t-3xl': isModule,
      'border-b-2 border-white': drawerOpen,
    }"
  >
    <div
      class="relative flex justify-between items-center bg-opacity-10 bg-repeat z-50 w-full py-2 px-5"
    >
      <div class="flex items-center">
        <img
          v-if="isModule"
          :src="'data:image/jpeg;base64,' + headerSource"
          alt="Logo"
          class="w-12 sm:w-12 md:w-16 lg:w-20 xl:w-24 font-noto mx-5"
        />
        <router-link v-else to="/" @click="scrollToTop">
          <img
            :src="'data:image/jpeg;base64,' + headerSource"
            alt="Logo"
            class="w-12 sm:w-12 md:w-16 lg:w-20 xl:w-24 font-noto mx-5"
          />
        </router-link>
        <h1
          class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-noto"
          :style="{ color: headerColor }"
        >
          {{ headerText }}
        </h1>
      </div>
      <div
        class="w-8 sm:w-8 md:w-12 lg:w-14 xl:w-16 font-noto"
        @click="toggleDrawer"
        :style="{ color: headerColor }"
      >
        <Menu :style="{ color: headerColor }" />
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="drawerOpen"
        class="z-10 opacity-95 bg-repeat top-full right-0 left-0 z-1 h-24 flex items-center justify-between px-5 border-t-2 border-white"
      >
        <router-link
          to="/"
          class="text-white hover:text-gray-300 mx-2"
          @click="handleLinkClick"
        >
          <p
            class="nav-item text-center flex-grow text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-noto"
            :style="{ color: headerColor }"
          >
            {{
              selectedLanguage === 'turkish'
                ? 'Anasayfa'
                : selectedLanguage === 'english'
                  ? 'Home'
                  : selectedLanguage === 'arabic'
                    ? 'الصفحة الرئيسية'
                    : selectedLanguage === 'french'
                      ? 'Accueil'
                      : ''
            }}
          </p>
        </router-link>

        <router-link
          to="/products"
          class="text-white hover:text-gray-300 mx-2"
          @click="handleLinkClick"
        >
          <p
            class="nav-item text-center flex-grow text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-noto"
            :style="{ color: headerColor }"
          >
            {{
              selectedLanguage === 'turkish'
                ? 'Ürünler'
                : selectedLanguage === 'english'
                  ? 'Products'
                  : selectedLanguage === 'arabic'
                    ? 'المنتجات'
                    : selectedLanguage === 'french'
                      ? 'Produits'
                      : ''
            }}
          </p>
        </router-link>

        <router-link
          to="/products"
          class="text-white hover:text-gray-300 mx-2"
          @click="handleLinkClick"
        >
          <p
            class="nav-item text-center flex-grow text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-noto"
            :style="{ color: headerColor }"
          >
            {{
              selectedLanguage === 'turkish'
                ? 'İletişim'
                : selectedLanguage === 'english'
                  ? 'Contact'
                  : selectedLanguage === 'arabic'
                    ? 'تواصل'
                    : selectedLanguage === 'french'
                      ? 'communication'
                      : ''
            }}
          </p>
        </router-link>

        <router-link
          to="/products"
          class="text-white hover:text-gray-300 mx-2"
          @click="handleLinkClick"
        >
          <p
            class="nav-item text-center flex-grow text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-noto"
            :style="{ color: headerColor }"
          >
            {{
              selectedLanguage === 'turkish'
                ? 'Zaman çizelgesi'
                : selectedLanguage === 'english'
                  ? 'Timeline'
                  : selectedLanguage === 'arabic'
                    ? 'الجدول الزمني'
                    : selectedLanguage === 'french'
                      ? 'Chronologie'
                      : ''
            }}
          </p>
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
import HeaderService from '../services/HeaderServices';
import trFlag from '../assets/Images/Flags/tr.jpg';
import enFlag from '../assets/Images/Flags/en.jpg';
import frFlag from '../assets/Images/Flags/fr.jpg';
import arFlag from '../assets/Images/Flags/ar.jpg';
import Menu from 'vue-material-design-icons/Menu.vue';

export default {
  data() {
    return {
      selectedLanguage: localStorage.getItem('selectedLanguage') || 'turkish',
      drawerOpen: false,
      headerSource: null,
      headerText: '',
      headerColor: '#000000',
    };
  },
  components: {
    trFlag,
    enFlag,
    frFlag,
    arFlag,
    Menu,
  },
  mounted() {
    this.getHeader();
  },

  methods: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
    handleLinkClick() {
      this.drawerOpen = false;
      this.scrollToTop();
    },
    getHeader() {
      HeaderService.getHeader().then((response) => {
        this.headerSource = response.data.base64File;
        this.headerText = response.data.headerText;
        this.headerColor = response.data.color;
      });
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    changeLanguage(language) {
      localStorage.setItem('selectedLanguage', language);
      window.location.reload();
    },
  },
};
</script>

<style scoped></style>
