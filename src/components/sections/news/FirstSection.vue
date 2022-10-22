<template>
  <section
    class="
      w-full
      flex
      bg-[#F5F6F7]
      font-Inter
      dark:bg-[#1C1C1C]
       md:pt-52 pt-32
      md:overflow-hidden md:h-[100vh]
    "
  >
    <div class="w-full relative md:pb-28 pb-14 z-50">
      <div class="w-full h-full max-w-[1150px] flex items-start m-auto px-4 md:px-0">
        <div class="flex md:items-center md:flex-row items-start flex-col space-y-8 md:space-y-0 md:justify-between w-full">
          <div class="flex w-full flex-col items-start space-y-2 md:space-y-8 max-w-[515px]">
            <h1
              class="
                text-[#1B2C42]
                dark:text-[#FFFFFF]
                font-semibold
                md:text-5xl text-[32px]
                font-Inter md:leading-[58px] leading-[42px]
                z-50
              "
            >
              The Four Dynamics That Will Control Cryptocurrency Adoption In The
              UAE
            </h1>
            <p
              class="
                text-lg text-[#616C7C]
                dark:text-[#A9AFB7]
                font-Inter font-normal leading-[30px]
                z-50 hidden md:block
              "
            >
              The scene is moving quickly, whether you're an e-commerce company
              attempting to determine what the introduction of stablecoins means
              for you or a crypto trading platform...
            </p>
             <p
              class="
                text-lg text-[#616C7C]
                dark:text-[#A9AFB7]
                font-Inter font-normal leading-[30px]
                z-50 md:hidden pb-6 md:pb-0
              "
            >
              The scene is moving quickly, whether you're an e-commerce company
              attempting to determine what the...
            </p>
            <button
             @click="goToDetails('dynamics-that-will-control')"
              class="
                flex
                items-center
                space-x-4
                md:py-3 py-2
                px-6
                bg-[#0054B8]
                dark:bg-[#2B71C4]
                hover:bg-opacity-80
                rounded-full
                z-50
              "
            >
              <span
                class="
                  font-semibold
                  text-base
                  font-Inter
                  text-white
                  dark:text-white
                "
                >Read More</span
              >
              <div>
                <svg
                  class="fill-current dark:text-white text-white"
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="fill-current"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9.70711 8.29289C10.0976 8.68342 10.0976 9.31658 9.70711 9.70711L1.70711 17.7071C1.31658 18.0976 0.683417 18.0976 0.292893 17.7071C-0.0976311 17.3166 -0.0976311 16.6834 0.292893 16.2929L7.58579 9L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div
            class="w-full flex flex-col space-y-4 items-center md:max-w-[486px]"
          >
            <div
              class="w-full h-full max-w-[486px] max-h-[486px] relative"
              style="filter: drop-shadow(0px 14px 50px rgba(29, 29, 29, 0.1))"
            >
              <div
                class="w-[full] h-[375px] md:h-full overflow-hidden rounded-3xl" 
              >
                <img class=" w-full h-full hidden md:block" :src="News[active].img" alt="" v-if="News.length > 0" />
                <img class=" w-full h-full md:hidden" src="../../../assets/fili1.png" alt="" v-if="News.length > 0" />
              </div>
              <div class="z-50">
                <button
                 @click="next"
                  class="
                    z-50
                    absolute hidden md:flex
                    w-12
                    h-12
                    top-1/2
                    right-5
                    rounded-full
                    bg-[#0F2138]
                    dark:bg-[#272727]
                    border border-[#0054B8]
                     hover:bg-opacity-60
                  "
                  style="box-shadow: 0px 4px 30px rgba(29, 29, 29, 0.2)"
                >
                  <svg
                    class="m-auto"
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
                </button>
              </div>
            </div>

            <div class="flex items-center space-x-4 z-50">
              <button
                class="w-10 h-2 rounded-full bg-[#0054B8]"
                v-for="(news, index) in News"
                :key="index"
                @click="setActive(index)"
                :class="{
                  'bg-[#0054B8]': index == active,
                  'bg-[#616C7C]': index != active,
                }"
              ></button>
            </div>
          </div>
        </div>
      </div>
         <img
          src="../../../assets/hoverheroeffect.png"
          class="w-full h-full md:h-auto absolute object-none md:object-cover   bottom-40 md:bottom-0 dark:hidden -z-10"
          alt=""
        />
        <img
          src="../../../assets/hoverheroeffectdark.png"
          class="w-full h-full absolute object-none md:object-cover bottom-40 md:bottom-0 dark:block md:hidden -z-10"
          alt=""
        />
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      active: 0,
      News: [
        {
          img: "/news1.png",
        },
        {
          img: "/news1.png",
        },
        {
          img: "/news1.png",
        },
      ],
    };
  },
  methods: {
    next() {
      this.active++;
      if (this.active > this.News.length - 1) {
        this.active = 0;
      }
    },
    setActive(index){
        this.active = index
    },
    goToDetails(slug){
        this.$router.push({name:'NewsDetails', params:{slug:slug}})
    }
  },
};
</script>


