<template>
  <nav class="absolute left-0 flex h-full">
    <div
      class="flex h-screen bg-white border-r border-gray-300 rounded-3xl shadow-md flex flex-col items-center p-4"
    >
      <nav>
        <ul
          class="flex flex-col items-center justify-center text-center space-y-4"
        >
          <li class="mb-2">
            <router-link
              to="/dashboard-header"
              class="flex flex-col items-center p-3 rounded transition duration-300 text-gray-600"
            >
              <Handshake :size="40" fillColor="#57534F" />
              <p
                class="font-semibold"
                :class="{
                  'text-fifth font-bold': isRouteActive('/dashboard-header'),
                }"
              >
                Header
              </p>
            </router-link>
          </li>
          <li class="mb-2">
            <router-link
              to="/dashboard-home"
              class="flex flex-col items-center p-3 rounded transition duration-300 text-gray-600"
            >
              <ChatQuestionOutline :size="40" fillColor="#57534F" />
              <p
                class="font-semibold"
                :class="{
                  'text-fifth font-bold': isRouteActive('/dashboard-home'),
                }"
              >
                Carousel
              </p>
            </router-link>
          </li>
          <li class="mb-2">
            <router-link
              to="/dashboard-about-us"
              class="flex flex-col items-center p-3 rounded transition duration-300 text-gray-600"
            >
              <AccountMultiple :size="40" fillColor="#57534F" />
              <p
                class="font-semibold"
                :class="{
                  'text-fifth font-bold': isRouteActive('/dashboard-about-us'),
                }"
              >
                About Us
              </p>
            </router-link>
          </li>

          <li class="mb-2">
            <router-link
              to="/dashboard-active-bar"
              class="flex flex-col items-center p-3 rounded transition duration-300 text-gray-600"
            >
              <AlignVerticalDistribute :size="40" fillColor="#57534F" />
              <p
                class="font-semibold"
                :class="{
                  'text-fifth font-bold': isRouteActive(
                    '/dashboard-active-bar'
                  ),
                }"
              >
                Active Bar
              </p>
            </router-link>
          </li>
          <li class="mb-2">
            <router-link
              to="/dashboard-top-products"
              class="flex flex-col items-center p-3 rounded transition duration-300 text-gray-600"
            >
              <FileDocument :size="40" fillColor="#57534F" />
              <p
                class="font-semibold"
                :class="{
                  'text-fifth font-bold': isRouteActive(
                    '/dashboard-top-products'
                  ),
                }"
              >
                Top Products
              </p>
            </router-link>
          </li>
          <li class="mb-2">
            <router-link
              to="/dashboard-products"
              class="flex flex-col items-center p-3 rounded transition duration-300 text-gray-600"
            >
              <Ticket :size="40" fillColor="#57534F" />
              <p
                class="font-semibold"
                :class="{
                  'text-fifth font-bold': isRouteActive('/dashboard-products'),
                }"
              >
                Products
              </p>
            </router-link>
          </li>

          <li class="mb-2">
            <router-link
              to="/dashboard-timeline"
              class="flex flex-col items-center p-3 rounded transition duration-300 text-gray-600"
            >
              <ClockTimeFive :size="40" fillColor="#57534F" />
              <p
                class="font-semibold"
                :class="{
                  'text-fifth font-bold': isRouteActive('/dashboard-timeline'),
                }"
              >
                Timeline
              </p>
            </router-link>
          </li>

          <li class="mb-2">
            <router-link
              to="/dashboard-footer"
              class="flex flex-col items-center p-3 rounded transition duration-300 text-gray-600"
            >
              <AccountGroup :size="40" fillColor="#57534F" />
              <p
                class="font-semibold"
                :class="{
                  'text-fifth font-bold': isRouteActive('/dashboard-footer'),
                }"
              >
                Footer
              </p>
            </router-link>
          </li>
          <li class="mb-2">
            <button
              class="flex flex-col items-center p-3 rounded transition duration-300 text-gray-600"
              @click="logout"
            >
              <LogoutVariant :size="40" fillColor="red" />
              <p class="font-bold text-red-500">Çıkış Yap</p>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </nav>
</template>

<script>
import Handshake from 'vue-material-design-icons/Handshake.vue';
import ChatQuestionOutline from 'vue-material-design-icons/ChatQuestionOutline.vue';
import FileDocument from 'vue-material-design-icons/FileDocument.vue';
import Ticket from 'vue-material-design-icons/Ticket.vue';
import AccountMultiple from 'vue-material-design-icons/AccountMultiple.vue';
import AccountGroup from 'vue-material-design-icons/AccountGroup.vue';
import LogoutVariant from 'vue-material-design-icons/LogoutVariant.vue';
import ClockTimeFive from 'vue-material-design-icons/ClockTimeFive.vue';
import AlignVerticalDistribute from 'vue-material-design-icons/AlignVerticalDistribute.vue';

export default {
  name: 'NavigationDrawer',
  components: {
    Handshake,
    ChatQuestionOutline,
    FileDocument,
    Ticket,
    AccountMultiple,
    AccountGroup,
    LogoutVariant,
    ClockTimeFive,
    AlignVerticalDistribute,
  },
  methods: {
    isRouteActive(route) {
      return this.$route.path === route;
    },
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
  },
};
</script>
