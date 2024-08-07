<template>
  <div
    class="relative h-[5vh]"
    :class="{
      'border-b-2 border-white z-50': drawerOpen,
    }"
  >
    <div
      class="relative flex justify-between items-center bg-opacity-10 bg-repeat z-50 w-full py-2 px-5"
    >
      <div class="flex items-center">
        <router-link to="/" @click="scrollToTop">
          <img
            :src="headerSource"
            alt="Logo"
            class="w-12 sm:w-12 md:w-16 lg:w-20 xl:w-24 font-noto mx-5"
          />
        </router-link>

        <router-link to="/" @click="scrollToTop">
          <h1
            class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-noto"
            :style="{ color: headerColor }"
          >
            {{ headerText }}
          </h1>
        </router-link>
      </div>
      <div
        class="w-8 sm:w-8 md:w-12 lg:w-14 xl:w-16 font-noto"
        @click="toggleDrawer"
        :style="{ color: headerColor }"
      >
        <Menu :size="36" :style="{ color: headerColor, cursor: 'pointer' }" />
      </div>
    </div>
    <transition name="slide-fade" @before-enter="beforeEnter" @enter="enter">
      <div
        v-if="drawerOpen"
        class="drawer-content z-10 opacity-95 bg-repeat top-full right-0 left-0 z-1 h-24 flex items-center justify-between px-5 border-t-2 border-white"
      >
        <router-link
          to="/"
          class="text-white hover:text-gray-300 mx-2"
          @click="handleLinkClick"
        >
          <p
            class="nav-item text-center flex-grow text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-noto"
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
            class="nav-item text-center flex-grow text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-noto"
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
          to="/timeline"
          class="text-white hover:text-gray-300 mx-2"
          @click="handleLinkClick"
        >
          <p
            class="nav-item text-center flex-grow text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-noto"
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
      selectedLanguage: localStorage.getItem('selectedLanguage'),
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
        this.headerSource = response.data.image;
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
    beforeEnter(el) {
      el.style.transform = 'translateY(-100%)';
    },
    enter(el, done) {
      el.offsetHeight;
      el.style.transition = 'transform 0.5s ease-in-out';
      el.style.transform = 'translateY(0)';
      done();
    },
  },
};
</script>

<style scoped>
.drawer-content {
  transform: translateY(-100%);
}
</style>
