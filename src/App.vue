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
            <button :class="['inline-flex items-center justify-center h-11 w-11 mx-1 mb-2 transition-colors rounded-md', theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white']">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home h-5 w-5">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </button>
          </div>
          <div class="relative">
            <button :class="['inline-flex items-center justify-center h-11 w-11 mx-1 mb-2 transition-colors rounded-md', theme === 'dark' ? 'text-gray-300 hover:text-gray-50 hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-300']">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map h-5 w-5">
                <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
                <path d="M15 5.764v15"></path>
                <path d="M9 3.236v15"></path>
              </svg>
            </button>
          </div>
          <div class="relative">
            <button :class="['inline-flex items-center justify-center h-11 w-11 mx-1 mb-2 transition-colors rounded-md', theme === 'dark' ? 'text-gray-300 hover:text-gray-50 hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-300']">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database h-5 w-5">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                <path d="M3 12A9 3 0 0 0 21 12"></path>
              </svg>
            </button>
          </div>
          <div class="relative">
            <button :class="['inline-flex items-center justify-center h-11 w-11 mx-1 mb-2 transition-colors rounded-md', theme === 'dark' ? 'text-gray-300 hover:text-gray-50 hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-300']">
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
            <div :class="['h-12 flex items-center justify-between pl-4 pr-4', theme === 'dark' ? 'bg-gray-900 border-gray-700 border-b' : 'bg-gray-200 border-gray-300 border-b']">
              <div class="flex items-center gap-6">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home h-5 w-5 mr-2">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <div>
                    <h1 :class="['text-lg font-semibold', theme === 'dark' ? 'text-gray-50' : 'text-gray-900']">Головна панель</h1>
                  </div>
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
            <div class="flex-1 overflow-auto">
              <div class="p-6 max-w-7xl mx-auto w-full">
                <div class="mb-8">
                  <div class="flex items-center justify-between mb-4">
                    <div :class="['flex items-center gap-2 text-sm', theme === 'dark' ? 'text-gray-400' : 'text-gray-500']">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-4 w-4">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span :id="lastUpdateId">Останнє оновлення: {{ lastUpdate }}</span>
                    </div>
                  </div>
                  <div class="relative max-w-md w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                    <input v-model="searchQuery" @input="updateLastUpdate" :class="['flex h-10 w-full rounded-md px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10', theme === 'dark' ? 'bg-gray-900 border-gray-700 text-gray-100 placeholder:text-gray-400' : 'bg-white border-gray-300 placeholder:text-muted-foreground']" placeholder="Пошук проектів, об'єктів..." value="">
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 w-full">
                  <div :class="['rounded-lg border shadow-sm', theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200']">
                    <div class="p-6">
                      <div class="flex items-center justify-between">
                        <div>
                          <p :class="['text-sm font-medium', theme === 'dark' ? 'text-gray-200' : 'text-gray-600']">Активні об'єкти</p>
                          <p :class="['text-2xl font-bold', theme === 'dark' ? 'text-gray-50' : 'text-gray-900']">2,847</p>
                          <p :class="['text-sm font-medium', theme === 'dark' ? 'text-green-600' : 'text-green-600']">+12% від минулого тижня</p>
                        </div>
                        <div :class="['p-3 rounded-full', theme === 'dark' ? 'bg-blue-900/20' : 'bg-blue-50']">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin h-6 w-6 text-blue-600">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div :class="['rounded-lg border shadow-sm', theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200']">
                    <div class="p-6">
                      <div class="flex items-center justify-between">
                        <div>
                          <p :class="['text-sm font-medium', theme === 'dark' ? 'text-gray-200' : 'text-gray-600']">Шари даних</p>
                          <p :class="['text-2xl font-bold', theme === 'dark' ? 'text-gray-50' : 'text-gray-900']">29</p>
                          <p :class="['text-sm font-medium', theme === 'dark' ? 'text-green-600' : 'text-green-600']">+3 від минулого тижня</p>
                        </div>
                        <div :class="['p-3 rounded-full', theme === 'dark' ? 'bg-green-900/20' : 'bg-green-50']">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers h-6 w-6 text-green-600">
                            <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
                            <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                            <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div :class="['rounded-lg border shadow-sm', theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200']">
                    <div class="p-6">
                      <div class="flex items-center justify-between">
                        <div>
                          <p :class="['text-sm font-medium', theme === 'dark' ? 'text-gray-200' : 'text-gray-600']">Користувачі онлайн</p>
                          <p :class="['text-2xl font-bold', theme === 'dark' ? 'text-gray-50' : 'text-gray-900']">156</p>
                          <p :class="['text-sm font-medium', theme === 'dark' ? 'text-green-600' : 'text-green-600']">+8% від минулого тижня</p>
                        </div>
                        <div :class="['p-3 rounded-full', theme === 'dark' ? 'bg-purple-900/20' : 'bg-purple-50']">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-6 w-6 text-purple-600">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div :class="['rounded-lg border shadow-sm', theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200']">
                    <div class="p-6">
                      <div class="flex items-center justify-between">
                        <div>
                          <p :class="['text-sm font-medium', theme === 'dark' ? 'text-gray-200' : 'text-gray-600']">Оновлень сьогодні</p>
                          <p :class="['text-2xl font-bold', theme === 'dark' ? 'text-gray-50' : 'text-gray-900']">47</p>
                          <p :class="['text-sm font-medium', theme === 'dark' ? 'text-green-600' : 'text-green-600']">+23% від минулого тижня</p>
                        </div>
                        <div :class="['p-3 rounded-full', theme === 'dark' ? 'bg-orange-900/20' : 'bg-orange-50']">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity h-6 w-6 text-orange-600">
                            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:items-stretch w-full">
                  <div class="lg:col-span-1 flex w-full">
                    <div :class="['rounded-lg border shadow-sm flex-1', theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200']">
                      <div class="flex flex-col space-y-1.5 p-6">
                        <div :class="['text-2xl font-semibold leading-none tracking-tight', theme === 'dark' ? 'text-gray-50' : 'text-gray-900']">Швидкі дії</div>
                        <div :class="['text-sm', theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground']">Основні функції системи</div>
                      </div>
                      <div class="p-6 pt-0 space-y-3">
                        <button :class="['inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full justify-start h-auto p-4 transition-colors hover:bg-gray-800', theme === 'dark' ? '' : 'hover:bg-gray-100']">
                          <div class="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map h-5 w-5 text-white">
                              <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
                              <path d="M15 5.764v15"></path>
                              <path d="M9 3.236v15"></path>
                            </svg>
                          </div>
                          <div class="text-left">
                            <div :class="['font-medium', theme === 'dark' ? 'text-gray-50' : 'text-gray-900']">Відкрити карту</div>
                            <div :class="['text-sm', theme === 'dark' ? 'text-gray-300' : 'text-gray-500']">Перейти до інтерактивної карти</div>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 ml-auto text-gray-300">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </button>
                        <button :class="['inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full justify-start h-auto p-4 transition-colors hover:bg-gray-800', theme === 'dark' ? '' : 'hover:bg-gray-100']">
                          <div class="p-2 rounded-lg bg-green-600 hover:bg-green-700 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-5 w-5 text-white">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </div>
                          <div class="text-left">
                            <div :class="['font-medium', theme === 'dark' ? 'text-gray-50' : 'text-gray-900']">Новий проект</div>
                            <div :class="['text-sm', theme === 'dark' ? 'text-gray-300' : 'text-gray-500']">Створити новий GIS проект</div>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 ml-auto text-gray-300">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </button>
                        <button :class="['inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full justify-start h-auto p-4 transition-colors hover:bg-gray-800', theme === 'dark' ? '' : 'hover:bg-gray-100']">
                          <div class="p-2 rounded-lg bg-purple-600 hover:bg-purple-700 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart3 h-5 w-5 text-white">
                              <path d="M3 3v18h18"></path>
                              <path d="M18 17V9"></path>
                              <path d="M13 17V5"></path>
                              <path d="M8 17v-3"></path>
                            </svg>
                          </div>
                          <div class="text-left">
                            <div :class="['font-medium', theme === 'dark' ? 'text-gray-50' : 'text-gray-900']">Аналітика</div>
                            <div :class="['text-sm', theme === 'dark' ? 'text-gray-300' : 'text-gray-500']">Переглянути звіти та статистику</div>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 ml-auto text-gray-300">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </button>
                        <button :class="['inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full justify-start h-auto p-4 transition-colors hover:bg-gray-800', theme === 'dark' ? '' : 'hover:bg-gray-100']">
                          <div class="p-2 rounded-lg bg-orange-600 hover:bg-orange-700 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database h-5 w-5 text-white">
                              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                              <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                              <path d="M3 12A9 3 0 0 0 21 12"></path>
                            </svg>
                          </div>
                          <div class="text-left">
                            <div :class="['font-medium', theme === 'dark' ? 'text-gray-50' : 'text-gray-900']">База даних</div>
                            <div :class="['text-sm', theme === 'dark' ? 'text-gray-300' : 'text-gray-500']">Управління геопросторовими даними</div>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 ml-auto text-gray-300">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="lg:col-span-2 flex w-full">
                    <div :class="['rounded-lg border shadow-sm flex-1', theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200']">
                      <div class="flex flex-col space-y-1.5 p-6">
                        <div :class="['flex items-center justify-between', theme === 'dark' ? '' : '']">
                          <div>
                            <div :class="['text-2xl font-semibold leading-none tracking-tight', theme === 'dark' ? 'text-gray-50' : 'text-gray-900']">Документація</div>
                            <div :class="['text-sm', theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground']">Знайдіть тут необхідну документацію по роботі з системою</div>
                          </div>
                        </div>
                      </div>
                      <div class="p-6 pt-0">
                        <div class="space-y-4">
                          <div :class="['p-4 rounded-lg border hover:bg-gray-800 transition-colors cursor-pointer', theme === 'dark' ? 'border-gray-700' : 'border-gray-200 hover:bg-gray-50']">
                            <div class="flex items-start justify-between mb-3">
                              <div class="flex-1 pr-3">
                                <h3 :class="['font-medium text-base', theme === 'dark' ? 'text-gray-50' : 'text-gray-900']">Посібник користувача</h3>
                                <p :class="['text-sm mt-1', theme === 'dark' ? 'text-gray-300' : 'text-gray-600']">Повне керівництво по роботі з системою</p>
                              </div>
                              <div :class="['inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80', theme === 'dark' ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800']">Основи</div>
                            </div>
                            <div class="flex items-center">
                              <span :class="['text-xs', theme === 'dark' ? 'text-gray-400' : 'text-gray-500']">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-3 w-3 inline mr-1">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>15 хв
                              </span>
                              <div class="ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-3 w-3 text-gray-400">
                                  <path d="M5 12h14"></path>
                                  <path d="m12 5 7 7-7 7"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div :class="['p-4 rounded-lg border hover:bg-gray-800 transition-colors cursor-pointer', theme === 'dark' ? 'border-gray-700' : 'border-gray-200 hover:bg-gray-50']">
                            <div class="flex items-start justify-between mb-3">
                              <div class="flex-1 pr-3">
                                <h3 :class="['font-medium text-base', theme === 'dark' ? 'text-gray-50' : 'text-gray-900']">API документація</h3>
                                <p :class="['text-sm mt-1', theme === 'dark' ? 'text-gray-300' : 'text-gray-600']">Технічна документація для розробників</p>
                              </div>
                              <div :class="['inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80', theme === 'dark' ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-800']">Розробка</div>
                            </div>
                            <div class="flex items-center">
                              <span :class="['text-xs', theme === 'dark' ? 'text-gray-400' : 'text-gray-500']">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-3 w-3 inline mr-1">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>30 хв
                              </span>
                              <div class="ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-3 w-3 text-gray-400">
                                  <path d="M5 12h14"></path>
                                  <path d="m12 5 7 7-7 7"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div :class="['p-4 rounded-lg border hover:bg-gray-800 transition-colors cursor-pointer', theme === 'dark' ? 'border-gray-700' : 'border-gray-200 hover:bg-gray-50']">
                            <div class="flex items-start justify-between mb-3">
                              <div class="flex-1 pr-3">
                                <h3 :class="['font-medium text-base', theme === 'dark' ? 'text-gray-50' : 'text-gray-900']">Відеоуроки</h3>
                                <p :class="['text-sm mt-1', theme === 'dark' ? 'text-gray-300' : 'text-gray-600']">Навчальні відео по основних функціях</p>
                              </div>
                              <div :class="['inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80', theme === 'dark' ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800']">Навчання</div>
                            </div>
                            <div class="flex items-center">
                              <span :class="['text-xs', theme === 'dark' ? 'text-gray-400' : 'text-gray-500']">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-3 w-3 inline mr-1">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>45 хв
                              </span>
                              <div class="ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-3 w-3 text-gray-400">
                                  <path d="M5 12h14"></path>
                                  <path d="m12 5 7 7-7 7"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-6 w-full">
                  <div :class="['rounded-lg border shadow-sm', theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200']">
                    <div class="flex flex-col space-y-1.5 p-6">
                      <div :class="['text-2xl font-semibold leading-none tracking-tight', theme === 'dark' ? 'text-gray-50' : 'text-gray-900']">Активність системи</div>
                      <div :class="['text-sm', theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground']">Статистика використання за останні 7 днів</div>
                    </div>
                    <div class="p-6 pt-0">
                      <div :class="['h-64 flex items-center justify-center border-2 border-dashed rounded-lg', theme === 'dark' ? 'border-gray-600' : 'border-gray-300']">
                        <div class="text-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up h-12 w-12 mx-auto mb-4" :class="theme === 'dark' ? 'text-gray-500' : 'text-gray-400'">
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                            <polyline points="16 7 22 7 22 13"></polyline>
                          </svg>
                          <p :class="['text-lg font-medium', theme === 'dark' ? 'text-gray-300' : 'text-gray-600']">Графік активності</p>
                          <p :class="['text-sm', theme === 'dark' ? 'text-gray-400' : 'text-gray-500']">Тут буде відображатися аналітика використання</p>
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
import ThemeToggle from './components/ThemeToggle.vue';

export default {
  components: {
    ThemeToggle,
  },
  data() {
    return {
      theme: 'light',
      lastUpdate: '13:30:11',
      lastUpdateId: 'last-update-' + Math.random().toString(36).substr(2, 9),
      searchQuery: '',
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', this.theme === 'dark');
    },
    updateLastUpdate() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      this.lastUpdate = `${hours}:${minutes}:${seconds}`;
    },
  },
  mounted() {
    if (localStorage.getItem('theme')) {
      this.theme = localStorage.getItem('theme');
    }
    document.documentElement.classList.toggle('dark', this.theme === 'dark');
    this.updateLastUpdate();
    window.addEventListener('load', this.updateLastUpdate);
    window.addEventListener('focus', this.updateLastUpdate);
  },
  watch: {
    theme(newTheme) {
      localStorage.setItem('theme', newTheme);
    },
  },
};
</script>