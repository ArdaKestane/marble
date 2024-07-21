<template>
  <div class="flex items-center justify-center h-screen bg-secondaryLight">
    <div class="bg-secondaryLight p-8 rounded shadow-md w-full sm:w-96">
      <h1 class="text-2xl font-semibold mb-4 text-center text-black">
        Admin Panel
      </h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <input
            v-model="id"
            type="text"
            id="username"
            class="mt-1 p-2 w-full border rounded-md text-gray-600"
            placeholder="Kullanıcı adınızı giriniz"
          />
        </div>
        <div class="mb-4">
          <input
            v-model="password"
            type="password"
            id="password"
            class="mt-1 p-2 w-full border rounded-md text-gray-600"
            placeholder="Şifrenizi giriniz"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white p-2 rounded-md font-bold"
        >
          Giriş Yap
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import LoginService from '../services/LoginServices';
export default {
  data() {
    return {
      id: '',
      password: '',
    };
  },
  methods: {
    async login() {
      LoginService.login({
        id: this.id,
        password: this.password,
      })
        .then((response) => {
          console.log('Login Response:', response);
          const token = response.data;
          localStorage.setItem('token', token);
          console.log('Token:', token);
          this.$router.push('/dashboard-header');
        })
        .catch((error) => {
          console.error('Login Error:', error);
        });
    },
  },
};
</script>
