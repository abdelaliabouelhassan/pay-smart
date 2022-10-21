<template>
  <section class="w-full flex bg-[#0F2138] dark:bg-[#1F1F1F] md:pt-28 pt-14 md:pb-52 pb-14 font-Inter  relative">
    <div class="m-auto w-full max-w-[1150px] p-6 ">
      <div class="w-full grid grid-cols-1 lg:grid-cols-2">
        <div class="flex flex-col items-start space-y-10 w-full">
          <h1 class="font-semibold md:text-5xl text-[32px] text-white">
           HOW IT WORKS?
          </h1>
          <div class="flex flex-col items-start space-y-4 w-full md:w-auto">
            <div class="bg-[#1B2C42] dark:bg-[#272727] rounded-3xl p-5 w-full  md:w-auto">
              <div class="flex items-start space-x-5">
                <div class="bg-[#0054B8] dark:bg-[#2B71C4] w-[50px] h-[50px] rounded-full flex">
                  <span class="m-auto md:text-2xl text-lg font-semibold text-white"
                    >01</span
                  >
                </div>
                <div class="flex flex-col items-start space-y-2 max-w-[230px] md:max-w-[276px]">
                  <span class="text-2xl font-semibold text-white"
                    >Apply Easily</span
                  >
                  <p class="md:text-lg text-sm font-medium text-[#C3C8CD]">
                   Click "Get Started" and complete the registration and verification.
                  </p>
                </div>
              </div>
            </div>
            <div class="rounded-3xl p-5">
              <div class="flex items-center space-x-5">
                <div class="bg-[#3A495C] w-[50px] h-[50px] rounded-full flex">
                  <span class="m-auto  md:text-2xl text-lg font-semibold text-white"
                    >02</span
                  >
                </div>
                <div class="flex flex-col items-start space-y-2 max-w-[214px] md:max-w-[276px]">
                  <span class="text-2xl font-semibold text-white"
                    >Invite your friends to register on Wallex BG</span
                  >
                </div>
              </div>
            </div>
            <div class="rounded-3xl p-5">
              <div class="flex items-center space-x-5">
                <div class="bg-[#3A495C] w-[50px] h-[50px] rounded-full flex">
                  <span class="m-auto md:text-2xl text-lg font-semibold text-white"
                    >03</span
                  >
                </div>
                <div class="flex flex-col items-start space-y-2 max-w-[276px]">
                  <span class="text-2xl font-semibold text-white">Earn EURST</span>
                </div>
              </div>
            </div>
          </div>
          <button
            class="
              flex
              items-center
              space-x-4
              md:py-3 py-2
              px-6
              bg-[#0054B8] dark:md:bg-[#2B71C4] dark:bg-[#0054B8]
              hover:bg-opacity-80
              rounded-full
            "
          >
            <span class="font-semibold text-base font-Inter text-white"
              >Get Rewarded</span
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
        <div class=" w-full hidden lg:block">
            <div class=" absolute right-0 bottom-0 max-w-[600px] xl:max-w-[705px] h-[676px] w-full overflow-hidden bg-card " >
                  <img src="../../../assets/chartcard.png" class=" w-full h-full object-cover" alt=""> 
            </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style scoped>
 .bg-card {
  background: linear-gradient(134.66deg, #5CBFEA -5.32%, #1A64BD 99.69%);border-radius: 60px 0px 0px 0px;
 }
</style>