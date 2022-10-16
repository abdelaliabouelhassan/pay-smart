<template>
  <section
    class="
      w-full
      flex
      bg-[#0F2138]
      font-Inter
      dark:bg-[#1C1C1C]
      py-36
      overflow-hidden
    "
  >
    <div
      class="
        w-full
        h-full
        max-w-[1150px]
        flex flex-col
        items-center
        m-auto
        space-y-8
      "
    >
      <div class="w-full flex flex-col items-center space-y-4">
        <span class="text-6xl font-semibold font-Inter text-[#FFFFFF]"
          >Updated news?</span
        >
        <span class="text-lg font-medium text-[#C3C8CD] font-Inter"
          >Subscribe to our news</span
        >
      </div>

      <div class="w-full max-w-[431px] relative">
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
            dark:bg-[#272727]
            dark:text-white text-[#272727]
            pl-10
            pr-44
            outline-none
          "
          placeholder="Your work email"
        />
        <button
          class="
            flex
            dark:bg-[#2B71C4] bg-[#0054B8]
            border dark:border-[#2B71C4]   border-[#0054B8]
            hover:bg-opacity-80
            w-[161px]
            h-12
            rounded-full
            absolute
            top-1.5
            right-2
          "
        >
          <div class="flex items-center space-x-2 m-auto">
            <span class="text-base font-Inter font-semibold text-white"
              >Subscribe</span
            >
            <svg
              width="11"
              height="18"
              viewBox="0 0 11 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.792893 0.292893C1.18342 -0.0976311 1.81658 -0.0976311 2.20711 0.292893L10.2071 8.29289C10.5976 8.68342 10.5976 9.31658 10.2071 9.70711L2.20711 17.7071C1.81658 18.0976 1.18342 18.0976 0.792893 17.7071C0.402369 17.3166 0.402369 16.6834 0.792893 16.2929L8.08579 9L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893Z"
                fill="white"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

