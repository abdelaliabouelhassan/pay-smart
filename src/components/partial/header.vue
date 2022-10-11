<template>
  <div class="w-full relative">
    <div class="w-full justify-between flex items-center px-4 py-4  max-w-[1060px] m-auto absolute inset-x-0 top-0 ">
      <div>
        <a href="/">
          <MainLogo />
        </a>
      </div>
      <div class="flex items-center space-x-10">
        <router-link
          to="/exchange"
          class="text-[#3A495C] dark:text-[#A9AFB7] font-medium text-base font-PlusJakartaSans hover:text-opacity-60"
          >Exchange</router-link
        >
        <router-link
          to="/custody"
          class="text-[#3A495C] dark:text-[#A9AFB7]  font-medium text-base font-PlusJakartaSans hover:text-opacity-60"
          >Custody</router-link
        >
        <router-link
          to="/atm"
          class="text-[#3A495C] dark:text-[#A9AFB7]  font-medium text-base font-PlusJakartaSans hover:text-opacity-60"
          >ATM</router-link
        >
        <router-link
          to="/about"
          class="text-[#3A495C] dark:text-[#A9AFB7]  font-medium text-base font-PlusJakartaSans hover:text-opacity-60"
          >About</router-link
        >
        <router-link
          to="/buy-crypto"
          class="text-[#3A495C] dark:text-[#A9AFB7] font-medium text-base font-PlusJakartaSans hover:text-opacity-60"
          >Buy Crypto</router-link
        >
      </div>
      <div class="flex items-center space-x-4">
        <a href="/" class="text-[#1B2C42] dark:text-white  no-underline border dark:border-white border-[#E0E2E5] rounded-full py-1 px-4 font-semibold text-base hover:text-opacity-60"
          >Login</a
        >
        <div class="flex items-center space-x-2 cursor-pointer">
          <div class="w-8 h-8 rounded-full overflow-hidden">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2060_15328)">
                <path
                  d="M32 16.0011C32 14.044 31.648 12.1692 31.0048 10.4359L16 9.74023L0.995188 10.4359C0.352063 12.1692 0 14.044 0 16.0011C0 17.9582 0.352063 19.833 0.995188 21.5663L16 22.262L31.0048 21.5663C31.648 19.833 32 17.9582 32 16.0011Z"
                  fill="#496E2D"
                />
                <path
                  d="M15.9999 32.0002C22.8794 32.0002 28.7441 27.6582 31.0047 21.5654H0.995117C3.2558 27.6582 9.12049 32.0002 15.9999 32.0002Z"
                  fill="#D80027"
                />
                <path
                  d="M0.995117 10.4338H31.0048C28.7441 4.34102 22.8794 -0.000976562 15.9999 -0.000976562C9.12049 -0.000976562 3.2558 4.34102 0.995117 10.4338Z"
                  fill="#F0F0F0"
                />
              </g>
              <defs>
                <clipPath id="clip0_2060_15328">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <span class="text-base font-semibold font-Inter text-[#3A495C] dark:text-[#A9AFB7]"
            >BG</span
          >
          <div>
            <svg
             class=" fill-current dark:text-[#A9AFB7] text-[#3A495C]"
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
               class=" fill-current"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9 7.58579L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L9.70711 9.70711C9.31658 10.0976 8.68342 10.0976 8.29289 9.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                
              />
            </svg>
          </div>
        </div>
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
};
</script>