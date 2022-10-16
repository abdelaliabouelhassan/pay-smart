<template>
  <section
    class="
      w-full
      flex
      bg-white
      font-Inter
      dark:bg-[#161616]
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
        space-y-28
      "
    >
      <h1
        class="dark:text-white text-[#1B2C42] font-semibold text-5xl font-Inter"
      >
        News
      </h1>
      <div class="flex flex-col w-full items-start space-y-10">
        <div class="w-full grid grid-cols-2 gap-8">
          <div
            class="
              w-full
              hover:bg-[#F5F6F7]
              dark:hover:bg-[#1F1F1F]
              p-2
              rounded-3xl
            "
          >
            <div
              class="w-full h-[322px] overflow-hidden rounded-3xl bg-gray-400"
            >
              <img
                src="../../../assets/news2.png"
                class="
                  w-full
                  h-full
                  object-cover
                  hover:scale-125
                  cursor-pointer
                "
                alt=""
              />
            </div>
            <div class="w-full flex flex-col items-start space-y-4 py-4 px-6">
              <span
                class="
                  text-base
                  font-Inter font-medium
                  dark:text-[#A9AFB7]
                  text-[#465466]
                "
                >2022-08-14</span
              >
              <a
                href="#"
                class="
                  no-underline
                  font-Inter font-semibold
                  text-2xl text-[#1B2C42]
                  dark:text-white
                  max-w-[479]
                "
              >
                Can Crypto Address the Biggest Obstacle Facing the Unbanked?
              </a>
              <button
                @click="goToDetails('biggest-obstacle-facing-the-unbanked')"
                class="
                  flex
                  items-center
                  space-x-5
                  py-2.5
                  px-6
                  bg-[#0054B8]
                  dark:bg-[#2B71C4]
                  hover:bg-opacity-80
                  rounded-full
                "
              >
                <span class="font-semibold text-base font-Inter text-white"
                  >Read More</span
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

          <div class="w-full space-y-8">
            <div
              class="
                w-full
                hover:bg-[#F5F6F7]
                dark:hover:bg-[#1F1F1F]
                p-2
                rounded-3xl
                flex
                items-center
              "
            >
              <div
                class="
                  w-full
                  h-[224px]
                  max-w-[224px]
                  overflow-hidden
                  rounded-3xl
                  bg-gray-400
                "
              >
                <img
                  src="../../../assets/news3.png"
                  class="
                    w-full
                    h-full
                    object-cover
                    hover:scale-125
                    cursor-pointer
                  "
                  alt=""
                />
              </div>
              <div class="w-full flex flex-col items-start space-y-4 py-4 px-6">
                <span
                  class="
                    text-base
                    font-Inter font-medium
                    dark:text-[#A9AFB7]
                    text-[#465466]
                  "
                  >2022-08-14</span
                >
                <a
                  href="#"
                  class="
                    no-underline
                    font-Inter font-medium
                    text-lg text-[#1B2C42]
                    dark:text-white
                    max-w-[479]
                  "
                >
                  Can Crypto Address the Biggest Obstacle Facing the Unbanked?
                </a>
                <button
                @click="goToDetails('biggest-obstacle-facing-the-unbanked')"
                  class="
                    flex
                    items-center
                    space-x-5
                    py-2.5
                    px-6
                    bg-[#0054B8]
                    dark:bg-[#2B71C4]
                    hover:bg-opacity-80
                    rounded-full
                  "
                >
                  <span class="font-semibold text-base font-Inter text-white"
                    >Read More</span
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
            <div
              class="
                w-full
                hover:bg-[#F5F6F7]
                dark:hover:bg-[#1F1F1F]
                p-2
                rounded-3xl
                flex
                items-center
              "
            >
              <div
                class="
                  w-full
                  h-[224px]
                  max-w-[224px]
                  overflow-hidden
                  rounded-3xl
                  bg-gray-400
                "
              >
                <img
                  src="../../../assets/news4.png"
                  class="
                    w-full
                    h-full
                    object-cover
                    hover:scale-125
                    cursor-pointer
                  "
                  alt=""
                />
              </div>
              <div class="w-full flex flex-col items-start space-y-4 py-4 px-6">
                <span
                  class="
                    text-base
                    font-Inter font-medium
                    dark:text-[#A9AFB7]
                    text-[#465466]
                  "
                  >2022-08-14</span
                >
                <a
                  href="#"
                  class="
                    no-underline
                    font-Inter font-medium
                    text-lg text-[#1B2C42]
                    dark:text-white
                    max-w-[479]
                  "
                >
                  Can Crypto Address the Biggest Obstacle Facing the Unbanked?
                </a>
                <button
                @click="goToDetails('biggest-obstacle-facing-the-unbanked')"
                  class="
                    flex
                    items-center
                    space-x-5
                    py-2.5
                    px-6
                    bg-[#0054B8]
                    dark:bg-[#2B71C4]
                    hover:bg-opacity-80
                    rounded-full
                  "
                >
                  <span class="font-semibold text-base font-Inter text-white"
                    >Read More</span
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

        <div class="w-full grid grid-cols-3 gap-8">
          <div
            class="
              w-full
              hover:bg-[#F5F6F7]
              dark:hover:bg-[#1F1F1F]
              p-2
              rounded-3xl
            "
          >
            <div
              class="w-full h-[200px] overflow-hidden rounded-3xl bg-gray-400"
            >
              <img
                src="../../../assets/news5.png"
                class="
                  w-full
                  h-full
                  object-cover
                  hover:scale-125
                  cursor-pointer
                "
                alt=""
              />
            </div>
            <div class="w-full flex flex-col items-start space-y-4 py-4 px-6">
              <span
                class="
                  text-base
                  font-Inter font-medium
                  dark:text-[#A9AFB7]
                  text-[#465466]
                "
                >2022-08-14</span
              >
              <a
                href="#"
                class="
                  no-underline
                  font-Inter font-semibold
                  text-2xl text-[#1B2C42]
                  dark:text-white
                  max-w-[479]
                "
              >
                Can Crypto Address the Biggest Obstacle Facing the Unbanked?
              </a>
              <button
              @click="goToDetails('biggest-obstacle-facing-the-unbanked')"
                class="
                  flex
                  items-center
                  space-x-5
                  py-2.5
                  px-6
                  bg-[#0054B8]
                  dark:bg-[#2B71C4]
                  hover:bg-opacity-80
                  rounded-full
                "
              >
                <span class="font-semibold text-base font-Inter text-white"
                  >Read More</span
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
          <div
            class="
              w-full
              hover:bg-[#F5F6F7]
              dark:hover:bg-[#1F1F1F]
              p-2
              rounded-3xl
            "
          >
            <div
              class="w-full h-[200px] overflow-hidden rounded-3xl bg-gray-400"
            >
              <img
                src="../../../assets/news6.png"
                class="
                  w-full
                  h-full
                  object-cover
                  hover:scale-125
                  cursor-pointer
                "
                alt=""
              />
            </div>
            <div class="w-full flex flex-col items-start space-y-4 py-4 px-6">
              <span
                class="
                  text-base
                  font-Inter font-medium
                  dark:text-[#A9AFB7]
                  text-[#465466]
                "
                >2022-08-14</span
              >
              <a
                href="#"
                class="
                  no-underline
                  font-Inter font-semibold
                  text-2xl text-[#1B2C42]
                  dark:text-white
                  max-w-[479]
                "
              >
                Can Crypto Address the Biggest Obstacle Facing the Unbanked?
              </a>
              <button
              @click="goToDetails('biggest-obstacle-facing-the-unbanked')"
                class="
                  flex
                  items-center
                  space-x-5
                  py-2.5
                  px-6
                  bg-[#0054B8]
                  dark:bg-[#2B71C4]
                  hover:bg-opacity-80
                  rounded-full
                "
              >
                <span class="font-semibold text-base font-Inter text-white"
                  >Read More</span
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
          <div
            class="
              w-full
              hover:bg-[#F5F6F7]
              dark:hover:bg-[#1F1F1F]
              p-2
              rounded-3xl
            "
          >
            <div
              class="w-full h-[200px] overflow-hidden rounded-3xl bg-gray-400"
            >
              <img
                src="../../../assets/news7.png"
                class="
                  w-full
                  h-full
                  object-cover
                  hover:scale-125
                  cursor-pointer
                "
                alt=""
              />
            </div>
            <div class="w-full flex flex-col items-start space-y-4 py-4 px-6">
              <span
                class="
                  text-base
                  font-Inter font-medium
                  dark:text-[#A9AFB7]
                  text-[#465466]
                "
                >2022-08-14</span
              >
              <a
                href="#"
                class="
                  no-underline
                  font-Inter font-semibold
                  text-2xl text-[#1B2C42]
                  dark:text-white
                  max-w-[479]
                "
              >
                Can Crypto Address the Biggest Obstacle Facing the Unbanked?
              </a>
              <button
              @click="goToDetails('biggest-obstacle-facing-the-unbanked')"
                class="
                  flex
                  items-center
                  space-x-5
                  py-2.5
                  px-6
                  bg-[#0054B8]
                  dark:bg-[#2B71C4]
                  hover:bg-opacity-80
                  rounded-full
                "
              >
                <span class="font-semibold text-base font-Inter text-white"
                  >Read More</span
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
          <div
            class="
              w-full
              hover:bg-[#F5F6F7]
              dark:hover:bg-[#1F1F1F]
              p-2
              rounded-3xl
            "
          >
            <div
              class="w-full h-[200px] overflow-hidden rounded-3xl bg-gray-400"
            >
              <img
                src="../../../assets/news8.png"
                class="
                  w-full
                  h-full
                  object-cover
                  hover:scale-125
                  cursor-pointer
                "
                alt=""
              />
            </div>
            <div class="w-full flex flex-col items-start space-y-4 py-4 px-6">
              <span
                class="
                  text-base
                  font-Inter font-medium
                  dark:text-[#A9AFB7]
                  text-[#465466]
                "
                >2022-08-14</span
              >
              <a
                href="#"
                class="
                  no-underline
                  font-Inter font-semibold
                  text-2xl text-[#1B2C42]
                  dark:text-white
                  max-w-[479]
                "
              >
                Can Crypto Address the Biggest Obstacle Facing the Unbanked?
              </a>
              <button
              @click="goToDetails('biggest-obstacle-facing-the-unbanked')"
                class="
                  flex
                  items-center
                  space-x-5
                  py-2.5
                  px-6
                  bg-[#0054B8]
                  dark:bg-[#2B71C4]
                  hover:bg-opacity-80
                  rounded-full
                "
              >
                <span class="font-semibold text-base font-Inter text-white"
                  >Read More</span
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
          <div
            class="
              w-full
              hover:bg-[#F5F6F7]
              dark:hover:bg-[#1F1F1F]
              p-2
              rounded-3xl
            "
          >
            <div
              class="w-full h-[200px] overflow-hidden rounded-3xl bg-gray-400"
            >
              <img
                src="../../../assets/news9.png"
                class="
                  w-full
                  h-full
                  object-cover
                  hover:scale-125
                  cursor-pointer
                "
                alt=""
              />
            </div>
            <div class="w-full flex flex-col items-start space-y-4 py-4 px-6">
              <span
                class="
                  text-base
                  font-Inter font-medium
                  dark:text-[#A9AFB7]
                  text-[#465466]
                "
                >2022-08-14</span
              >
              <a
                href="#"
                class="
                  no-underline
                  font-Inter font-semibold
                  text-2xl text-[#1B2C42]
                  dark:text-white
                  max-w-[479]
                "
              >
                Can Crypto Address the Biggest Obstacle Facing the Unbanked?
              </a>
              <button
              @click="goToDetails('biggest-obstacle-facing-the-unbanked')"
                class="
                  flex
                  items-center
                  space-x-5
                  py-2.5
                  px-6
                  bg-[#0054B8]
                  dark:bg-[#2B71C4]
                  hover:bg-opacity-80
                  rounded-full
                "
              >
                <span class="font-semibold text-base font-Inter text-white"
                  >Read More</span
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
          <div
            class="
              w-full
              hover:bg-[#F5F6F7]
              dark:hover:bg-[#1F1F1F]
              p-2
              rounded-3xl
            "
          >
            <div
              class="w-full h-[200px] overflow-hidden rounded-3xl bg-gray-400"
            >
              <img
                src="../../../assets/news10.png"
                class="
                  w-full
                  h-full
                  object-cover
                  hover:scale-125
                  cursor-pointer
                "
                alt=""
              />
            </div>
            <div class="w-full flex flex-col items-start space-y-4 py-4 px-6">
              <span
                class="
                  text-base
                  font-Inter font-medium
                  dark:text-[#A9AFB7]
                  text-[#465466]
                "
                >2022-08-14</span
              >
              <a
                href="#"
                class="
                  no-underline
                  font-Inter font-semibold
                  text-2xl text-[#1B2C42]
                  dark:text-white
                  max-w-[479]
                "
              >
                Can Crypto Address the Biggest Obstacle Facing the Unbanked?
              </a>
              <button
              @click="goToDetails('biggest-obstacle-facing-the-unbanked')"
                class="
                  flex
                  items-center
                  space-x-5
                  py-2.5
                  px-6
                  bg-[#0054B8]
                  dark:bg-[#2B71C4]
                  hover:bg-opacity-80
                  rounded-full
                "
              >
                <span class="font-semibold text-base font-Inter text-white"
                  >Read More</span
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

        <div class="max-w-[348px] w-full m-auto pt-10">
          <div class="grid grid-cols-6 w-full">
            <button
              class="
                w-12
                h-12
                rounded-full
                bg-[#0F2138]
                dark:[#1B2C42]
                flex
                hover:bg-opacity-60
              "
            >
              <div class="m-auto">
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
                    d="M9.70711 0.292893C10.0976 0.683417 10.0976 1.31658 9.70711 1.70711L2.41421 9L9.70711 16.2929C10.0976 16.6834 10.0976 17.3166 9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L0.292893 9.70711C-0.0976311 9.31658 -0.0976311 8.68342 0.292893 8.29289L8.29289 0.292893C8.68342 -0.0976311 9.31658 -0.0976311 9.70711 0.292893Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
            <button
              class="
                w-12
                h-12
                rounded-full
                bg-[#0054B8]
                dark:border-[#2B71C4] dark:bg-[#2B71C4]
                border-[#0054B8] border
                flex
                hover:bg-opacity-60
              "
            >
              <div class="m-auto text-white text-base font-Inter font-semibold">
                1
              </div>
            </button>
            <button
              class="
                w-12
                h-12
                rounded-full
                bg-[#E6EEF8]
                dark:bg-[#26272C] dark:border-[#26272C]
                border-[#E6EEF8] border
                flex
                hover:bg-opacity-60
                dark:hover:bg-[#0054B8]
              "
            >
              <div
                class="
                  m-auto
                  text-[#0054B8] text-base
                  font-Inter font-semibold
                  dark:text-white
                "
              >
                2
              </div>
            </button>
            <button
              class="
                w-12
                h-12
                rounded-full
                bg-[#E6EEF8]
                dark:bg-[#26272C] dark:border-[#26272C]
                border-[#E6EEF8] border
                flex
                hover:bg-opacity-60
                dark:hover:bg-[#0054B8]
              "
            >
              <div
                class="
                  m-auto
                  text-[#0054B8] text-base
                  font-Inter font-semibold
                  dark:text-white
                "
              >
                3
              </div>
            </button>
            <button
              class="
                w-12
                h-12
                rounded-full
                bg-[#E6EEF8]
                dark:bg-[#26272C] dark:border-[#26272C]
                border-[#E6EEF8] border
                flex
                hover:bg-opacity-60
                dark:hover:bg-[#0054B8]
              "
            >
              <div
                class="
                  m-auto
                  text-[#0054B8] text-base
                  font-Inter font-semibold
                  dark:text-white
                "
              >
                4
              </div>
            </button>
            <button
              class="
                w-12
                h-12
                rounded-full
                bg-[#0F2138]
                dark:[#1B2C42]
                flex
                hover:bg-opacity-60
              "
            >
              <div class="m-auto">
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
  </section>
</template>



<script>
export default {
  methods:{
     goToDetails(slug){
        this.$router.push({name:'NewsDetails', params:{slug:slug}})
    }
  }
}
</script>