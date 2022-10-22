<template>
  <section
    class="
      w-full
      flex
      bg-[#0054B8]
      font-Inter
      dark:bg-[#2B71C4]
      md:py-36 py-14
      overflow-hidden
    "
  >
    <div
      class="
        w-full
        h-full
        max-w-[1150px] p-6
        flex flex-col
        items-center
        m-auto
        md:space-y-8 space-y-2
      "
    >
      <span class="md:text-2xl text-sm font-semibold font-Inter text-[#C3C8CD]"
        >News Room</span
      >
      <span class="md:text-6xl text-[32px] max-w-[308px] md:max-w-max text-center font-semibold text-white font-Inter"
        >What are you looking for?</span
      >

      <div class=" w-full max-w-[697px] pt-5 md:pt-0">
        <div class="w-full max-w-[697px] relative">
        <input
          type="text"
          class="
            w-full
            md:h-[60px] h-[44px]
            rounded-full
            bg-white
            placeholder:text-[#A9AFB7]
            md:text-base text-xs
            font-semibold font-Inter
            md:pl-10 pl-6 pr-44
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
            md:h-12 h-[36px]
            rounded-full absolute md:top-1.5 top-1 right-1 md:right-2
          "
        >
          <div class=" flex
            items-center
            space-x-2 m-auto">
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
  </section>
</template>

