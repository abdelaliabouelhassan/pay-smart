<template>
  <div class="w-full relative">
    <div
      class="
        w-full
        justify-between
        flex
        items-center
        px-4
        py-4
        max-w-[1060px]
        m-auto
        absolute
        inset-x-0
        top-0
      "
    >
      <div>
        <router-link to="/">
          <MainLogo />
        </router-link>
      </div>
      <div class="flex items-center space-x-10">
        <router-link
          to="/exchange"
          class="
            text-[#3A495C]
            font-medium
            text-base
            font-PlusJakartaSans
            hover:text-opacity-60
          "
          :class="{
            'dark:text-white': $route.name === 'Exchange',
            'dark:text-[#A9AFB7]': $route.name !== 'Exchange',
          }"
          >Exchange</router-link
        >
        <router-link
          to="/custody"
          class="
            text-[#3A495C]
            font-medium
            text-base
            font-PlusJakartaSans
            hover:text-opacity-60
          "
          :class="{
            'dark:text-white': $route.name === 'Custody',
            'dark:text-[#A9AFB7]': $route.name !== 'Custody',
          }"
          >Custody</router-link
        >
        <router-link
          to="/atm"
          class="
            text-[#3A495C]
            font-medium
            text-base
            font-PlusJakartaSans
            hover:text-opacity-60
          "
          :class="{
            'dark:text-white': $route.name === 'Exchange',
            'dark:text-[#A9AFB7]': $route.name !== 'Atm',
          }"
          >ATM</router-link
        >
        <router-link
          to="/about"
          class="
            text-[#3A495C]
            font-medium
            text-base
            font-PlusJakartaSans
            hover:text-opacity-60
          "
          :class="{
            'dark:text-white': $route.name === 'About',
            'dark:text-[#A9AFB7]': $route.name !== 'About',
          }"
          >About</router-link
        >
        <router-link
          to="/buy-crypto"
          class="
            text-[#3A495C]
            font-medium
            text-base
            font-PlusJakartaSans
            hover:text-opacity-60
          "
          :class="{
            'dark:text-white': $route.name === 'Buy-Crypto',
            'dark:text-[#A9AFB7]': $route.name !== 'Buy-Crypto',
          }"
          >Buy Crypto</router-link
        >
      </div>
      <div class="flex items-center space-x-4">
        <a
          href="/"
          class="
            text-[#1B2C42]
            dark:text-white
            no-underline
            border
            dark:border-white
            border-[#E0E2E5]
            rounded-full
            py-1
            px-4
            font-semibold
            text-base
            hover:text-opacity-60
          "
          >Login</a
        >
        <div
          class="flex items-center space-x-2 cursor-pointer relative"
          @click="show = !show"
        >
          <div class="w-8 h-8 rounded-full overflow-hidden">
            <img
              class="w-full h-full object-cover"
              :src="selectedLang.flag"
              alt=""
            />
          </div>
          <span
            class="
              text-base
              font-semibold font-Inter
              text-[#3A495C]
              dark:text-[#A9AFB7]
            "
            >{{ selectedLang.name }}</span
          >
          <div>
            <svg
              :class="{ 'top-arrow': show }"
              class="fill-current dark:text-[#A9AFB7] text-[#3A495C]"
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill-current"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9 7.58579L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L9.70711 9.70711C9.31658 10.0976 8.68342 10.0976 8.29289 9.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
              />
            </svg>
          </div>

          <div
            v-if="show"
            class="
              flex flex-col
              z-50
              items-start
              space-y-4
              p-4
              bg-gray-100
              shadow-sm
              font-Inter
              dark:bg-[#F5F6F7]
              rounded-2xl
              top-10
              absolute
            "
          >
            <a
              v-for="item in lang"
              :key="item"
              @click="selecteLang(item.name)"
              href="#"
              class="w-full space-x-2 flex items-center cursor-pointer group"
            >
              <div class="w-8 h-8 rounded-full overflow-hidden">
                <img
                  class="w-full h-full object-cover"
                  :src="item.flag"
                  alt=""
                />
              </div>
              <span
                class="
                  text-base
                  font-semibold font-Inter
                  text-[#1C1C1C]
                  group-hover:text-opacity-75
                "
                >{{ item.name }}</span
              >
            </a>
          </div>
        </div>
         <label
          for="checked-toggle"
          class="inline-flex relative items-center cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="checked-toggle"
            class="sr-only peer"
             v-model="DarkMode"
            checked
          />
          <div
            class="
              w-11
              h-6
              bg-gray-200
              rounded-full
              peer
              peer-focus:ring-4 peer-focus:ring-blue-300
              dark:peer-focus:ring-blue-800 dark:bg-gray-700
              peer-checked:after:translate-x-full
              peer-checked:after:border-white
              after:content-['']
              after:absolute
              after:top-0.5
              after:left-[2px]
              after:bg-white
              after:border-gray-300
              after:border
              after:rounded-full
              after:h-5
              after:w-5
              after:transition-all
              dark:border-gray-600
              peer-checked:bg-blue-600
            "
          ></div>
        </label>
      </div>
    </div>
  </div>
</template>


<script>
import MainLogo from "../Icons/MainLogo.vue";
export default {
  components: {
    MainLogo,
  },
  data() {
    return {
      show: false,
      selectedLang: "BG",
      DarkMode:false,
      lang: [
        {
          name: "BG",
          flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
        },
        {
          name: "UK",
          flag: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg",
        },
      ],
    };
  },
  methods: {
    selecteLang(lang) {
      this.selectedLang = lang;
    },
  },
  computed: {
    selectedLang() {
      return this.lang.find((item) => item.name === this.selectedLang);
    },
  },
  watch: {
    DarkMode() {
      if (this.DarkMode) {
        document.documentElement.classList.add("dark");
        //add to local storage
        localStorage.setItem("darkMode", "enabled");
      } else {
        document.documentElement.classList.remove("dark");
        //remove from local storage
        localStorage.setItem("darkMode", null);
      }
    },
  },
  mounted() {
    if (localStorage.getItem("darkMode") === "enabled") {
      this.DarkMode = true;
    }
  },

};
</script>


<style scoped>
.top-arrow {
  transform: rotate(180deg);
}
</style>