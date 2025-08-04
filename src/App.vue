<template>
  <div class="h-screen flex flex-col overflow-hidden" :class="theme === 'dark' ? 'bg-gray-950 text-gray-50' : 'bg-white text-black'">
    <div class="flex-1 flex overflow-hidden min-h-0 w-full">
      <div class="flex w-full">
        <div :class="['w-14 flex flex-col py-3 relative', theme === 'dark' ? 'bg-gray-900 border-gray-700 border-r' : 'bg-gray-200 border-gray-300 border-r']">
          <div class="flex items-center justify-center mb-4 relative">
            <div class="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe h-7 w-7 text-blue-500">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
              <span :class="['text-[10px] font-semibold mt-1', theme === 'dark' ? 'text-gray-200' : 'text-gray-800']">GIS</span>
            </div>
          </div>
          <div class="relative">
            <button @click="$router.push('/')" :class="['inline-flex items-center justify-center h-11 w-11 mx-1 mb-2 transition-colors rounded-md', theme === 'dark' ? (currentRoute === '/' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'text-gray-300 hover:text-gray-50 hover:bg-gray-800') : (currentRoute === '/' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-300')]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home h-5 w-5">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </button>
          </div>
          <div class="relative">
            <button @click="$router.push('/map')" :class="['inline-flex items-center justify-center h-11 w-11 mx-1 mb-2 transition-colors rounded-md', theme === 'dark' ? (currentRoute === '/map' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'text-gray-300 hover:text-gray-50 hover:bg-gray-800') : (currentRoute === '/map' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-300')]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map h-5 w-5">
                <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
                <path d="M15 5.764v15"></path>
                <path d="M9 3.236v15"></path>
              </svg>
            </button>
          </div>
          <div class="relative">
            <button @click="$router.push('/registers')" :class="['inline-flex items-center justify-center h-11 w-11 mx-1 mb-2 transition-colors rounded-md', theme === 'dark' ? (currentRoute === '/registers' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'text-gray-300 hover:text-gray-50 hover:bg-gray-800') : (currentRoute === '/registers' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-300')]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database h-5 w-5">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                <path d="M3 12A9 3 0 0 0 21 12"></path>
              </svg>
            </button>
          </div>
          <div class="relative">
            <button @click="$router.push('/calculator')" :class="['inline-flex items-center justify-center h-11 w-11 mx-1 mb-2 transition-colors rounded-md', theme === 'dark' ? (currentRoute === '/calculator' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'text-gray-300 hover:text-gray-50 hover:bg-gray-800') : (currentRoute === '/calculator' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-300')]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calculator h-5 w-5">
                <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                <line x1="8" x2="16" y1="6" y2="6"></line>
                <line x1="16" x2="16" y1="14" y2="18"></line>
                <path d="M16 10h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M8 14h.01"></path>
                <path d="M12 18h.01"></path>
                <path d="M8 18h.01"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="flex-1 min-h-0 w-full">
          <div :class="['h-full flex flex-col', theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50']">
            <div class="flex-1 overflow-auto">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeToggle from './components/ThemeToggle.vue';
import { useRoute } from 'vue-router';

export default {
  components: {
    ThemeToggle,
  },
  data() {
    return {
      theme: 'dark',
    };
  },
  computed: {
    currentRoute() {
      return useRoute().path;
    },
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', this.theme === 'dark');
    },
  },
  mounted() {
    if (localStorage.getItem('theme')) {
      this.theme = localStorage.getItem('theme');
    }
    document.documentElement.classList.toggle('dark', this.theme === 'dark');
  },
  watch: {
    theme(newTheme) {
      localStorage.setItem('theme', newTheme);
    },
  },
};
</script>