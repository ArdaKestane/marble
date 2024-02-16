<template>
  <div>
    <Header />
    <div class="py-10">
      <TimelineList />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import TimelineList from '../components/TimelineList.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Header,
    TimelineList,
    Footer,
  },
};
</script>
