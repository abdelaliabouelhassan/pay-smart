<template>
  <header class="w-full relative px-6 z-[500]">
    <div
      class="
        w-full
        justify-between
        flex
        items-center
        px-6
        py-4
        max-w-[1150px]
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
      <div class="items-center space-x-10 md:flex hidden">
        <router-link
          to="/exchange"
          class="
            font-medium
            text-base
            font-PlusJakartaSans
            hover:text-opacity-60
          "
          :class="{
            'dark:text-white': $route.name === 'Exchange',
            'dark:text-[#A9AFB7]': $route.name !== 'Exchange',
            'text-white': $route.name === 'Career',
            'text-[#3A495C]': $route.name !== 'Career',
          }"
          >Exchange</router-link
        >
        <router-link
          to="/custody"
          class="
            font-medium
            text-base
            font-PlusJakartaSans
            hover:text-opacity-60
          "
          :class="{
            'dark:text-white': $route.name === 'Custody',
            'dark:text-[#A9AFB7]': $route.name !== 'Custody',
            'text-white': $route.name === 'Career',
            'text-[#3A495C]': $route.name !== 'Career',
          }"
          >Custody</router-link
        >
        <router-link
          to="/atm"
          class="
            font-medium
            text-base
            font-PlusJakartaSans
            hover:text-opacity-60
          "
          :class="{
            'dark:text-white': $route.name === 'Atm',
            'dark:text-[#A9AFB7]': $route.name !== 'Atm',
            'text-white': $route.name === 'Career',
            'text-[#3A495C]': $route.name !== 'Career',
          }"
          >ATM</router-link
        >
        <router-link
          to="/about"
          class="
            font-medium
            text-base
            font-PlusJakartaSans
            hover:text-opacity-60
          "
          :class="{
            'dark:text-white': $route.name === 'About',
            'dark:text-[#A9AFB7]': $route.name !== 'About',
            'text-white': $route.name === 'Career',
            'text-[#3A495C]': $route.name !== 'Career',
          }"
          >About</router-link
        >
        <router-link
          to="/buy-crypto"
          class="
            font-medium
            text-base
            font-PlusJakartaSans
            hover:text-opacity-60
          "
          :class="{
            'dark:text-white': $route.name === 'BuyCrypto',
            'dark:text-[#A9AFB7]': $route.name !== 'BuyCrypto',
            'text-white': $route.name === 'Career',
            'text-[#3A495C]': $route.name !== 'Career',
          }"
          >Buy Crypto</router-link
        >
      </div>
      <div class="items-center space-x-4 md:flex hidden">
        <a
          href="/"
          class="
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
          :class="{
            'text-white': $route.name === 'Career',
            'text-[#1B2C42]': $route.name !== 'Career',
          }"
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
            class="text-base font-semibold font-Inter dark:text-[#A9AFB7]"
            :class="{
              'text-white': $route.name === 'Career',
              'text-[#3A495C]': $route.name !== 'Career',
            }"
            >{{ selectedLang.name }}</span
          >
          <div>
            <svg
              :class="{
                'top-arrow': show,
                'text-white': $route.name === 'Career',
                'text-[#3A495C]': $route.name !== 'Career',
              }"
              class="fill-current dark:text-[#A9AFB7]"
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
        <div>
          <button class="pt-2">
            <svg
              @click="DarkMode = false"
              v-if="DarkMode"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white hover:text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
            <svg
              v-else
              @click="DarkMode = true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 hover:text-gray-400"
              :class="{
                'text-white': $route.name === 'Career',
                'text-black': $route.name !== 'Career',
              }"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="flex items-center space-x-4 md:hidden">
        <button @click="open = !open">
          <svg
            :class="{ 'top-arrow': open , 'text-white': $route.name == 'Career','text-[#25314C]': $route.name != 'Career'}"
            class="fill-current dark:text-white "
            width="28"
            height="20"
            viewBox="0 0 28 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="fill-current"
              d="M9.99996 2.00033C9.99996 1.26433 10.5973 0.666992 11.3333 0.666992H26C26.736 0.666992 27.3333 1.26433 27.3333 2.00033C27.3333 2.73633 26.736 3.33366 26 3.33366H11.3333C10.5973 3.33366 9.99996 2.73633 9.99996 2.00033ZM26 8.66699H1.99996C1.26396 8.66699 0.666626 9.26433 0.666626 10.0003C0.666626 10.7363 1.26396 11.3337 1.99996 11.3337H26C26.736 11.3337 27.3333 10.7363 27.3333 10.0003C27.3333 9.26433 26.736 8.66699 26 8.66699ZM16.6666 16.667H1.99996C1.26396 16.667 0.666626 17.2643 0.666626 18.0003C0.666626 18.7363 1.26396 19.3337 1.99996 19.3337H16.6666C17.4026 19.3337 18 18.7363 18 18.0003C18 17.2643 17.4026 16.667 16.6666 16.667Z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="w-full px-6 flex">
      <div
        v-if="open"
        id="navlinks"
        class="
          z-[500]
           m-auto w-full 
          dark:bg-[#272727] left-0
          bg-white
          md:hidden
          p-6
          absolute 
          top-20
          border
          dark:border-[#343434]
          border-[#ECEDEF] border-x-0
          space-y-4
        "
      >
        <div class="items-start space-y-4 flex flex-col">
          <router-link
            to="/exchange"
            class="
              font-medium
              text-base
              font-PlusJakartaSans
              hover:text-opacity-60
              transition
            "
            :class="{
              'dark:text-white': $route.name === 'Exchange',
              'dark:text-[#A9AFB7]': $route.name !== 'Exchange',
              
              'text-[#3A495C]': $route.name !== 'Career',
            }"
            >Exchange</router-link
          >
          <router-link
            to="/custody"
            class="
              font-medium
              text-base
              font-PlusJakartaSans
              hover:text-opacity-60
              transition
            "
            :class="{
              'dark:text-white': $route.name === 'Custody',
              'dark:text-[#A9AFB7]': $route.name !== 'Custody',
           
              'text-[#3A495C]': $route.name !== 'Career',
            }"
            >Custody</router-link
          >
          <router-link
            to="/atm"
            class="
              font-medium
              text-base
              font-PlusJakartaSans
              hover:text-opacity-60
              transition
            "
            :class="{
              'dark:text-white': $route.name === 'Atm',
              'dark:text-[#A9AFB7]': $route.name !== 'Atm',
             
              'text-[#3A495C]': $route.name !== 'Career',
            }"
            >ATM</router-link
          >
          <router-link
            to="/about"
            class="
              font-medium
              text-base
              font-PlusJakartaSans
              transition
              hover:text-opacity-60
            "
            :class="{
              'dark:text-white': $route.name === 'About',
              'dark:text-[#A9AFB7]': $route.name !== 'About',
             
              'text-[#3A495C]': $route.name !== 'Career',
            }"
            >About</router-link
          >
          <router-link
            to="/buy-crypto"
            class="
              font-medium
              text-base
              font-PlusJakartaSans
              transition
              hover:text-opacity-60
            "
            :class="{
              'dark:text-white': $route.name === 'BuyCrypto',
              'dark:text-[#A9AFB7]': $route.name !== 'BuyCrypto',
             
              'text-[#3A495C]': $route.name !== 'Career',
            }"
            >Buy Crypto</router-link
          >
        </div>
        <div class="items-center space-x-4 flex transition">
          <a
            href="/"
            class="
              dark:text-white
              no-underline
              border
              dark:border-white
              border-[#E0E2E5]
              transition
              rounded-full
              py-1
              px-4
              font-semibold
              text-base
              hover:text-opacity-60
            "
            :class="{
             
              'text-[#1B2C42]': $route.name !== 'Career',
            }"
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
              class="text-base font-semibold font-Inter dark:text-[#A9AFB7]"
              :class="{
                
                'text-[#3A495C]': $route.name !== 'Career',
              }"
              >{{ selectedLang.name }}</span
            >
            <div>
              <svg
                :class="{
                  'top-arrow': show,
              
                  'text-[#3A495C]': $route.name !== 'Career',
                }"
                class="fill-current dark:text-[#A9AFB7]"
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
          <div>
            <button class="pt-2">
              <svg
                @click="DarkMode = false"
                v-if="DarkMode"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white hover:text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
              <svg
                v-else
                @click="DarkMode = true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 hover:text-gray-400"
                :class="{
                  
                  'text-black': $route.name !== 'Career',
                }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
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
      DarkMode: false,
      open: false,
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

  created() {
    this.$router.afterEach(() => {
      this.open = false;
    });
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

#navlinks {
  animation: traslate 0.5s ease-in-out;
}

@keyframes traslate {
  0% {
    transform: translateY(-100%);
   
    width: 0;
  }
  30% {
    width: 30%;
  }
  100% {
    transform: translateY(-0%);
   

    width: 100%;
  }
}
</style>