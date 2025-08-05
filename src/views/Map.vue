<template>
  <div class="h-screen flex flex-col overflow-hidden" :class="theme === 'dark' ? 'bg-gray-950 text-gray-50' : 'bg-white text-black'">
    <!-- Header -->
    <div :class="['h-12 flex items-center justify-between pl-4 pr-4', theme === 'dark' ? 'bg-gray-900 border-gray-700 border-b' : 'bg-gray-200 border-gray-300 border-b']">
      <div class="flex items-center gap-6">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map h-5 w-5 mr-2">
            <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
            <path d="M15 5.764v15"></path>
            <path d="M9 3.236v15"></path>
          </svg>
          <div>
            <h1 :class="['text-lg font-semibold', theme === 'dark' ? 'text-gray-50' : 'text-gray-900']">Дані</h1>
          </div>
        </div>
        <div class="flex items-center gap-1">
          <button :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md h-8 px-3 text-sm transition-colors', theme === 'dark' ? 'hover:bg-gray-800 hover:text-gray-100' : 'hover:bg-gray-300 hover:text-gray-900']">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map h-4 w-4 mr-2">
              <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
              <path d="M15 5.764v15"></path>
              <path d="M9 3.236v15"></path>
            </svg>Карта
          </button>
          <button :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md h-8 px-3 text-sm transition-colors', theme === 'dark' ? 'bg-primary text-primary-foreground hover:bg-gray-800 hover:text-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700']">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table h-4 w-4 mr-2">
              <path d="M12 3v18"></path>
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M3 9h18"></path>
              <path d="M3 15h18"></path>
            </svg>Таблиця
          </button>
          <button :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md h-8 px-3 text-sm transition-colors', theme === 'dark' ? 'hover:bg-gray-800 hover:text-gray-100' : 'hover:bg-gray-300 hover:text-gray-900']">
            <div class="flex items-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map h-3 w-3">
                <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
                <path d="M15 5.764v15"></path>
                <path d="M9 3.236v15"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table h-3 w-3 ml-1">
                <path d="M12 3v18"></path>
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M3 9h18"></path>
                <path d="M3 15h18"></path>
              </svg>
            </div>Змішаний
          </button>
        </div>
        <button :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md h-8 px-3 text-sm transition-colors', theme === 'dark' ? 'bg-gray-800 border border-gray-600 text-gray-200 hover:bg-gray-700 hover:text-gray-100' : 'bg-gray-200 border border-gray-300 text-gray-900 hover:bg-gray-300 hover:text-gray-900']" type="button" id="radix-_r_0_" aria-haspopup="menu" aria-expanded="false" data-state="closed">
          Демо дані
          <svg class="ml-2 h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>
        <div class="flex items-center gap-1">
          <button :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md h-8 px-3 text-sm transition-colors', theme === 'dark' ? 'hover:bg-gray-800 hover:text-gray-100' : 'hover:bg-gray-300 hover:text-gray-900']">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download h-4 w-4 mr-2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" x2="12" y1="15" y2="3"></line>
            </svg>Експорт
          </button>
          <button :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md h-8 px-3 text-sm transition-colors', theme === 'dark' ? 'hover:bg-gray-800 hover:text-gray-100' : 'hover:bg-gray-300 hover:text-gray-900']">
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
    <!-- Table Section -->
    <div class="flex-1 flex min-h-0 relative">
      <div class="flex-1 min-h-0">
        <div class="h-full">
          <div :class="['h-full flex relative', theme === 'dark' ? 'bg-gray-950 text-gray-50' : 'bg-gray-50 text-gray-900']">
            <div class="flex-1 flex flex-col h-full overflow-hidden">
              <!-- Dropdown and Counter -->
              <div :class="['p-4 border-b flex-shrink-0', theme === 'dark' ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-gray-200']">
                <div class="flex items-center gap-3">
                  <button type="button" role="combobox" aria-controls="radix-_r_47_" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" :class="['flex items-center justify-between rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-80 h-9', theme === 'dark' ? 'bg-gray-800 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900']">
                    <span style="pointer-events: none;">Будівлі не масштабні лінійного типу</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  <span :class="['px-2 py-1 text-xs font-medium rounded-full', theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-600']">{{ filteredBuildings.length }}</span>
                </div>
              </div>
              <!-- Search and Filters -->
              <div :class="['p-4 flex items-center justify-between border-b flex-shrink-0', theme === 'dark' ? 'border-gray-700' : 'border-gray-300']">
                <div class="relative w-72">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <input v-model="searchQuery" @input="filterBuildings" :class="['flex w-full rounded-md border px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 h-10', theme === 'dark' ? 'bg-gray-800 border-gray-600 text-gray-100 placeholder:text-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400']" placeholder="Пошук записів...">
                </div>
                <div class="flex items-center gap-2">
                  <button @click="toggleFilterMenu" :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md h-10 px-4 transition-colors', theme === 'dark' ? 'bg-gray-800 border border-gray-600 text-gray-200 hover:bg-gray-700 hover:text-gray-100' : 'bg-gray-200 border border-gray-300 text-gray-900 hover:bg-gray-300 hover:text-gray-900']" :data-state="isFilterMenuOpen ? 'open' : 'closed'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-filter h-4 w-4">
                      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                    </svg>
                    <span class="ml-2">Фільтр</span>
                  </button>
                  <button @click="toggleSortMenu" :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md h-10 px-4 transition-colors', theme === 'dark' ? 'bg-gray-800 border border-gray-600 text-gray-200 hover:bg-gray-700 hover:text-gray-100' : 'bg-gray-200 border border-gray-300 text-gray-900 hover:bg-gray-300 hover:text-gray-900']" :data-state="isSortMenuOpen ? 'open' : 'closed'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-down h-4 w-4">
                      <path d="m21 16-4 4-4-4"></path>
                      <path d="M17 20V4"></path>
                      <path d="m3 8 4-4 4 4"></path>
                      <path d="M7 4v16"></path>
                    </svg>
                    <span class="ml-2">Сортування</span>
                  </button>
                  <button @click="toggleInfoMenu" :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md h-10 px-4 transition-colors', theme === 'dark' ? 'bg-gray-800 border border-gray-600 text-gray-200 hover:bg-gray-700 hover:text-gray-100' : 'bg-gray-200 border border-gray-300 text-gray-900 hover:bg-gray-300 hover:text-gray-900']" :data-state="isInfoMenuOpen ? 'open' : 'closed'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info h-4 w-4">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                    <span class="ml-2">Інформація</span>
                  </button>
                  <button @click="toggleColumnsMenu" :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md h-10 px-4 transition-colors', theme === 'dark' ? 'bg-gray-800 border border-gray-600 text-gray-200 hover:bg-gray-700 hover:text-gray-100' : 'bg-gray-200 border border-gray-300 text-gray-900 hover:bg-gray-300 hover:text-gray-900']" :data-state="isColumnsMenuOpen ? 'open' : 'closed'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-columns2 h-4 w-4">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M12 3v18"></path>
                    </svg>
                    <span class="ml-2">Колонки</span>
                  </button>
                  <button :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md h-10 px-4 transition-colors', theme === 'dark' ? 'bg-gray-800 border border-gray-600 text-gray-200 hover:bg-gray-700 hover:text-gray-100' : 'bg-gray-200 border border-gray-300 text-gray-900 hover:bg-gray-300 hover:text-gray-900']" data-state="closed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tag h-4 w-4">
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    <span class="ml-2">Підписи</span>
                  </button>
                  <button :class="['inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md h-10 px-4 transition-colors', theme === 'dark' ? 'bg-gray-800 border border-gray-600 text-gray-200 hover:bg-gray-700 hover:text-gray-100' : 'bg-gray-200 border border-gray-300 text-gray-900 hover:bg-gray-300 hover:text-gray-900']" data-state="closed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-4 w-4">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                    <span class="ml-2">Доступ</span>
                  </button>
                </div>
              </div>
              <!-- Table -->
              <div class="flex-1 overflow-hidden min-h-0 relative">
                <div class="h-full overflow-auto">
                  <table class="w-full border-collapse">
                    <thead class="sticky top-0 z-10">
                      <tr :class="['border-b', theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-gray-200 border-gray-300']">
                        <th class="px-4 py-2 text-left w-12">
                          <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" :class="['peer h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', theme === 'dark' ? 'border-gray-500 text-blue-500 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white' : 'border-gray-300 text-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white']"></button>
                        </th>
                        <th v-if="visibleColumns.name" :class="['px-4 py-2 text-left text-sm font-medium', theme === 'dark' ? 'text-gray-200' : 'text-gray-900']">Назва</th>
                        <th v-if="visibleColumns.status" :class="['px-4 py-2 text-left text-sm font-medium', theme === 'dark' ? 'text-gray-200' : 'text-gray-900']">Статус</th>
                        <th v-if="visibleColumns.type" :class="['px-4 py-2 text-left text-sm font-medium', theme === 'dark' ? 'text-gray-200' : 'text-gray-900']">Тип</th>
                        <th v-if="visibleColumns.area" :class="['px-4 py-2 text-left text-sm font-medium', theme === 'dark' ? 'text-gray-200' : 'text-gray-900']">Площа (м²)</th>
                        <th v-if="visibleColumns.height" :class="['px-4 py-2 text-left text-sm font-medium', theme === 'dark' ? 'text-gray-200' : 'text-gray-900']">Висота (м)</th>
                        <th v-if="visibleColumns.buildYear" :class="['px-4 py-2 text-left text-sm font-medium', theme === 'dark' ? 'text-gray-200' : 'text-gray-900']">Рік побудови</th>
                        <th v-if="visibleColumns.lastCheck" :class="['px-4 py-2 text-left text-sm font-medium', theme === 'dark' ? 'text-gray-200' : 'text-gray-900']">Остання перевірка</th>
                        <th :class="['px-4 py-2 text-left text-sm font-medium', theme === 'dark' ? 'text-gray-200' : 'text-gray-900']">Дії</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="building in filteredBuildings" :key="building.id" :class="['border-b transition-colors', theme === 'dark' ? 'border-gray-700 hover:bg-gray-900' : 'border-gray-200 hover:bg-gray-100']">
                        <td class="px-4 py-2">
                          <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" :class="['peer h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', theme === 'dark' ? 'border-gray-500 text-blue-500 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white' : 'border-gray-300 text-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white']"></button>
                        </td>
                        <td v-if="visibleColumns.name" :class="['px-4 py-2 text-sm font-medium', theme === 'dark' ? 'text-gray-100' : 'text-gray-900']">{{ building.name }}</td>
                        <td v-if="visibleColumns.status" class="px-4 py-2">
                          <span :class="['px-2 py-1 text-xs font-medium rounded-full', building.status === 'активний' ? (theme === 'dark' ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800') : (theme === 'dark' ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-800')]">{{ building.status }}</span>
                        </td>
                        <td v-if="visibleColumns.type" :class="['px-4 py-2 text-sm', theme === 'dark' ? 'text-gray-200' : 'text-gray-600']">{{ building.type }}</td>
                        <td v-if="visibleColumns.area" :class="['px-4 py-2 text-sm', theme === 'dark' ? 'text-gray-200' : 'text-gray-600']">{{ building.area.toLocaleString() }}</td>
                        <td v-if="visibleColumns.height" :class="['px-4 py-2 text-sm', theme === 'dark' ? 'text-gray-200' : 'text-gray-600']">{{ building.height }}</td>
                        <td v-if="visibleColumns.buildYear" :class="['px-4 py-2 text-sm', theme === 'dark' ? 'text-gray-200' : 'text-gray-600']">{{ building.buildYear }}</td>
                        <td v-if="visibleColumns.lastCheck" :class="['px-4 py-2 text-sm', theme === 'dark' ? 'text-gray-200' : 'text-gray-600']">{{ building.lastCheck || '-' }}</td>
                        <td class="px-4 py-2">
                          <div class="flex items-center gap-1">
                            <button :class="['inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-7 w-7 rounded-full transition-colors', theme === 'dark' ? 'hover:bg-gray-800 hover:text-gray-100' : 'hover:bg-gray-200 hover:text-gray-900']">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye h-3 w-3">
                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </button>
                            <button :class="['inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-7 w-7 rounded-full transition-colors', theme === 'dark' ? 'hover:bg-gray-800 hover:text-gray-100' : 'hover:bg-gray-200 hover:text-gray-900']">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen h-3 w-3">
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                              </svg>
                            </button>
                            <button :class="['inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-7 w-7 rounded-full transition-colors', theme === 'dark' ? 'hover:bg-gray-800 hover:text-gray-100' : 'hover:bg-gray-200 hover:text-gray-900']">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis h-3 w-3">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- Filter, Sort, Info, and Columns Menu -->
            <div v-if="isFilterMenuOpen || isSortMenuOpen || isInfoMenuOpen || isColumnsMenuOpen" class="absolute top-0 right-0 h-full bg-gray-900 border-gray-700 border-l shadow-lg z-40 flex" style="width: 360px;">
              <div class="w-1 cursor-col-resize hover:bg-blue-500 transition-colors bg-gray-700 flex items-center justify-center relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-vertical h-4 w-4 text-gray-400">
                  <circle cx="9" cy="12" r="1"></circle>
                  <circle cx="9" cy="5" r="1"></circle>
                  <circle cx="9" cy="19" r="1"></circle>
                  <circle cx="15" cy="12" r="1"></circle>
                  <circle cx="15" cy="5" r="1"></circle>
                  <circle cx="15" cy="19" r="1"></circle>
                </svg>
              </div>
              <div class="flex-1 flex flex-col h-full">
                <div class="p-4 mt-1 border-b border-gray-700 flex items-center justify-between flex-shrink-0">
                  <h2 class="text-lg font-semibold text-gray-100">Налаштування таблиці</h2>
                  <button @click="closeMenus" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 w-8 hover:bg-gray-800 text-gray-400 hover:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-4 w-4">
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </button>
                </div>
                <div class="flex-1 overflow-auto p-4 min-h-0">
                  <div class="space-y-4">
                    <h3 v-if="isFilterMenuOpen" class="text-lg font-semibold text-gray-100">Фільтри</h3>
                    <div v-if="isFilterMenuOpen" class="space-y-3">
                      <div>
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-gray-200">Статус</label>
                        <div class="relative mt-1">
                          <button @click="toggleStatusDropdown" type="button" role="combobox" :aria-expanded="isStatusDropdownOpen" aria-controls="radix-_r_96_" aria-autocomplete="none" dir="ltr" :data-state="isStatusDropdownOpen ? 'open' : 'closed'" :class="['flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-800 border-gray-600 text-gray-100', theme === 'dark' ? 'bg-gray-800 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900']">
                            <span style="pointer-events: none;">{{ selectedStatus || 'Всі статуси' }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                          <div v-if="isStatusDropdownOpen" class="absolute w-full mt-1 bg-gray-800 border border-gray-600 rounded-md shadow-lg z-50">
                            <div class="py-1">
                              <button @click="selectStatus('')" class="w-full text-left px-4 py-2 text-sm text-gray-100 hover:bg-gray-700">Всі статуси</button>
                              <button v-for="status in statuses" :key="status" @click="selectStatus(status)" class="w-full text-left px-4 py-2 text-sm text-gray-100 hover:bg-gray-700">{{ status }}</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-gray-200">Тип</label>
                        <div class="relative mt-1">
                          <button @click="toggleTypeDropdown" type="button" role="combobox" :aria-expanded="isTypeDropdownOpen" aria-controls="radix-_r_97_" aria-autocomplete="none" dir="ltr" :data-state="isTypeDropdownOpen ? 'open' : 'closed'" :class="['flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-800 border-gray-600 text-gray-100', theme === 'dark' ? 'bg-gray-800 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900']">
                            <span style="pointer-events: none;">{{ selectedType || 'Всі типи' }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                          <div v-if="isTypeDropdownOpen" class="absolute w-full mt-1 bg-gray-800 border border-gray-600 rounded-md shadow-lg z-50">
                            <div class="py-1">
                              <button @click="selectType('')" class="w-full text-left px-4 py-2 text-sm text-gray-100 hover:bg-gray-700">Всі типи</button>
                              <button v-for="type in types" :key="type" @click="selectType(type)" class="w-full text-left px-4 py-2 text-sm text-gray-100 hover:bg-gray-700">{{ type }}</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 v-if="isSortMenuOpen" class="text-lg font-semibold text-gray-100">Сортування</h3>
                    <div v-if="isSortMenuOpen" class="space-y-3">
                      <div>
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-gray-200">Сортувати за</label>
                        <div class="relative mt-1">
                          <button @click="toggleSortFieldDropdown" type="button" role="combobox" :aria-expanded="isSortFieldDropdownOpen" aria-controls="radix-_r_2f_" aria-autocomplete="none" dir="ltr" :data-state="isSortFieldDropdownOpen ? 'open' : 'closed'" class="flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-800 border-gray-600 text-gray-100">
                            <span style="pointer-events: none;">{{ selectedSortField || 'Назва' }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                          <div v-if="isSortFieldDropdownOpen" class="absolute w-full mt-1 bg-gray-800 border border-gray-600 rounded-md shadow-lg z-50">
                            <div class="py-1">
                              <button v-for="field in sortFields" :key="field.value" @click="selectSortField(field.value)" class="w-full text-left px-4 py-2 text-sm text-gray-100 hover:bg-gray-700">{{ field.label }}</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-gray-200">Порядок</label>
                        <div class="relative mt-1">
                          <button @click="toggleSortOrderDropdown" type="button" role="combobox" :aria-expanded="isSortOrderDropdownOpen" aria-controls="radix-_r_3r_" aria-autocomplete="none" dir="ltr" :data-state="isSortOrderDropdownOpen ? 'open' : 'closed'" class="flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-800 border-gray-600 text-gray-100">
                            <span style="pointer-events: none;">{{ selectedSortOrder === 'asc' ? 'За зростанням' : 'За спаданням' }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                          <div v-if="isSortOrderDropdownOpen" class="absolute w-full mt-1 bg-gray-800 border border-gray-600 rounded-md shadow-lg z-50">
                            <div class="py-1">
                              <button @click="selectSortOrder('asc')" class="w-full text-left px-4 py-2 text-sm text-gray-100 hover:bg-gray-700">За зростанням</button>
                              <button @click="selectSortOrder('desc')" class="w-full text-left px-4 py-2 text-sm text-gray-100 hover:bg-gray-700">За спаданням</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 v-if="isInfoMenuOpen" class="text-lg font-semibold text-gray-100">Інформація</h3>
                    <div v-if="isInfoMenuOpen" class="space-y-6">
                      <div>
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-gray-400">Назва категорії</label>
                        <div class="mt-1 p-3 rounded-md border bg-gray-800 border-gray-700 text-gray-100">Інфраструктура</div>
                      </div>
                      <div>
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-gray-400">Реєстр</label>
                        <div class="mt-1 p-3 rounded-md border bg-gray-800 border-gray-700 text-gray-100">Будівлі не масштабні лінійного типу</div>
                      </div>
                      <div>
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-gray-400">Опис реєстру</label>
                        <div class="mt-1 p-3 rounded-md border bg-gray-800 border-gray-700 text-gray-200 text-sm leading-relaxed">Реєстр будівель та споруд атомної електростанції з детальною інформацією про їх характеристики та стан.</div>
                      </div>
                      <div class="grid grid-cols-2 gap-4">
                        <div>
                          <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-gray-400">Кількість записів</label>
                          <div class="mt-1 p-3 rounded-md border bg-gray-800 border-gray-700 text-gray-100 font-semibold">{{ buildings.length }}</div>
                        </div>
                        <div>
                          <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-gray-400">Останнє оновлення</label>
                          <div class="mt-1 p-3 rounded-md border bg-gray-800 border-gray-700 text-gray-100">{{ lastUpdated }}</div>
                        </div>
                      </div>
                      <div>
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-gray-400 mb-3 block">Статистика за статусом</label>
                        <div class="p-4 rounded-lg border bg-gray-800 border-gray-700">
                          <div class="space-y-3">
                            <div v-for="stat in statusStats" :key="stat.status" class="space-y-2">
                              <div class="flex items-center justify-between">
                                <div class="flex items-center gap-2">
                                  <div class="w-3 h-3 rounded-full" :class="stat.status === 'активний' ? 'bg-blue-600' : 'bg-yellow-600'"></div>
                                  <span class="text-sm font-medium text-gray-200 capitalize">{{ stat.status }}</span>
                                </div>
                                <div class="flex items-center gap-2">
                                  <span class="text-sm text-gray-300">{{ stat.count }}</span>
                                  <span class="text-xs text-gray-400">({{ stat.percentage }}%)</span>
                                </div>
                              </div>
                              <div class="w-full h-2 rounded-full bg-gray-700">
                                <div class="h-2 rounded-full" :class="stat.status === 'активний' ? 'bg-blue-600' : 'bg-yellow-600'" :style="{ width: stat.percentage + '%' }"></div>
                              </div>
                            </div>
                          </div>
                          <div class="mt-4 pt-3 border-t border-gray-700">
                            <div class="flex items-center justify-between">
                              <span class="text-sm font-medium text-gray-300">Загальна кількість</span>
                              <span class="text-sm font-semibold text-gray-100">{{ buildings.length }} записів</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 v-if="isColumnsMenuOpen" class="text-lg font-semibold text-gray-100">Колонки</h3>
                    <div v-if="isColumnsMenuOpen" class="space-y-2">
                      <div v-for="field in sortFields" :key="field.value" class="flex items-center justify-between p-2 rounded border border-gray-700 bg-gray-800">
                        <div class="flex items-center space-x-3">
                          <div class="cursor-move">
                            <div class="w-2 h-2 bg-gray-400 rounded-full mb-1"></div>
                            <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
                          </div>
                          <span class="text-sm text-gray-200">{{ field.label }}</span>
                        </div>
                        <button
                          type="button"
                          role="switch"
                          :aria-checked="visibleColumns[field.value]"
                          :data-state="visibleColumns[field.value] ? 'checked' : 'unchecked'"
                          value="on"
                          @click="toggleColumn(field.value)"
                          class="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-500"
                        >
                          <span
                            :data-state="visibleColumns[field.value] ? 'checked' : 'unchecked'"
                            class="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                          ></span>
                        </button>
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

export default {
  components: {
    ThemeToggle,
  },
  data() {
    return {
      theme: 'dark',
      searchQuery: '',
      isFilterMenuOpen: false,
      isSortMenuOpen: false,
      isInfoMenuOpen: false,
      isColumnsMenuOpen: false,
      isStatusDropdownOpen: false,
      isTypeDropdownOpen: false,
      isSortFieldDropdownOpen: false,
      isSortOrderDropdownOpen: false,
      selectedStatus: '',
      selectedType: '',
      selectedSortField: 'name',
      selectedSortOrder: 'asc',
      buildings: [
        { id: 1, name: 'Головний корпус реактора', status: 'активний', type: 'Виробничий', area: 12500, height: 45, buildYear: 1985, lastCheck: '2025-01-15' },
        { id: 2, name: 'Машинний зал', status: 'активний', type: 'Виробничий', area: 8200, height: 28, buildYear: 1985, lastCheck: '2025-02-10' },
        { id: 3, name: 'Адміністративний корпус', status: 'активний', type: 'Адміністративний', area: 3600, height: 18, buildYear: 1986, lastCheck: '2024-12-20' },
        { id: 4, name: 'Центр управління', status: 'активний', type: 'Технічний', area: 2800, height: 12, buildYear: 1985, lastCheck: '2025-03-01' },
        { id: 5, name: 'Лабораторний комплекс', status: 'активний', type: 'Дослідницький', area: 4200, height: 15, buildYear: 1987, lastCheck: '2025-01-30' },
        { id: 6, name: 'Сховище відпрацьованого палива', status: 'під наглядом', type: 'Технічний', area: 6500, height: 22, buildYear: 1988, lastCheck: '2025-02-15' },
        { id: 7, name: 'Насосна станція', status: 'активний', type: 'Технічний', area: 1800, height: 8, buildYear: 1985, lastCheck: '2024-11-25' },
        { id: 8, name: 'Градирня №1', status: 'активний', type: 'Технічний', area: 3200, height: 120, buildYear: 1985, lastCheck: '2025-01-10' },
        { id: 9, name: 'Градирня №2', status: 'активний', type: 'Технічний', area: 3200, height: 120, buildYear: 1985, lastCheck: '2025-01-10' },
        { id: 10, name: 'Їдальня', status: 'активний', type: 'Допоміжний', area: 1200, height: 6, buildYear: 1986, lastCheck: '2024-12-01' },
      ],
      filteredBuildings: [],
      sortFields: [
        { value: 'name', label: 'Назва' },
        { value: 'status', label: 'Статус' },
        { value: 'type', label: 'Тип' },
        { value: 'area', label: 'Площа (м²)' },
        { value: 'height', label: 'Висота (м)' },
        { value: 'buildYear', label: 'Рік побудови' },
        { value: 'lastCheck', label: 'Остання перевірка' },
      ],
      visibleColumns: {
        name: true,
        status: true,
        type: true,
        area: true,
        height: true,
        buildYear: true,
        lastCheck: false,
      },
      lastUpdated: '16.06.2025',
    };
  },
  computed: {
    statuses() {
      return [...new Set(this.buildings.map(building => building.status))];
    },
    types() {
      return [...new Set(this.buildings.map(building => building.type))];
    },
    statusStats() {
      const total = this.buildings.length;
      const stats = this.statuses.map(status => {
        const count = this.buildings.filter(building => building.status === status).length;
        const percentage = total > 0 ? ((count / total) * 100).toFixed(0) : 0;
        return { status, count, percentage };
      });
      return stats;
    },
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
    toggleFilterMenu() {
      this.isFilterMenuOpen = !this.isFilterMenuOpen;
      this.isSortMenuOpen = false;
      this.isInfoMenuOpen = false;
      this.isColumnsMenuOpen = false;
      this.isStatusDropdownOpen = false;
      this.isTypeDropdownOpen = false;
      this.isSortFieldDropdownOpen = false;
      this.isSortOrderDropdownOpen = false;
    },
    toggleSortMenu() {
      this.isSortMenuOpen = !this.isSortMenuOpen;
      this.isFilterMenuOpen = false;
      this.isInfoMenuOpen = false;
      this.isColumnsMenuOpen = false;
      this.isStatusDropdownOpen = false;
      this.isTypeDropdownOpen = false;
      this.isSortFieldDropdownOpen = false;
      this.isSortOrderDropdownOpen = false;
    },
    toggleInfoMenu() {
      this.isInfoMenuOpen = !this.isInfoMenuOpen;
      this.isFilterMenuOpen = false;
      this.isSortMenuOpen = false;
      this.isColumnsMenuOpen = false;
      this.isStatusDropdownOpen = false;
      this.isTypeDropdownOpen = false;
      this.isSortFieldDropdownOpen = false;
      this.isSortOrderDropdownOpen = false;
    },
    toggleColumnsMenu() {
      this.isColumnsMenuOpen = !this.isColumnsMenuOpen;
      this.isFilterMenuOpen = false;
      this.isSortMenuOpen = false;
      this.isInfoMenuOpen = false;
      this.isStatusDropdownOpen = false;
      this.isTypeDropdownOpen = false;
      this.isSortFieldDropdownOpen = false;
      this.isSortOrderDropdownOpen = false;
    },
    closeMenus() {
      this.isFilterMenuOpen = false;
      this.isSortMenuOpen = false;
      this.isInfoMenuOpen = false;
      this.isColumnsMenuOpen = false;
      this.isStatusDropdownOpen = false;
      this.isTypeDropdownOpen = false;
      this.isSortFieldDropdownOpen = false;
      this.isSortOrderDropdownOpen = false;
    },
    toggleStatusDropdown() {
      this.isStatusDropdownOpen = !this.isStatusDropdownOpen;
      this.isTypeDropdownOpen = false;
      this.isSortFieldDropdownOpen = false;
      this.isSortOrderDropdownOpen = false;
    },
    toggleTypeDropdown() {
      this.isTypeDropdownOpen = !this.isTypeDropdownOpen;
      this.isStatusDropdownOpen = false;
      this.isSortFieldDropdownOpen = false;
      this.isSortOrderDropdownOpen = false;
    },
    toggleSortFieldDropdown() {
      this.isSortFieldDropdownOpen = !this.isSortFieldDropdownOpen;
      this.isStatusDropdownOpen = false;
      this.isTypeDropdownOpen = false;
      this.isSortOrderDropdownOpen = false;
    },
    toggleSortOrderDropdown() {
      this.isSortOrderDropdownOpen = !this.isSortOrderDropdownOpen;
      this.isStatusDropdownOpen = false;
      this.isTypeDropdownOpen = false;
      this.isSortFieldDropdownOpen = false;
    },
    toggleColumn(field) {
      this.visibleColumns[field] = !this.visibleColumns[field];
    },
    selectStatus(status) {
      this.selectedStatus = status;
      this.isStatusDropdownOpen = false;
      this.filterBuildings();
    },
    selectType(type) {
      this.selectedType = type;
      this.isTypeDropdownOpen = false;
      this.filterBuildings();
    },
    selectSortField(field) {
      this.selectedSortField = field;
      this.isSortFieldDropdownOpen = false;
      this.filterBuildings();
    },
    selectSortOrder(order) {
      this.selectedSortOrder = order;
      this.isSortOrderDropdownOpen = false;
      this.filterBuildings();
    },
    filterBuildings() {
      let result = this.buildings.filter(building => {
        const matchesSearch = this.searchQuery.trim()
          ? building.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          : true;
        const matchesStatus = this.selectedStatus
          ? building.status === this.selectedStatus
          : true;
        const matchesType = this.selectedType
          ? building.type === this.selectedType
          : true;
        return matchesSearch && matchesStatus && matchesType;
      });

      // Сортування
      result.sort((a, b) => {
        const field = this.selectedSortField;
        let valueA = a[field];
        let valueB = b[field];

        // Обробка текстових і числових значень
        if (typeof valueA === 'string') {
          valueA = valueA.toLowerCase();
          valueB = valueB.toLowerCase();
        }

        if (this.selectedSortOrder === 'asc') {
          return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        } else {
          return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
        }
      });

      this.filteredBuildings = result;
    },
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      this.theme = savedTheme;
    } else {
      this.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    this.applyTheme();
    this.filteredBuildings = [...this.buildings]; // Initialize with all buildings
  },
};
</script>

<style scoped>
/* Стилі для перемикачів у меню "Колонки" */
.switch {
  @apply inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50;
}

.switch[data-state="checked"] {
  @apply bg-blue-600; /* Колір для увімкненого стану */
}

.switch[data-state="unchecked"] {
  @apply bg-gray-500; /* Колір для вимкненого стану */
}

.switch span {
  @apply pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform;
}

.switch span[data-state="checked"] {
  @apply translate-x-5;
}

.switch span[data-state="unchecked"] {
  @apply translate-x-0;
}

/* Стилі для фокусу та кільця */
.focus-visible:ring-ring {
  @apply ring-blue-500;
}

.focus-visible:ring-offset-background {
  @apply ring-offset-gray-900; /* Для темної теми */
}

html:not(.dark) .focus-visible:ring-offset-background {
  @apply ring-offset-white; /* Для світлої теми */
}
</style>