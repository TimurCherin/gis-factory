<template>
  <div
    class="h-screen flex flex-col overflow-hidden"
    :class="theme === 'dark' ? 'bg-gray-950 text-gray-50' : 'bg-white text-black'"
  >
    <div class="flex-1 flex overflow-hidden min-h-0 w-full">
      <div
        :class="[
          'w-14 flex flex-col py-3 relative',
          theme === 'dark' ? 'bg-gray-900 border-gray-700 border-r' : 'bg-gray-200 border-gray-300 border-r',
        ]"
      >
        <div class="flex items-center justify-center mb-4 relative">
          <div class="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-globe h-7 w-7 text-blue-500"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <span
              :class="[
                'text-[10px] font-semibold mt-1',
                theme === 'dark' ? 'text-gray-200' : 'text-gray-800',
              ]"
            >
              GIS
            </span>
          </div>
        </div>

        <div
          v-for="btn in buttons"
          :key="btn.route"
          class="relative"
          @mouseenter="hovered = btn.route"
          @mouseleave="hovered = null"
        >
          <button
            @click="navigate(btn.route)"
            :class="[
              'inline-flex items-center justify-center h-11 w-11 mx-1 mb-2 transition-colors rounded-md relative',
              theme === 'dark'
                ? currentRoute === btn.route
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'text-gray-300 hover:text-gray-50 hover:bg-gray-800'
                : currentRoute === btn.route
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-300',
            ]"
          >
            <component :is="btn.icon" />
          </button>

          <transition name="fade">
            <div
              v-if="hovered === btn.route"
              class="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 rounded bg-gray-800 text-white text-xs whitespace-nowrap select-none pointer-events-none z-50"
            >
              {{ btn.label }}
            </div>
          </transition>
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
</template>

<script>
import { h } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const HomeIcon = {
  render() {
    return h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        viewBox: '0 0 24 24',
        class: 'h-5 w-5',
      },
      [
        h('path', { d: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
        h('polyline', { points: '9 22 9 12 15 12 15 22' }),
      ]
    );
  },
};

const MapIcon = {
  render() {
    return h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        viewBox: '0 0 24 24',
        class: 'h-5 w-5',
      },
      [
        h('path', {
          d: 'M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z',
        }),
        h('path', { d: 'M15 5.764v15' }),
        h('path', { d: 'M9 3.236v15' }),
      ]
    );
  },
};

const DatabaseIcon = {
  render() {
    return h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        viewBox: '0 0 24 24',
        class: 'h-5 w-5',
      },
      [
        h('ellipse', { cx: '12', cy: '5', rx: '9', ry: '3' }),
        h('path', { d: 'M3 5V19A9 3 0 0 0 21 19V5' }),
        h('path', { d: 'M3 12A9 3 0 0 0 21 12' }),
      ]
    );
  },
};

const CalculatorIcon = {
  render() {
    return h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        viewBox: '0 0 24 24',
        class: 'h-5 w-5',
      },
      [
        h('rect', { width: '16', height: '20', x: '4', y: '2', rx: '2' }),
        h('line', { x1: '8', y1: '6', x2: '16', y2: '6' }),
        h('line', { x1: '16', y1: '14', x2: '16', y2: '18' }),
        h('path', { d: 'M16 10h.01' }),
        h('path', { d: 'M12 10h.01' }),
        h('path', { d: 'M8 10h.01' }),
        h('path', { d: 'M12 14h.01' }),
        h('path', { d: 'M8 14h.01' }),
        h('path', { d: 'M12 18h.01' }),
        h('path', { d: 'M8 18h.01' }),
      ]
    );
  },
};

export default {
  data() {
    return {
      theme: 'dark',
      hovered: null,
      buttons: [
        { route: '/', label: 'Главная', icon: HomeIcon },
        { route: '/map', label: 'Карта', icon: MapIcon },
        { route: '/registers', label: 'Реестры', icon: DatabaseIcon },
        { route: '/calculator', label: 'Калькулятор', icon: CalculatorIcon },
      ],
    };
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    },
  },
  methods: {
    navigate(route) {
      this.$router.push(route);
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
