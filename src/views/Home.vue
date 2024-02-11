<template>
  <div>
    <Header />
    <CompanyCard />
    <AboutUs />
    <TopProducts />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import CompanyCard from '../components/CompanyCard.vue';
import AboutUs from '../components/AboutUs.vue';
import TopProducts from '../components/TopProducts.vue';
import Footer from '../components/Footer.vue';
export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    Header,
    CompanyCard,
    AboutUs,
    TopProducts,
    Footer,
  },
  methods: {},
};
</script>

<style scoped></style>
