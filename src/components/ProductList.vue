<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4 mx-10 sm:mx-10 md:mx-20 lg:mx-30 xl:mx-40 my-10 overflow-hidden"
  >
    <router-link
      v-for="(product, index) in productArray"
      :to="`/productDetail/${index}`"
      :key="index"
      class="relative overflow-hidden group rounded-md sm:rounded-xl md:rounded-md lg:rounded-md xl:rounded-md"
      @click="scrollToTop"
    >
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-64 object-cover xl:w-120 xl:h-64 lg:w-120 lg:h-64 md:w-120 md:h-64 sm:w-120 sm:h-64 sm:block lg:transition-transform lg:transform lg:origin-center lg:hover:scale-105 xl:transition-transform xl:transform xl:origin-center xl:hover:scale-105"
      />
      <div
        class="absolute bottom-10 left-10 bg-neutral-600 bg-opacity-75 px-5 py-2 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <div class="text-white text-center">
          <h1 class="text-md md:text-md lg:text-lg xl:text-xl font-semibold">
            {{ product.name }}
          </h1>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productArray: [
        {
          image:
            'https://img.freepik.com/premium-photo/white-marble-with-gold-grey-veins-abstract-background_107173-27386.jpg',
          name: 'Carrara',
          description:
            'Carrara marble is renowned for its pure white color with subtle grey veins. It exudes luxury and elegance, making it a perfect choice for premium collections. Elevate your space with the timeless beauty of Carrara marble.',
          interiorDesignLevel: 7,
          exteriorDesignLevel: 4,
          flooringLevel: 9,
          wallCladdingLevel: 2,
          galleryArray: [
            'https://img.freepik.com/premium-photo/white-marble-with-gold-grey-veins-abstract-background_107173-27386.jpg',
            'https://img.freepik.com/premium-photo/white-marble-texture-with-golden-veins_250469-6441.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJc_jNYzgnTHga4TpA1j2xpz5I-pbb7Q_P71CDQC95wJNaB8Hx0QGBfMWEyfjAOannCUE&usqp=CAU',
            'https://previews.123rf.com/images/aregfly/aregfly1801/aregfly180100056/94268525-%ED%99%A9%EA%B8%88-%ED%98%88%EA%B4%80%EA%B3%BC-%EC%95%84%EB%A6%84-%EB%8B%A4%EC%9A%B4-%ED%9A%8C%EC%83%89-%EA%B3%B1%EC%8A%AC-%EB%8C%80%EB%A6%AC%EC%84%9D%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%B6%94%EC%83%81-%EC%A7%88%EA%B0%90-%EB%B0%8F-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-2d.jpg',
            'https://us.123rf.com/450wm/creativelittlebird/creativelittlebird2102/creativelittlebird210200010/163192524-abstract-art-beautiful-marble-effect-luxury-and-natural.jpg?ver=6',
            'https://plus.unsplash.com/premium_photo-1672288157254-4b81e934d8c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1675802520884-45ad9a50c2c9?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1550053808-52a75a05955d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1483638994033-15b73fe7af18?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1518715159541-e12050b5dd1e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          ],
        },

        {
          image:
            'https://img.freepik.com/premium-photo/white-marble-texture-with-golden-veins_250469-6441.jpg',
          name: 'Calacatta',
          description:
            'Calacatta marble is characterized by its white background and dramatic, bold veins that can range from grey to gold. Elevate your space with the timeless beauty of Calacatta marble, adding a touch of sophistication to any environment.',
          interiorDesignLevel: 3,
          exteriorDesignLevel: 2,
          flooringLevel: 5,
          wallCladdingLevel: 6,
          galleryArray: [
            'https://img.freepik.com/premium-photo/white-marble-with-gold-grey-veins-abstract-background_107173-27386.jpg',
            'https://img.freepik.com/premium-photo/white-marble-texture-with-golden-veins_250469-6441.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJc_jNYzgnTHga4TpA1j2xpz5I-pbb7Q_P71CDQC95wJNaB8Hx0QGBfMWEyfjAOannCUE&usqp=CAU',
            'https://previews.123rf.com/images/aregfly/aregfly1801/aregfly180100056/94268525-%ED%99%A9%EA%B8%88-%ED%98%88%EA%B4%80%EA%B3%BC-%EC%95%84%EB%A6%84-%EB%8B%A4%EC%9A%B4-%ED%9A%8C%EC%83%89-%EA%B3%B1%EC%8A%AC-%EB%8C%80%EB%A6%AC%EC%84%9D%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%B6%94%EC%83%81-%EC%A7%88%EA%B0%90-%EB%B0%8F-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-2d.jpg',
            'https://us.123rf.com/450wm/creativelittlebird/creativelittlebird2102/creativelittlebird210200010/163192524-abstract-art-beautiful-marble-effect-luxury-and-natural.jpg?ver=6',
            'https://plus.unsplash.com/premium_photo-1672288157254-4b81e934d8c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1675802520884-45ad9a50c2c9?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1550053808-52a75a05955d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1483638994033-15b73fe7af18?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1518715159541-e12050b5dd1e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          ],
        },
        {
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJc_jNYzgnTHga4TpA1j2xpz5I-pbb7Q_P71CDQC95wJNaB8Hx0QGBfMWEyfjAOannCUE&usqp=CAU',
          name: 'Statuario',
          description:
            'Statuario marble is known for its striking white background and distinctive grey veins. It creates a sense of luxury and is often used to elevate the aesthetic of various spaces. Discover the timeless beauty of Statuario marble and transform your surroundings.',
          interiorDesignLevel: 5,
          exteriorDesignLevel: 1,
          flooringLevel: 6,
          wallCladdingLevel: 3,
          galleryArray: [
            'https://img.freepik.com/premium-photo/white-marble-with-gold-grey-veins-abstract-background_107173-27386.jpg',
            'https://img.freepik.com/premium-photo/white-marble-texture-with-golden-veins_250469-6441.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJc_jNYzgnTHga4TpA1j2xpz5I-pbb7Q_P71CDQC95wJNaB8Hx0QGBfMWEyfjAOannCUE&usqp=CAU',
            'https://previews.123rf.com/images/aregfly/aregfly1801/aregfly180100056/94268525-%ED%99%A9%EA%B8%88-%ED%98%88%EA%B4%80%EA%B3%BC-%EC%95%84%EB%A6%84-%EB%8B%A4%EC%9A%B4-%ED%9A%8C%EC%83%89-%EA%B3%B1%EC%8A%AC-%EB%8C%80%EB%A6%AC%EC%84%9D%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%B6%94%EC%83%81-%EC%A7%88%EA%B0%90-%EB%B0%8F-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-2d.jpg',
            'https://us.123rf.com/450wm/creativelittlebird/creativelittlebird2102/creativelittlebird210200010/163192524-abstract-art-beautiful-marble-effect-luxury-and-natural.jpg?ver=6',
            'https://plus.unsplash.com/premium_photo-1672288157254-4b81e934d8c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1675802520884-45ad9a50c2c9?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1550053808-52a75a05955d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1483638994033-15b73fe7af18?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1518715159541-e12050b5dd1e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          ],
        },
        {
          image:
            'https://previews.123rf.com/images/aregfly/aregfly1801/aregfly180100056/94268525-%ED%99%A9%EA%B8%88-%ED%98%88%EA%B4%80%EA%B3%BC-%EC%95%84%EB%A6%84-%EB%8B%A4%EC%9A%B4-%ED%9A%8C%EC%83%89-%EA%B3%B1%EC%8A%AC-%EB%8C%80%EB%A6%AC%EC%84%9D%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%B6%94%EC%83%81-%EC%A7%88%EA%B0%90-%EB%B0%8F-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-2d.jpg',
          name: 'Emperador',
          description:
            'Emperador marble features a rich brown color with white and gold veins, creating a sense of opulence and warmth. Elevate your space with the luxurious and timeless beauty of Emperador marble, adding character and charm to any room.',
          interiorDesignLevel: 7,
          exteriorDesignLevel: 4,
          flooringLevel: 9,
          wallCladdingLevel: 2,
          galleryArray: [
            'https://img.freepik.com/premium-photo/white-marble-with-gold-grey-veins-abstract-background_107173-27386.jpg',
            'https://img.freepik.com/premium-photo/white-marble-texture-with-golden-veins_250469-6441.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJc_jNYzgnTHga4TpA1j2xpz5I-pbb7Q_P71CDQC95wJNaB8Hx0QGBfMWEyfjAOannCUE&usqp=CAU',
            'https://previews.123rf.com/images/aregfly/aregfly1801/aregfly180100056/94268525-%ED%99%A9%EA%B8%88-%ED%98%88%EA%B4%80%EA%B3%BC-%EC%95%84%EB%A6%84-%EB%8B%A4%EC%9A%B4-%ED%9A%8C%EC%83%89-%EA%B3%B1%EC%8A%AC-%EB%8C%80%EB%A6%AC%EC%84%9D%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%B6%94%EC%83%81-%EC%A7%88%EA%B0%90-%EB%B0%8F-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-2d.jpg',
            'https://us.123rf.com/450wm/creativelittlebird/creativelittlebird2102/creativelittlebird210200010/163192524-abstract-art-beautiful-marble-effect-luxury-and-natural.jpg?ver=6',
            'https://plus.unsplash.com/premium_photo-1672288157254-4b81e934d8c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1675802520884-45ad9a50c2c9?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1550053808-52a75a05955d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1483638994033-15b73fe7af18?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1518715159541-e12050b5dd1e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          ],
        },
        {
          image:
            'https://us.123rf.com/450wm/creativelittlebird/creativelittlebird2102/creativelittlebird210200010/163192524-abstract-art-beautiful-marble-effect-luxury-and-natural.jpg?ver=6',
          name: 'Crema Marfil',
          description:
            'Crema Marfil marble is characterized by its warm beige color and subtle veining. Elevate your space with the soft and inviting beauty of Crema Marfil marble, creating a sense of comfort and sophistication.',
          interiorDesignLevel: 8,
          exteriorDesignLevel: 5,
          flooringLevel: 1,
          wallCladdingLevel: 6,
          galleryArray: [
            'https://img.freepik.com/premium-photo/white-marble-with-gold-grey-veins-abstract-background_107173-27386.jpg',
            'https://img.freepik.com/premium-photo/white-marble-texture-with-golden-veins_250469-6441.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJc_jNYzgnTHga4TpA1j2xpz5I-pbb7Q_P71CDQC95wJNaB8Hx0QGBfMWEyfjAOannCUE&usqp=CAU',
            'https://previews.123rf.com/images/aregfly/aregfly1801/aregfly180100056/94268525-%ED%99%A9%EA%B8%88-%ED%98%88%EA%B4%80%EA%B3%BC-%EC%95%84%EB%A6%84-%EB%8B%A4%EC%9A%B4-%ED%9A%8C%EC%83%89-%EA%B3%B1%EC%8A%AC-%EB%8C%80%EB%A6%AC%EC%84%9D%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%B6%94%EC%83%81-%EC%A7%88%EA%B0%90-%EB%B0%8F-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-2d.jpg',
            'https://us.123rf.com/450wm/creativelittlebird/creativelittlebird2102/creativelittlebird210200010/163192524-abstract-art-beautiful-marble-effect-luxury-and-natural.jpg?ver=6',
            'https://plus.unsplash.com/premium_photo-1672288157254-4b81e934d8c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1675802520884-45ad9a50c2c9?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1550053808-52a75a05955d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1483638994033-15b73fe7af18?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1518715159541-e12050b5dd1e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          ],
        },
        {
          image:
            'https://plus.unsplash.com/premium_photo-1672288157254-4b81e934d8c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlfGVufDB8fDB8fHww',
          name: 'Bianco Venatino',
          description:
            'Bianco Venatino marble features a white background with subtle grey veins, creating a classic and timeless look. Elevate your space with the pure and elegant beauty of Bianco Venatino marble, adding a touch of sophistication to any setting.',
          interiorDesignLevel: 10,
          exteriorDesignLevel: 9,
          flooringLevel: 9,
          wallCladdingLevel: 2,
          galleryArray: [
            'https://img.freepik.com/premium-photo/white-marble-with-gold-grey-veins-abstract-background_107173-27386.jpg',
            'https://img.freepik.com/premium-photo/white-marble-texture-with-golden-veins_250469-6441.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJc_jNYzgnTHga4TpA1j2xpz5I-pbb7Q_P71CDQC95wJNaB8Hx0QGBfMWEyfjAOannCUE&usqp=CAU',
            'https://previews.123rf.com/images/aregfly/aregfly1801/aregfly180100056/94268525-%ED%99%A9%EA%B8%88-%ED%98%88%EA%B4%80%EA%B3%BC-%EC%95%84%EB%A6%84-%EB%8B%A4%EC%9A%B4-%ED%9A%8C%EC%83%89-%EA%B3%B1%EC%8A%AC-%EB%8C%80%EB%A6%AC%EC%84%9D%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%B6%94%EC%83%81-%EC%A7%88%EA%B0%90-%EB%B0%8F-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-2d.jpg',
            'https://us.123rf.com/450wm/creativelittlebird/creativelittlebird2102/creativelittlebird210200010/163192524-abstract-art-beautiful-marble-effect-luxury-and-natural.jpg?ver=6',
            'https://plus.unsplash.com/premium_photo-1672288157254-4b81e934d8c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1675802520884-45ad9a50c2c9?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1550053808-52a75a05955d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1483638994033-15b73fe7af18?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1518715159541-e12050b5dd1e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          ],
        },
        {
          image:
            'https://plus.unsplash.com/premium_photo-1675802520884-45ad9a50c2c9?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          name: 'Arabescato',
          description:
            'Arabescato marble is characterized by its white background with dark grey veins, creating a bold and dramatic look. Elevate your space with the captivating beauty of Arabescato marble, making a statement in any environment.',
          interiorDesignLevel: 4,
          exteriorDesignLevel: 4,
          flooringLevel: 3,
          wallCladdingLevel: 5,
          galleryArray: [
            'https://img.freepik.com/premium-photo/white-marble-with-gold-grey-veins-abstract-background_107173-27386.jpg',
            'https://img.freepik.com/premium-photo/white-marble-texture-with-golden-veins_250469-6441.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJc_jNYzgnTHga4TpA1j2xpz5I-pbb7Q_P71CDQC95wJNaB8Hx0QGBfMWEyfjAOannCUE&usqp=CAU',
            'https://previews.123rf.com/images/aregfly/aregfly1801/aregfly180100056/94268525-%ED%99%A9%EA%B8%88-%ED%98%88%EA%B4%80%EA%B3%BC-%EC%95%84%EB%A6%84-%EB%8B%A4%EC%9A%B4-%ED%9A%8C%EC%83%89-%EA%B3%B1%EC%8A%AC-%EB%8C%80%EB%A6%AC%EC%84%9D%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%B6%94%EC%83%81-%EC%A7%88%EA%B0%90-%EB%B0%8F-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-2d.jpg',
            'https://us.123rf.com/450wm/creativelittlebird/creativelittlebird2102/creativelittlebird210200010/163192524-abstract-art-beautiful-marble-effect-luxury-and-natural.jpg?ver=6',
            'https://plus.unsplash.com/premium_photo-1672288157254-4b81e934d8c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1675802520884-45ad9a50c2c9?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1550053808-52a75a05955d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1483638994033-15b73fe7af18?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1518715159541-e12050b5dd1e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          ],
        },
        {
          image:
            'https://images.unsplash.com/photo-1550053808-52a75a05955d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          name: 'Portoro',
          description:
            'Portoro marble features a rich black background with striking gold veins, creating a luxurious and opulent appearance. Elevate your space with the timeless and glamorous beauty of Portoro marble, adding sophistication to any setting.',
          interiorDesignLevel: 7,
          exteriorDesignLevel: 4,
          flooringLevel: 9,
          wallCladdingLevel: 2,
          galleryArray: [
            'https://img.freepik.com/premium-photo/white-marble-with-gold-grey-veins-abstract-background_107173-27386.jpg',
            'https://img.freepik.com/premium-photo/white-marble-texture-with-golden-veins_250469-6441.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJc_jNYzgnTHga4TpA1j2xpz5I-pbb7Q_P71CDQC95wJNaB8Hx0QGBfMWEyfjAOannCUE&usqp=CAU',
            'https://previews.123rf.com/images/aregfly/aregfly1801/aregfly180100056/94268525-%ED%99%A9%EA%B8%88-%ED%98%88%EA%B4%80%EA%B3%BC-%EC%95%84%EB%A6%84-%EB%8B%A4%EC%9A%B4-%ED%9A%8C%EC%83%89-%EA%B3%B1%EC%8A%AC-%EB%8C%80%EB%A6%AC%EC%84%9D%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%B6%94%EC%83%81-%EC%A7%88%EA%B0%90-%EB%B0%8F-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-2d.jpg',
            'https://us.123rf.com/450wm/creativelittlebird/creativelittlebird2102/creativelittlebird210200010/163192524-abstract-art-beautiful-marble-effect-luxury-and-natural.jpg?ver=6',
            'https://plus.unsplash.com/premium_photo-1672288157254-4b81e934d8c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1675802520884-45ad9a50c2c9?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1550053808-52a75a05955d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1483638994033-15b73fe7af18?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1518715159541-e12050b5dd1e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          ],
        },
        {
          image:
            'https://images.unsplash.com/photo-1483638994033-15b73fe7af18?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          name: 'Nero Marquina',
          description:
            'Nero Marquina marble is known for its deep black color with striking white veins, creating a bold and sophisticated appearance. Elevate your space with the dramatic and timeless beauty of Nero Marquina marble, making a statement in any room.',

          interiorDesignLevel: 2,
          exteriorDesignLevel: 5,
          flooringLevel: 2,
          wallCladdingLevel: 6,
          galleryArray: [
            'https://img.freepik.com/premium-photo/white-marble-with-gold-grey-veins-abstract-background_107173-27386.jpg',
            'https://img.freepik.com/premium-photo/white-marble-texture-with-golden-veins_250469-6441.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJc_jNYzgnTHga4TpA1j2xpz5I-pbb7Q_P71CDQC95wJNaB8Hx0QGBfMWEyfjAOannCUE&usqp=CAU',
            'https://previews.123rf.com/images/aregfly/aregfly1801/aregfly180100056/94268525-%ED%99%A9%EA%B8%88-%ED%98%88%EA%B4%80%EA%B3%BC-%EC%95%84%EB%A6%84-%EB%8B%A4%EC%9A%B4-%ED%9A%8C%EC%83%89-%EA%B3%B1%EC%8A%AC-%EB%8C%80%EB%A6%AC%EC%84%9D%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%B6%94%EC%83%81-%EC%A7%88%EA%B0%90-%EB%B0%8F-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-2d.jpg',
            'https://us.123rf.com/450wm/creativelittlebird/creativelittlebird2102/creativelittlebird210200010/163192524-abstract-art-beautiful-marble-effect-luxury-and-natural.jpg?ver=6',
            'https://plus.unsplash.com/premium_photo-1672288157254-4b81e934d8c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1675802520884-45ad9a50c2c9?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1550053808-52a75a05955d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1483638994033-15b73fe7af18?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1518715159541-e12050b5dd1e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          ],
        },
        {
          image:
            'https://images.unsplash.com/photo-1518715159541-e12050b5dd1e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          name: 'Rojo Alicante',
          description:
            'Rojo Alicante marble features a vibrant red background with intricate white veins, creating a luxurious and eye-catching appearance. Elevate your space with the bold and captivating beauty of Rojo Alicante marble, adding a touch of drama and sophistication.',
          interiorDesignLevel: 7,
          exteriorDesignLevel: 4,
          flooringLevel: 9,
          wallCladdingLevel: 2,
          galleryArray: [
            'https://img.freepik.com/premium-photo/white-marble-with-gold-grey-veins-abstract-background_107173-27386.jpg',
            'https://img.freepik.com/premium-photo/white-marble-texture-with-golden-veins_250469-6441.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJc_jNYzgnTHga4TpA1j2xpz5I-pbb7Q_P71CDQC95wJNaB8Hx0QGBfMWEyfjAOannCUE&usqp=CAU',
            'https://previews.123rf.com/images/aregfly/aregfly1801/aregfly180100056/94268525-%ED%99%A9%EA%B8%88-%ED%98%88%EA%B4%80%EA%B3%BC-%EC%95%84%EB%A6%84-%EB%8B%A4%EC%9A%B4-%ED%9A%8C%EC%83%89-%EA%B3%B1%EC%8A%AC-%EB%8C%80%EB%A6%AC%EC%84%9D%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%B6%94%EC%83%81-%EC%A7%88%EA%B0%90-%EB%B0%8F-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-2d.jpg',
            'https://us.123rf.com/450wm/creativelittlebird/creativelittlebird2102/creativelittlebird210200010/163192524-abstract-art-beautiful-marble-effect-luxury-and-natural.jpg?ver=6',
            'https://plus.unsplash.com/premium_photo-1672288157254-4b81e934d8c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1675802520884-45ad9a50c2c9?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1550053808-52a75a05955d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1483638994033-15b73fe7af18?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1518715159541-e12050b5dd1e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          ],
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
};
</script>

<style scoped></style>
