<template>
  <section
    class="
      w-full
      flex
      bg-[#0055B7]
      font-Inter
      dark:bg-[#1C1C1C]
      pt-24
       
    "
  >
    <div
      class="w-full h-full bg-no-repeat bg-contain bg-right-bottom relative"
    
    >
      <div class="w-full max-w-[1150px] m-auto md:pt-24 pt-11 pb-48 px-5">
        <div class="w-full grid grid-cols-1  md:grid-cols-2 gap-10">
          <div class="flex flex-col items-start space-y-8 max-w-[539px]">
            <div class="flex flex-col items-start space-y-2 md:space-y-4">
              <h1 class="md:font-medium font-semibold text-base md:text-2xl text-[#ECEDEF] dark:text-white">
                Careers at Wallex
              </h1>
              <p class="font-semibold md:text-6xl text-[32px] text-white md:leading-[68px] leading-[42px] ">
                Unlock the Best <br> of Your self and Become Free
              </p>
              <span class="text-[#C3C8CD] font-medium   md:font-normal font-Inter text-lg leading-[30px]"
                >Alternative Banking solution delivering innovation and
                freedom.</span
              >
            </div>
            <button
              class="
                flex
                items-center
                space-x-5
                md:py-3 py-2
                px-6
                 bg-white
                dark:md:bg-[#2B71C4] dark:bg-white
                hover:bg-opacity-80 border dark:border-[#0054B8]
                rounded-full
              "
            >
              <span class="font-semibold text-base font-Inter dark:text-[#0054B8] dark:md:text-white text-[#0054B8]"
                >Get Started</span
              >
              <div>
                <svg
                 class=" fill-current dark:text-[#0054B8] dark:md:text-white text-[#0054B8]"
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
                     class=" fill-current"
                  />
                </svg>
              </div>
            </button>
          </div>

          <div class="w-full h-full pt-10 md:pt-0">
            <div class="absolute bottom-0 right-0">
              <img
                src="../../../assets/wallexcoin.png"
                class="w-full h-full object-cover hidden md:block"
                alt=""
              />
               <img
                src="../../../assets/wallexcoin11.png"
                class="w-full h-full object-cover  md:hidden"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import bgsection2 from "../../../assets/bgsection2.png";
export default {
  data() {
    return {
      bgsection2,
    };
  },
};
</script>


