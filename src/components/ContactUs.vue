<template>
  <div
    class="my-5 ml-1 mr-3 p-4 text-center w-fit flex flex-col items-center bg-gray-100 rounded-lg drop-shadow-lg"
  >
    <div class="p-4 space-y-4">
      <p class="text-3xl text-black">
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
        <label>
          {{ selectedLanguage === 'turkish'
            ? 'Adınızı ve soyadınızı girin'
            : selectedLanguage === 'english'
              ? 'Enter your name and surname'
              : selectedLanguage === 'arabic'
                ? 'أدخل اسمك الكامل'
                : selectedLanguage === 'french'
                  ? 'Entrez votre nom et prénom'
                  : '' }}
          <input
            type="text"
            class="w-full border border-gray-300 p-2 rounded"
            :placeholder="selectedLanguage === 'turkish'
              ? 'Adınızı ve soyadınızı girin'
              : selectedLanguage === 'english'
                ? 'Enter your name and surname'
                : selectedLanguage === 'arabic'
                  ? 'أدخل اسمك الكامل'
                  : selectedLanguage === 'french'
                    ? 'Entrez votre nom et prénom'
                    : ''"
            v-model="name"
          />
        </label>
      </div>


      <div class="w-full">
      <label>
        {{
          selectedLanguage === 'turkish'
            ? 'E-posta adresinizi girin'
            : selectedLanguage === 'english'
              ? 'Enter your email address'
              : selectedLanguage === 'arabic'
                ? 'أدخل عنوان بريدك الإلكتروني'
                : selectedLanguage === 'french'
                  ? 'Entrez votre adresse e-mail'
                  : ''
        }}
        <input
          type="email"
          class="w-full border border-gray-300 p-2 rounded"
          :placeholder="selectedLanguage === 'turkish' ? 'E-posta adresinizi girin' : selectedLanguage === 'english' ? 'Enter your email address' : selectedLanguage === 'arabic' ? 'أدخل عنوان بريدك الإلكتروني' : selectedLanguage === 'french' ? 'Entrez votre adresse e-mail' : ''"
          v-model="email"
        />
      </label>
    </div>

    <div class="w-full">
      <label>
        {{
          selectedLanguage === 'turkish'
            ? 'Telefon numaranızı girin (isteğe bağlı)'
            : selectedLanguage === 'english'
              ? 'Enter your phone number (optional)'
              : selectedLanguage === 'arabic'
                ? 'أدخل رقم هاتفك (اختياري)'
                : selectedLanguage === 'french'
                  ? 'Entrez votre numéro de téléphone (facultatif)'
                  : ''
        }}
        <input
          type="tel"
          class="w-full border border-gray-300 p-2 rounded"
          :placeholder="selectedLanguage === 'turkish' ? 'Telefon numaranızı girin (isteğe bağlı)' : selectedLanguage === 'english' ? 'Enter your phone number (optional)' : selectedLanguage === 'arabic' ? 'أدخل رقم هاتفك (اختياري)' : selectedLanguage === 'french' ? 'Entrez votre numéro de téléphone (facultatif)' : ''"
          v-model="phoneNumber"
        />
      </label>
    </div>

    <div class="w-full">
      <label>
        {{
          selectedLanguage === 'turkish'
            ? 'Mesajınızı girin'
            : selectedLanguage === 'english'
              ? 'Enter your message'
              : selectedLanguage === 'arabic'
                ? 'أدخل رسالتك'
                : selectedLanguage === 'french'
                  ? 'Entrez votre message'
                  : ''
        }}
        <textarea
          class="w-full border border-gray-300 p-2 rounded"
          rows="5"
          :placeholder="selectedLanguage === 'turkish' ? 'Mesajınızı girin' : selectedLanguage === 'english' ? 'Enter your message' : selectedLanguage === 'arabic' ? 'أدخل رسالتك' : selectedLanguage === 'french' ? 'Entrez votre message' : ''"
          v-model="message"
        ></textarea>
      </label>
    </div>

    </div>
    <div class="p-4 w-4/5 space-y-4">
      <button class="w-full bg-blue-500 text-white py-2 px-4 rounded">
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
export default {
  data() {
    return {
      selectedLanguage: localStorage.getItem('selectedLanguage'),
    };
  },
};
</script>

<style scoped>
/* Add or modify styles as needed */
</style>
