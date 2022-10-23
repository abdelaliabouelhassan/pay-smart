<template>
  <section
    class="
      w-full
      flex
      bg-[#F5F6F7]
      font-Inter
      dark:bg-[#1C1C1C]
      md:pt-24 md:h-[100vh]  relative overflow-hidden
    "
  >
    <div
      class="w-full   bg-no-repeat bg-contain    bg-right-bottom"
     
    >
      <div class="w-full max-w-[1150px] m-auto md:pt-28 pt-5 pb-10 px-5 z-50">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-10 z-50">
          <div class="flex flex-col items-start space-y-2 md:space-y-6 w-full md:max-w-[539px] z-50 pt-28">
          <div class=" w-full flex flex-col items-start space-y-2 md:space-y-3 z-50">
              <span class=" md:text-2xl text-base text-[#3A495C] font-semibold md:font-medium font-Inter dark:text-[#ECEDEF]">The Next Generation</span>
            <h1 class="font-semibold  text-[32px] md:text-6xl text-[#1B2C42] dark:text-white lg:whitespace-nowrap">
             Custody of Assets
            </h1>
          </div>
            <p class="md:font-normal  md:pl-[2.5px] pl-0.5 font-medium  text-[#616C7C] dark:md:text-[#A9AFB7] dark:text-[#C3C8CD]  text-lg z-50 pb-6 md:pb-0">
              Qualified Custody for your Assets in Secure, Compliant, Accessible and Specialized Financial Service.
            </p>
            <button
              class="
               z-50
                flex
                items-center
                space-x-5
                md:py-3 py-2
                px-6
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

         
           <div class=" w-full md:h-full h-[208px]  ">
            <div class=" absolute   w-full   bottom-0 right-5 md:right-auto md:w-auto z-50">
              <img src="../../../assets/wallexSafe.png" class=" max-w-[302px] md:max-w-max m-auto w-full h-full z-50" alt="">
            </div>
          </div>
        </div>
      </div>
        <img
          src="../../../assets/hoverheroeffect.png"
          class="w-full h-full md:h-auto absolute object-none md:object-cover bottom-[-81px] md:bottom-0 dark:hidden"
          alt=""
        />
        <img
          src="../../../assets/hoverheroeffectdark.png"
          class="w-full h-full absolute object-none md:object-cover bottom-[-81px] md:bottom-0 dark:block md:hidden"
          alt=""
        />
    
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


