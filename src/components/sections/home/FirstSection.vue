<template>
  <section
    class="
      w-full
      flex
      bg-[#F5F6F7]
      dark:bg-gradient-to-t
      from-[#282828]
      to-[#030303]
      pt-48
      relative overflow-hidden
    "
  >
    <div class="m-auto w-full md:pt-96 pt-72 ">
      <div class="w-full h-full overflow-hidden">
       <div class=" max-w-[712px] w-full m-auto relative">
         <img
          src="../../../assets/mobilewallex.png"
          alt=""
          class="w-full object-fill m-auto max-w-[283px] md:max-w-[712px] "
        />
         <img
          id="wallexcoin3"
          src="../../../assets/wallexcoin3.png"
          alt=""
          class=" absolute top-0 -left-72 bounce-wallex md:block hidden"
        />
          <img
            id="tether"
            src="../../../assets/tether.png"
            alt=""
            class=" absolute top-24 -right-24 bounce-tether md:block hidden">
          <img
           id="bitcoin1"
            src="../../../assets/bitcoin-1.png"
            alt=""
            class=" absolute bottom-10 -right-64 bounce-bitcoin md:block hidden">

       </div>
        <img
          src="../../../assets/hoverheroeffect.png"
          class="w-full absolute object-cover bottom-0 dark:hidden"
          alt=""
        />
        <img
          src="../../../assets/hoverheroeffectdark.png"
          class="w-full absolute object-cover bottom-0 dark:block hidden"
          alt=""
        />
      </div>
      <div class="w-full absolute top-32  px-6">
        <div class="w-full flex flex-col items-center space-y-2">
          <div class="flex flex-col items-center md:-space-y-8  relative">
            <h1
              class="
                text-[#1B2C42]
                dark:text-white
                font-semibold font-Inter
                md:text-[90px] text-center text-[32px]
              "
            >
              Pay smart,
            </h1>
            <h1
              class="
                text-[#1B2C42]
                dark:text-white
                font-semibold font-Inter
                  md:text-[90px] text-center text-[32px]
              "
            >
              Pay with Wallex
            </h1>
            <div class="absolute top-28 -left-56 md:block hidden">
              <img id="ethereum3" src="../../../assets/ethereum3.png" class="  bounce-ethereum3 z-50" alt="" />
            </div>
             <div class="absolute top-28 -right-56 md:block hidden">
              <img id="solana" src="../../../assets/solana.png" class=" bounce-solana z-50" alt="" />
            </div>
          </div>
          <div class="flex flex-col items-center space-y-8">
            <span
              class="
                font-medium font-Inter
                md:text-xl text-lg text-[#616C7C]
                dark:text-[#C3C8CD] text-center
              "
              >Access, Manage and spend your crypto and fiat anytime
              easily.</span
            >

            <div class="relative max-w-[404px] w-full">
              <input
                type="text"
                class="
                  w-full
                  bg-white
                  dark:bg-[#272727]
                  h-[52px]
                  outline-none
                  rounded-full
                  pl-5
                  pr-40
                  placeholder-[#A9AFB7]
                  dark:text-white
                  md:text-base text-xs
                  font-medium
                "
                placeholder="Your work email"
              />
              <button
                class="
                  flex
                  items-center
                  space-x-2
                  py-3
                  px-6
                  absolute
                  right-0.5
                  top-0.5
                  bg-[#0054B8]
                  dark:bg-[#2B71C4]
                  hover:bg-opacity-80
                  rounded-full
                "
              >
                <span class="font-semibold text-base font-Inter text-white"
                  >Get Started</span
                >
                <div>
                  <svg
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9.70711 8.29289C10.0976 8.68342 10.0976 9.31658 9.70711 9.70711L1.70711 17.7071C1.31658 18.0976 0.683417 18.0976 0.292893 17.7071C-0.0976311 17.3166 -0.0976311 16.6834 0.292893 16.2929L7.58579 9L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  //paralix effect
  mounted() {
    window.addEventListener("scroll", this.scrollEffect);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollEffect);
  },
  methods: {
    scrollEffect() {
      const wallexcoin3 = document.getElementById("wallexcoin3");
      const tether = document.getElementById("tether");
      const bitcoin1 = document.getElementById("bitcoin1");
      const ethereum3 = document.getElementById("ethereum3");
      const solana = document.getElementById("solana");
      const value = window.scrollY;
      wallexcoin3.style.transform = `translateY(${value * 0.5}px)`;
      tether.style.transform = `translateY(${value * 0.2}px)`;
      bitcoin1.style.transform = `translateY(${value * 0.1}px)`;
      ethereum3.style.transform = `translateY(${value * 0.2}px)`;
      solana.style.transform = `translateY(${value * 0.6}px)`;
    },
      
  },

};
</script>


