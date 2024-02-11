import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueGoogleMaps from '@fawmi/vue-google-maps';
import './assets/main.css';
import './index.css';

const app = createApp(App);
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBl4gpsD5MDxro_avBav309NMoctjzejxs',
  },
});
app.use(router);

app.mount('#app');
