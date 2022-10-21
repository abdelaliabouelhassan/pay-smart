<template>
  <section class="w-full md:h-[100vh] flex bg-[#F5F6F7] font-Inter dark:bg-[#1C1C1C] pt-36 overflow-hidden">
    <div class="w-full relative md:h-[100vh]">
      <div class=" w-full md:absolute md:bottom-[9rem]">
        <div class="w-full h-full max-w-[1170px] flex md:flex-row flex-col space-y-8 md:space-y-0 items-start m-auto">
        <div class="w-[418px] md:pt-24 pl-2">
          <div class="flex flex-col items-start px-4 md:px-0 space-y-4 md:space-y-8 w-full z-50">
            <div class="w-full flex flex-col items-start space-y-1 md:space-y-3 z-50">
              <span
                class="
                  md:text-2xl text-base text-[#3A495C]
                  font-medium font-Inter
                  dark:text-[#ECEDEF]
                "
                >Become an Affiliate</span
              >
              <h1
                class="
                  font-semibold
                  md:text-6xl text-[32px] text-[#1B2C42]
                  dark:text-white
                  lg:whitespace-nowrap
                "
              >
                Wallex Aflliates
              </h1>
            </div>

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
        </div>
        <div class="w-full h-[376px] md:h-[542px] max-w-[677.6px] relative z-10">
          <img
            src="../../../assets/users.png"
            class="w-full h-full absolute xl:-right-28 lg:-right-20 sm:block hidden "
            alt=""
          />
           <img
            src="../../../assets/users111.png"
            class="w-full h-full absolute xl:-right-28 lg:-right-20 sm:hidden block "
            alt=""
          />
        </div>
      </div>
      </div>
    

       <img
          src="../../../assets/hoverheroeffect.png"
          class="w-full h-full md:h-auto absolute object-none md:object-cover bottom-[24px] md:bottom-auto  top-0 dark:hidden"
          alt=""
        />
        <img
          src="../../../assets/hoverheroeffectdark.png"
          class="w-full h-full absolute object-none md:object-cover bottom-[24px] md:bottom-auto   top-0 dark:block md:hidden"
          alt=""
        />
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {};
  },
};
</script>


