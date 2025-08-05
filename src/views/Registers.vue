<template>
  <div class="h-screen flex flex-col overflow-hidden" :class="theme === 'dark' ? 'bg-gray-950 text-gray-50' : 'bg-white text-black'">
    <div class="flex-1 flex overflow-hidden min-h-0 w-full">
      <div class="flex w-full">
        <div class="flex-1 min-h-0 w-full">
          <div :class="['h-full flex flex-col', theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50']">
            <div :class="['h-12 flex items-center justify-between pl-4 pr-4', theme === 'dark' ? 'bg-gray-900 border-gray-700 border-b' : 'bg-gray-200 border-gray-300 border-b']">
              <div class="flex items-center gap-6">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database h-5 w-5 mr-2">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                  </svg>
                  <div>
                    <h1 :class="['text-lg font-semibold', theme === 'dark' ? 'text-gray-50' : 'text-gray-900']">Всі реєстри</h1>
                  </div>
                </div>
                <div class="flex items-center gap-1">
                  <button :class="['inline-flex items-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md h-8 px-3 text-sm transition-colors', theme === 'dark' ? 'hover:bg-gray-800 hover:text-gray-100' : 'hover:bg-gray-300 hover:text-gray-900']">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download h-4 w-4 mr-2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" x2="12" y1="15" y2="3"></line>
                    </svg>Експорт
                  </button>
                  <button :class="['inline-flex items-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md h-8 px-3 text-sm transition-colors', theme === 'dark' ? 'hover:bg-gray-800 hover:text-gray-100' : 'hover:bg-gray-300 hover:text-gray-900']">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload h-4 w-4 mr-2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" x2="12" y1="3" y2="15"></line>
                    </svg>Імпорт
                  </button>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <theme-toggle @toggle="toggleTheme" :theme="theme" />
                <button :class="['inline-flex items-center justify-center h-8 w-8 rounded-full transition-colors', theme === 'dark' ? 'hover:bg-gray-800 hover:text-gray-100' : 'hover:bg-gray-300 hover:text-gray-900']">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings h-4 w-4">
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
                <button :class="['inline-flex items-center justify-center h-8 w-8 rounded-full transition-colors', theme === 'dark' ? 'hover:bg-gray-800 hover:text-gray-100' : 'hover:bg-gray-300 hover:text-gray-900']">
                  <div :class="['w-6 h-6 rounded-full flex items-center justify-center', theme === 'dark' ? 'bg-gray-700' : 'bg-gray-400']">
                    <span :class="['text-sm', theme === 'dark' ? 'text-gray-200' : 'text-gray-300']">П</span>
                  </div>
                </button>
              </div>
            </div>
            <div class="flex-1 overflow-auto p-4">
              <div class="mb-4 space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-3">
                  <div class="relative max-w-md w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                    <input v-model="searchQuery" @input="filterRegistries" :class="['flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10', theme === 'dark' ? 'bg-gray-900 border-gray-700 text-gray-100 placeholder:text-gray-400' : 'bg-white border-gray-300 placeholder:text-muted-foreground']" placeholder="Пошук реєстрів...">
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="flex flex-wrap gap-2">
                      <button @click="setFilter('Всі')" :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-3 rounded-md', selectedFilter === 'Всі' ? (theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white') : (theme === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-100' : 'text-gray-600 hover:bg-gray-300 hover:text-gray-900')]">Всі</button>
                      <button @click="setFilter('Інфраструктура')" :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-3 rounded-md', selectedFilter === 'Інфраструктура' ? (theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white') : (theme === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-100' : 'text-gray-600 hover:bg-gray-300 hover:text-gray-900')]">Інфраструктура</button>
                      <button @click="setFilter('Логістика')" :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-3 rounded-md', selectedFilter === 'Логістика' ? (theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white') : (theme === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-100' : 'text-gray-600 hover:bg-gray-300 hover:text-gray-900')]">Логістика</button>
                      <button @click="setFilter('Управління')" :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-3 rounded-md', selectedFilter === 'Управління' ? (theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white') : (theme === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-100' : 'text-gray-600 hover:bg-gray-300 hover:text-gray-900')]">Управління</button>
                      <button @click="setFilter('Безпека')" :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-3 rounded-md', selectedFilter === 'Безпека' ? (theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white') : (theme === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-100' : 'text-gray-600 hover:bg-gray-300 hover:text-gray-900')]">Безпека</button>
                      <button @click="setFilter('Моніторинг')" :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-3 rounded-md', selectedFilter === 'Моніторинг' ? (theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white') : (theme === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-100' : 'text-gray-600 hover:bg-gray-300 hover:text-gray-900')]">Моніторинг</button>
                      <button @click="setFilter('Технічне')" :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-3 rounded-md', selectedFilter === 'Технічне' ? (theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white') : (theme === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-100' : 'text-gray-600 hover:bg-gray-300 hover:text-gray-900')]">Технічне</button>
                    </div>
                    <div :class="['flex rounded-md border', theme === 'dark' ? 'border-gray-700' : 'border-gray-300']">
                      <button @click="setView('grid')" :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 rounded-md px-3 rounded-r-none', viewMode === 'grid' ? (theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900') : (theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-300')]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid3x3 w-4 h-4 mr-1">
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                          <path d="M3 9h18"></path>
                          <path d="M3 15h18"></path>
                          <path d="M9 3v18"></path>
                          <path d="M15 3v18"></path>
                        </svg>Сітка
                      </button>
                      <button @click="setView('list')" :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 rounded-md px-3 rounded-l-none', viewMode === 'list' ? (theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900') : (theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-300')]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list w-4 h-4 mr-1">
                          <line x1="8" x2="21" y1="6" y2="6"></line>
                          <line x1="8" x2="21" y1="12" y2="12"></line>
                          <line x1="8" x2="21" y1="18" y2="18"></line>
                          <line x1="3" x2="3.01" y1="6" y2="6"></line>
                          <line x1="3" x2="3.01" y1="12" y2="12"></line>
                          <line x1="3" x2="3.01" y1="18" y2="18"></line>
                        </svg>Список
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div :class="[viewMode === 'grid' ? 'grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid gap-3 grid-cols-1']">
                <div v-for="registry in filteredRegistries" :key="registry.id" :class="['rounded-lg border text-card-foreground shadow-sm cursor-pointer transition-all duration-200 hover:shadow-lg border-l-4', theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-gray-600' : 'bg-white border-gray-200 hover:bg-gray-50']">
                  <div class="p-4">
                    <div :class="[viewMode === 'grid' ? 'flex flex-col space-y-3' : 'flex items-center space-x-4']">
                      <div class="flex-shrink-0 relative">
                        <div :class="['text-gray-300', theme === 'dark' ? '' : 'text-gray-500']">
                          <svg v-html="registry.icon" class="w-6 h-6"></svg>
                        </div>
                      </div>
                      <div :class="[viewMode === 'grid' ? '' : 'flex-1']">
                        <div class="flex items-center justify-between mb-1">
                          <h3 :class="['font-semibold', viewMode === 'grid' ? 'text-base' : 'text-lg', theme === 'dark' ? 'text-gray-300' : 'text-gray-900']">{{ registry.title }}</h3>
                        </div>
                        <div :class="[viewMode === 'grid' ? 'flex flex-col space-y-2' : 'flex items-center space-x-4']">
                          <div :class="['items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 inline-flex self-start w-auto text-xs', theme === 'dark' ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800']">{{ registry.category }}</div>
                          <div class="flex items-center justify-between w-full">
                            <div :class="['text-sm font-medium', theme === 'dark' ? 'text-gray-50' : 'text-gray-900']">{{ registry.records }} записів</div>
                            <div :class="['text-xs', theme === 'dark' ? 'text-gray-400' : 'text-gray-500']">{{ registry.lastUpdated }}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeToggle from '../components/ThemeToggle.vue';
import { useRoute } from 'vue-router';

export default {
  components: {
    ThemeToggle,
  },
  data() {
    return {
      theme: 'light',
      searchQuery: '',
      selectedFilter: 'Всі',
      viewMode: 'grid',
      registries: [
        {
          id: 1,
          title: 'Електромережі',
          category: 'Інфраструктура',
          records: 89,
          lastUpdated: '1 хв тому',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><path d="m4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>'
        },
        {
          id: 2,
          title: 'Водопостачання',
          category: 'Інфраструктура',
          records: 42,
          lastUpdated: '3 хв тому',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplets"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>'
        },
        {
          id: 3,
          title: 'Персонал',
          category: 'Управління',
          records: 312,
          lastUpdated: '1 хв тому',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>'
        },
        {
          id: 4,
          title: 'Безпека',
          category: 'Безпека',
          records: 76,
          lastUpdated: '30 сек тому',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>'
        },
        {
          id: 5,
          title: 'Радіаційний контроль',
          category: 'Моніторинг',
          records: 204,
          lastUpdated: '15 сек тому',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>'
        },
        {
          id: 6,
          title: 'Тиск',
          category: 'Моніторинг',
          records: 156,
          lastUpdated: '45 сек тому',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>'
        },
        {
          id: 7,
          title: 'Температура',
          category: 'Моніторинг',
          records: 189,
          lastUpdated: '1 хв тому',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thermometer"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>'
        },
        {
          id: 8,
          title: 'Обладнання',
          category: 'Технічне',
          records: 243,
          lastUpdated: '3 хв тому',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>'
        },
        {
          id: 9,
          title: 'Моніторинг середовища',
          category: 'Моніторинг',
          records: 87,
          lastUpdated: '2 хв тому',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tree-pine"><path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"></path><path d="M12 22v-3"></path></svg>'
        },
        {
          id: 10,
          title: 'Реактори',
          category: 'Технічне',
          records: 6,
          lastUpdated: '30 сек тому',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-atom"><circle cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path></svg>'
        },
        {
          id: 11,
          title: 'Сховища',
          category: 'Інфраструктура',
          records: 18,
          lastUpdated: '15 хв тому',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-archive"><rect width="20" height="5" x="2" y="3" rx="1"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path><path d="M10 12h4"></path></svg>'
        },
        {
          id: 12,
          title: 'Будівлі',
          category: 'Інфраструктура',
          records: 124,
          lastUpdated: '2 хв тому',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>'
        },
        {
          id: 13,
          title: 'Документація',
          category: 'Управління',
          records: 1458,
          lastUpdated: '4 хв тому',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>'
        },
        {
          id: 14,
          title: 'Комунікації',
          category: 'Інфраструктура',
          records: 67,
          lastUpdated: '2 хв тому',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>'
        },
        {
          id: 15,
          title: 'Технічне обслуговування',
          category: 'Технічне',
          records: 98,
          lastUpdated: '6 хв тому',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>'
        },
        {
          id: 16,
          title: 'Ресурси',
          category: 'Логістика',
          records: 112,
          lastUpdated: '8 хв тому',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package"><path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>'
        },
        {
          id: 17,
          title: 'Дорожня мережа',
          category: 'Інфраструктура',
          records: 56,
          lastUpdated: '5 хв тому',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-route"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>'
        },
        {
          id: 18,
          title: 'Транспорт',
          category: 'Логістика',
          records: 35,
          lastUpdated: '7 хв тому',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>'
        },
        {
          id: 19,
          title: 'Фінанси',
          category: 'Управління',
          records: 76,
          lastUpdated: '10 хв тому',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>'
        }
      ],
      filteredRegistries: []
    };
  },
  computed: {
    currentRoute() {
      return useRoute().path;
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      this.applyTheme();
    },
    applyTheme() {
      if (this.theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', this.theme);
    },
    setFilter(category) {
      this.selectedFilter = category;
      this.filterRegistries();
    },
    setView(mode) {
      this.viewMode = mode;
    },
    filterRegistries() {
      let filtered = this.registries;
      
      // Apply search filter
      if (this.searchQuery.trim()) {
        filtered = filtered.filter(registry => 
          registry.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      
      // Apply category filter
      if (this.selectedFilter !== 'Всі') {
        filtered = filtered.filter(registry => 
          registry.category === this.selectedFilter
        );
      }
      
      this.filteredRegistries = filtered;
    }
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' || savedTheme === 'light') {
      this.theme = savedTheme;
    } else {
      this.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    this.applyTheme();
    this.filteredRegistries = [...this.registries]; // Initialize with all registries
  }
};
</script>

<style scoped>
</style>