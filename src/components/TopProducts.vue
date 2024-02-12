<template>
  <div class="bg-stone-600 px-5 py-10 xl:px-40 lg:px-20 md:px-10 sm:px-10">
    <router-link
      to="/products"
      class="flex items-center inline-flex"
      @click="scrollToTop"
    >
      <h1
        class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white"
      >
        {{
          selectedLanguage === 'turkish'
            ? 'En Popüler Ürünler'
            : selectedLanguage === 'english'
              ? 'Top Products'
              : selectedLanguage === 'arabic'
                ? 'أفضل المنتجات'
                : selectedLanguage === 'french'
                  ? 'Meilleurs produits'
                  : ''
        }}
      </h1>

      <ChevronRight :size="48" class="text-white mt-3" />
    </router-link>
    <div
      class="grid grid-cols-1 gap-4 mt-10 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-1"
    >
      <Product
        v-for="(product, index) in productArray"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import Product from './Product.vue';

export default {
  data() {
    return {
      selectedLanguage: localStorage.getItem('selectedLanguage'),
      productArray: [
        {
          image:
            'https://img.freepik.com/premium-photo/white-marble-with-gold-grey-veins-abstract-background_107173-27386.jpg',
          name: 'Premium Collections',
          description: 'Premium Collections Description 1',
        },
        {
          image:
            'https://img.freepik.com/premium-photo/white-marble-texture-with-golden-veins_250469-6441.jpg',
          name: 'Elevate your space',
          description: 'Elevate your space Description 1',
        },
        {
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJc_jNYzgnTHga4TpA1j2xpz5I-pbb7Q_P71CDQC95wJNaB8Hx0QGBfMWEyfjAOannCUE&usqp=CAU',
          name: 'Elevate your space',
          description: 'Elevate your space Description 2',
        },
        {
          image:
            'https://previews.123rf.com/images/aregfly/aregfly1801/aregfly180100056/94268525-%ED%99%A9%EA%B8%88-%ED%98%88%EA%B4%80%EA%B3%BC-%EC%95%84%EB%A6%84-%EB%8B%A4%EC%9A%B4-%ED%9A%8C%EC%83%89-%EA%B3%B1%EC%8A%AC-%EB%8C%80%EB%A6%AC%EC%84%9D%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%B6%94%EC%83%81-%EC%A7%88%EA%B0%90-%EB%B0%8F-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-2d.jpg',
          name: 'Elevate your space',
          description: 'Elevate your space Description 2',
        },
        {
          image:
            'https://us.123rf.com/450wm/creativelittlebird/creativelittlebird2102/creativelittlebird210200010/163192524-abstract-art-beautiful-marble-effect-luxury-and-natural.jpg?ver=6',
          name: 'Elevate your space',
          description: 'Elevate your space Description 3',
        },
        {
          image:
            'https://plus.unsplash.com/premium_photo-1672288157254-4b81e934d8c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlfGVufDB8fDB8fHww',
          name: 'Elevate your space',
          description: 'Elevate your space Description 4',
        },
        {
          image:
            'https://plus.unsplash.com/premium_photo-1675802520884-45ad9a50c2c9?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          name: 'Elevate your space',
          description: 'Elevate your space Description 5',
        },
        {
          image:
            'https://images.unsplash.com/photo-1550053808-52a75a05955d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          name: 'Elevate your space',
          description: 'Elevate your space Description 6',
        },
        {
          image:
            'https://images.unsplash.com/photo-1483638994033-15b73fe7af18?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          name: 'Elevate your space',
          description: 'Elevate your space Description 7',
        },
        {
          image:
            'https://images.unsplash.com/photo-1518715159541-e12050b5dd1e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          name: 'Luxury Marble 6',
          description: 'Luxury Marble Description 6',
        },
      ],
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
  components: {
    ChevronRight,
    Product,
  },
};
</script>

<style scoped>
/* Add or modify styles as needed */
</style>
