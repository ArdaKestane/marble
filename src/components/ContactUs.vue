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
        class="w-full bg-blue-500 text-white py-2 px-4 rounded"
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
    };
  },
  methods: {
    async sendEmail() {
      const email = {
        fullName: this.name,
        email: this.email,
        phone: this.phoneNumber,
        subject: this.subject,
        message: this.message,
      };

      console.log(email);
      await EmailServices.sendEmail(email);
    },
  },
};
</script>

<style scoped>
/* Add or modify styles as needed */
</style>
