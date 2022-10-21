<template>
  <section class="w-full bg-white dark:bg-[#161616] font-Inter space-y-20 md:space-y-64 md:py-36 py-28">
    <div class="w-full  max-w-[1150px] m-auto p-6">
      <div class="w-full flex md:flex-row flex-col items-start space-y-4 md:space-y-0 md:justify-between md:items-center">
        <div class="flex flex-col items-start space-y-2">
          <span class="font-medium text-[#3A495C] dark:text-[#ECEDEF] font-Inter text-2xl hidden md:block"
            >About Us</span
          >
          <p class="text-[#1B2C42] dark:text-white font-semibold text-[32px] leading-[42px] md:leading-[68px] md:text-6xl font-Inter max-w-xl">
            The All in <br />
            One Trust and Compliant Solution
          </p>
        </div>
        <div class="flex flex-col items-start space-y-8">
          <span
            class="md:font-normal font-medium text-[#616C7C] dark:md:text-[#A9AFB7] dark:text-[#C3C8CD] font-Inter text-lg md:max-w-[267px] leading-[30px]"
            >Alternative Banking solution delivering innovation and
            freedom.</span
          >
          <button
            class="
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
    </div>


    <div class=" w-full max-w-[343px]  h-[131px] md:max-w-[900px] lg:max-w-[1150px] bg-[#F5F8FC] dark:bg-[#1C1C1C]  md:h-[369px] m-auto rounded-3xl flex">
        <div class=" m-auto  -mt-16 md:-mt-52 ">
            <img src="../../../assets/LogoCard.png" class=" w-full h-full object-cover dark:hidden" alt="">
             <img src="../../../assets/LogoCardDark.png" class=" w-full h-full object-cover hidden dark:block" alt="">
            <div class=" h-1 w-full  blur-[50px]"></div>
        </div>
    </div>
  </section>
</template>