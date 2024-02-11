<template>
  <div>
    <Header />
    <div class="bg-stone-400 py-10">
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
