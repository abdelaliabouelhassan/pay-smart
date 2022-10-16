<template>
  <section
    class="
      w-full
      flex
      bg-[#F5F6F7]
      font-Inter
      dark:bg-[#1C1C1C]
      pt-36
      overflow-hidden
    "
  >
    <div class="w-full relative pb-36">
      <div
        class="
          w-full
          h-full
          max-w-[1170px]
          flex
          items-start
          justify-between
          m-auto
        "
      >
        <div class="max-w-[515px] w-full pt-24 pl-2">
          <div class="flex flex-col items-start space-y-8 w-full z-50">
            <div class="w-full flex flex-col items-start space-y-3 z-50">
              <span
                class="
                  text-2xl text-[#3A495C]
                  font-medium font-Inter
                  dark:text-[#ECEDEF]
                "
                >FAQ</span
              >
              <h1
                class="
                  font-semibold
                  text-6xl text-[#1B2C42]
                  dark:text-white
                  md:whitespace-nowrap
                "
              >
                What can we help <br />
                you with?
              </h1>
            </div>

            <div class="w-full relative z-50">
              <input
                type="text"
                class="
                  w-full
                  h-[60px]
                  rounded-full
                  bg-white
                  placeholder:text-[#A9AFB7]
                  text-base
                  font-semibold font-Inter
                  pl-10
                  pr-44
                  outline-none
                "
                placeholder="Search News"
              />
              <button
                class="
                  flex
                  bg-[#0054B8]
                  border border-[#0054B8]
                  hover:bg-opacity-80
                  w-[137px]
                  h-12
                  rounded-full
                  absolute
                  top-1.5
                  right-2
                "
              >
                <div class="flex items-center space-x-2 m-auto">
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.8287 17.743C15.1048 19.1536 12.9013 20 10.5 20C4.97715 20 0.5 15.5228 0.5 10C0.5 4.47715 4.97715 0 10.5 0C16.0228 0 20.5 4.47715 20.5 10C20.5 12.4013 19.6536 14.6049 18.2429 16.3288L22.2071 20.2929C22.5976 20.6834 22.5976 21.3166 22.2071 21.7071C21.8165 22.0976 21.1834 22.0976 20.7928 21.7071L16.8287 17.743ZM18.5 10C18.5 14.4183 14.9183 18 10.5 18C6.08172 18 2.5 14.4183 2.5 10C2.5 5.58172 6.08172 2 10.5 2C14.9183 2 18.5 5.58172 18.5 10Z"
                      fill="white"
                    />
                  </svg>

                  <span class="text-base font-Inter font-semibold text-white"
                    >Search</span
                  >
                </div>
              </button>
            </div>
          </div>
        </div>
        <div class="">
          <div class="w-full h-[391px] max-w-[416px] relative z-10">
            <img src="../../../assets/faq.png" class="w-full h-full" alt="" />
          </div>
        </div>
      </div>
      <div class="w-full h-full absolute top-0 hidden dark:block">
        <img
          src="../../../assets/darkbg.png"
          class="w-full h-full bg-cover"
          alt=""
        />
      </div>
      <div class="w-full h-full absolute top-0 dark:hidden">
        <img
          src="../../../assets/bgsection2.png"
          class="w-full h-full bg-cover"
          alt=""
        />
      </div>
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


