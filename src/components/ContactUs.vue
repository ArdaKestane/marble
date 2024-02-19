<template>
  <div
    class="w-full sm: md:w-full lg:w-8/12 xl:w-1/2 2xl:w-1/3 my-5 ml-1 mr-3 pt-2 px-4 text-center w-fit flex flex-col items-center rounded-2xl border border-[#DDDDDD]"
  >
    <div class="w-full p-4 space-y-4">
      <p
        class="w-full text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-4xl text-[#57534F]"
      >
        {{
          selectedLanguage === 'turkish'
            ? 'Bize Ulaşın'
            : selectedLanguage === 'english'
              ? 'Contact Us'
              : selectedLanguage === 'arabic'
                ? 'اتصل بنا'
                : selectedLanguage === 'french'
                  ? 'Contactez-nous'
                  : ''
        }}
      </p>

      <div class="w-full">
        <input
          type="text"
          class="w-full border border-[#DDDDDD] p-2 rounded placeholder:text-gray-600 text-gray-600"
          :placeholder="
            selectedLanguage === 'turkish'
              ? 'Adınızı ve soyadınızı girin'
              : selectedLanguage === 'english'
                ? 'Enter your name and surname'
                : selectedLanguage === 'arabic'
                  ? 'أدخل اسمك الكامل'
                  : selectedLanguage === 'french'
                    ? 'Entrez votre nom et prénom'
                    : ''
          "
          v-model="name"
        />
      </div>

      <div class="w-full">
        <input
          type="email"
          class="w-full border border-[#DDDDDD] p-2 rounded placeholder:text-gray-600 text-gray-600"
          :placeholder="
            selectedLanguage === 'turkish'
              ? 'E-posta adresinizi girin'
              : selectedLanguage === 'english'
                ? 'Enter your email address'
                : selectedLanguage === 'arabic'
                  ? 'أدخل عنوان بريدك الإلكتروني'
                  : selectedLanguage === 'french'
                    ? 'Entrez votre adresse e-mail'
                    : ''
          "
          v-model="email"
        />
      </div>

      <div class="w-full">
        <input
          type="tel"
          class="w-full border border-[#DDDDDD] p-2 rounded placeholder:text-gray-600 text-gray-600"
          :placeholder="
            selectedLanguage === 'turkish'
              ? 'Telefon numaranızı girin (isteğe bağlı)'
              : selectedLanguage === 'english'
                ? 'Enter your phone number (optional)'
                : selectedLanguage === 'arabic'
                  ? 'أدخل رقم هاتفك (اختياري)'
                  : selectedLanguage === 'french'
                    ? 'Entrez votre numéro de téléphone (facultatif)'
                    : ''
          "
          v-model="phoneNumber"
        />
      </div>

      <div class="w-full">
        <input
          type="text"
          class="w-full border border-[#DDDDDD] p-2 rounded placeholder:text-gray-600 text-gray-600"
          :placeholder="
            selectedLanguage === 'turkish'
              ? 'Konu'
              : selectedLanguage === 'english'
                ? 'Subject'
                : selectedLanguage === 'arabic'
                  ? 'موضوع'
                  : selectedLanguage === 'french'
                    ? 'Sujet'
                    : ''
          "
          v-model="subject"
        />
      </div>

      <div class="w-full">
        <textarea
          class="w-full border border-[#DDDDDD] p-2 rounded placeholder:text-gray-600 text-gray-600"
          rows="5"
          :placeholder="
            selectedLanguage === 'turkish'
              ? 'Mesajınızı girin'
              : selectedLanguage === 'english'
                ? 'Enter your message'
                : selectedLanguage === 'arabic'
                  ? 'أدخل رسالتك'
                  : selectedLanguage === 'french'
                    ? 'Entrez votre message'
                    : ''
          "
          v-model="message"
        ></textarea>
      </div>
    </div>
    <div class="p-4 w-4/5 space-y-4">
      <button
        @click="sendEmail"
        class="w-full bg-[#57534F] text-white font-bold py-2 px-4 rounded"
      >
        {{
          selectedLanguage === 'turkish'
            ? 'Gönder'
            : selectedLanguage === 'english'
              ? 'Send'
              : selectedLanguage === 'arabic'
                ? 'إرسال'
                : selectedLanguage === 'french'
                  ? 'Envoyer'
                  : ''
        }}
      </button>
    </div>
    <div
      v-if="successMessage"
      class="top-center flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
      role="alert"
    >
      <svg
        class="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
        />
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">{{ successMessage }}</span>
      </div>
    </div>

    <div
      v-if="alertMessage"
      class="top-center flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <svg
        class="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
        />
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">{{ alertMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import EmailServices from '@/services/EmailServices';
export default {
  data() {
    return {
      selectedLanguage: localStorage.getItem('selectedLanguage'),
      name: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: '',

      successMessage: '',
      alertMessage: '',
    };
  },
  methods: {
    async sendEmail() {
      if (!this.name || !this.email || !this.subject || !this.message) {
        this.setAlert('Lütfen iletişim formundaki tüm alanları doldurunuz');
        return;
      }

      const email = {
        fullName: this.name,
        email: this.email,
        phone: this.phoneNumber,
        subject: this.subject,
        message: this.message,
      };

      try {
        await EmailServices.sendEmail(email);
        this.setSuccess('Mesajınız başarıyla gönderildi');
        this.name = '';
        this.email = '';
        this.phoneNumber = '';
        this.subject = '';
        this.message = '';
      } catch (error) {
        console.error(error);
      }
    },

    setSuccess(message) {
      this.successMessage = message;
      setTimeout(() => {
        this.successMessage = '';
      }, 5000);
    },
    setAlert(message) {
      this.alertMessage = message;

      setTimeout(() => {
        this.alertMessage = '';
      }, 5000);
    },
  },
};
</script>

<style scoped>
.top-center {
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}
</style>
