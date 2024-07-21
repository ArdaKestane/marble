<template>
  <div>
    <Header />
    <div class="pt-4 sm:pt-16 sm:pb-10">
      <ProductList />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import ProductList from '../components/ProductList.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Header,
    ProductList,
    Footer,
  },
};
</script>
