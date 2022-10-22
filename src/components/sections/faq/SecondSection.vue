<template>
  <section
    class="w-full flex font-Inter bg-white relative dark:bg-[#161616] py-10 md:py-60"
  >
    <div class="m-auto w-full max-w-[1150px] p-6 md:p-0">
     

      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="flex flex-col items-start space-y-10">
          <div
            class="w-full rounded-3xl px-5 md:px-8 space-y-6 py-6 md:py-[31px] self-start"
            :class="{
              'bg-[#2B71C4] ': index == 0,
              ' bg-[#F5F6F7] dark:bg-[#1C1C1C] ': index > 0,
            }"
            v-for="(faq, index) in FaqLeft"
            :key="index"
          >
            <div class="w-full flex flex-col items-start space-y-2 md:space-y-3">
              <div
                class="md:text-[36px] text-[24px] leading-[36px] font-semibold font-Inter md:leading-[46px]"
                v-html="faq.title"
                :class="{
                  'text-white': index == 0,
                  ' text-[#1B2C42] dark:text-white': index > 0,
                }"
              ></div>
              <span
                class="md:text-lg text-sm font-medium font-Inter"
                :class="{
                  'text-[#ECEDEF]': index == 0,
                  ' text-[#616C7C] dark:text-[#A9AFB7]': index > 0,
                }"
                >{{ faq.subtitle }}</span
              >
            </div>
            <div class="w-full flex flex-col items-start space-y-4">
              <div
                class="flex flex-col items-start space-y-2 md:space-y-4 w-full"
                v-for="(item, key) in faq.faq"
                :key="key"
              >
                <div
                  class="
                    w-full
                    flex
                    items-center
                    justify-between
                    cursor-pointer
                  "
                  @click="item.active = !item.active"
                >
                  <h2
                    class="md:text-2xl text-lg leading-[30px] md:leading-[36px] font-semibold font-Inter max-w-[420px]"
                    :class="{
                      'text-white': index == 0,
                      ' text-[#1B2C42] dark:text-white': index > 0,
                    }"
                  >
                    {{ item.title }}
                  </h2>
                  <button>
                    <svg
                      :class="{
                        'top-arrow': item.active,
                        'text-white': index == 0,
                        'text-[#1B2C42] dark:text-white': index > 0,
                      }"
                      class="fill-current"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.71543 4.88783C5.8722 5.0446 6.12636 5.0446 6.28313 4.88783L10.2423 0.92868C10.6327 0.538215 11.2658 0.538214 11.6563 0.928679C12.0467 1.31914 12.0467 1.95221 11.6563 2.34268L6.77821 7.22075C6.34802 7.65094 5.65054 7.65094 5.22035 7.22075L0.342279 2.34268C-0.0481864 1.95221 -0.0481864 1.31914 0.342279 0.928679C0.732744 0.538214 1.36581 0.538214 1.75628 0.928679L5.71543 4.88783Z"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  v-if="item.active" @click="Details"
                  class="pl-4 text-base font-normal space-y-4"
                  :class="{
                    'text-[#ECEDEF]': index == 0,
                    ' text-[#616C7C] dark:text-[#A9AFB7]': index > 0,
                  }"
                  v-html="item.content"
                ></div>
              </div>
            </div>
          </div>
        </div>
         <div class="flex flex-col items-start space-y-10">
          <div
            class="w-full rounded-3xl px-5 md:px-8 space-y-6 py-6 md:py-[31px] self-start"
            :class="{
              'bg-[#2B71C4] ': index == -1,
              ' bg-[#F5F6F7] dark:bg-[#1C1C1C] ': index >= 0,
            }"
            v-for="(faq, index) in FaqRight"
            :key="index"
          >
            <div class="w-full flex flex-col items-start space-y-2 md:space-y-3">
              <div
                class="md:text-[36px] text-[24px] leading-[36px] font-semibold font-Inter md:leading-[46px]"
                v-html="faq.title"
                :class="{
                  'text-white': index == -1,
                  ' text-[#1B2C42] dark:text-white': index >= 0,
                }"
              ></div>
              <span
                class="md:text-lg text-sm font-medium font-Inter"
                :class="{
                  'text-[#ECEDEF]': index == -1,
                  ' text-[#616C7C] dark:text-[#A9AFB7]': index >= 0,
                }"
                >{{ faq.subtitle }}</span
              >
            </div>
            <div class="w-full flex flex-col items-start space-y-4">
              <div
                 class="flex flex-col items-start space-y-2 md:space-y-4 w-full"
                v-for="(item, key) in faq.faq"
                :key="key"
              >
                <div
                  class="
                    w-full
                    flex
                    items-center
                    justify-between
                    cursor-pointer
                  "
                  @click="item.active = !item.active"
                >
                  <h2
                    class="md:text-2xl text-lg leading-[30px] md:leading-[36px] font-semibold font-Inter max-w-[420px]"
                    :class="{
                      'text-white': index == -1,
                      ' text-[#1B2C42] dark:text-white': index >= 0,
                    }"
                  >
                    {{ item.title }}
                  </h2>
                  <button>
                    <svg
                      :class="{
                        'top-arrow': item.active,
                        'text-white': index == -1,
                        'text-[#1B2C42] dark:text-white': index >= 0,
                      }"
                      class="fill-current"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.71543 4.88783C5.8722 5.0446 6.12636 5.0446 6.28313 4.88783L10.2423 0.92868C10.6327 0.538215 11.2658 0.538214 11.6563 0.928679C12.0467 1.31914 12.0467 1.95221 11.6563 2.34268L6.77821 7.22075C6.34802 7.65094 5.65054 7.65094 5.22035 7.22075L0.342279 2.34268C-0.0481864 1.95221 -0.0481864 1.31914 0.342279 0.928679C0.732744 0.538214 1.36581 0.538214 1.75628 0.928679L5.71543 4.88783Z"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  v-if="item.active" @click="Details"
                  class="pl-4 text-base font-normal space-y-4"
                  :class="{
                    'text-[#ECEDEF]': index == -1,
                    ' text-[#616C7C] dark:text-[#A9AFB7]': index >= 0,
                  }"
                  v-html="item.content"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>





<script>
export default {
  data() {
    return {
      FaqLeft: [
        {
          title: "<span>General Information</span>",
          subtitle: "Information about our Wallex Regional Projects",
          faq: [
            {
              title: "Wallex Regional",
              active: true,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
            {
              title:
                "Policies Securities and other Information about Wallex BG",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
            {
              title: "Fees",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p>Why choose us?<p>",
            },
          ],
        },

        {
          title: "<span>Account Security <br> & Sign in</span>",
          subtitle:
            "Explore your account's security features and common login questions associated with various 2FA methods.",
          faq: [
            {
              title: "Common Login Issues",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
            {
              title: "Account Security",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
          ],
        },

        {
          title: "<span>Financial Operations</span>",
          subtitle:
            "Learn more about our Financial operations, our trading interfaces, supported cryptos, and how to execute transfers and exchanges",
          faq: [
            {
              title: "FIAT operations",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
            {
              title: "Cryptocurrency operations",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
            {
              title: "Financial Documents",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
          ],
        },

        {
          title: "<span>Wallex Regional  Education <br> & FAQs</span>",
          subtitle:
            "Learn about our API, Referral program, Wallexpedia, Fraudmonitoring and other common topics",
          faq: [
            {
              title: "Platform Usage Guides",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
            {
              title: "FAQs",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
            {
              title: "OTC",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
            {
              title: "Fraud monitoring",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
            {
              title: "Security Audit",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
            {
              title: "Affiliate, Referral and Partner programs",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
          ],
        },
      ],
      FaqRight: [
        {
          title: "<span>Wallex Solutions</span>",
          subtitle: "Information about our Wallex Regional Projects",
          faq: [
            {
              title: "Wallex BG",
              active: true,
              content:
                "<p class='cursor-pointer'>How to create a Wallex BG account?<p><p class='cursor-pointer'>Can I create multiple accounts?<p><p class='cursor-pointer'>Can I switch from a Personal to Company in Wallex BG account?<p><p class='cursor-pointer'>How can I create a Corporate Profile in Wallex BG?<p><p class='cursor-pointer'>What is the difference between Personal and Corporate account?</p>",
            },
            {
              title: "WallexCustody",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
            {
              title: "WallexExchange",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
          ],
        },

        {
          title: "<span>KYC & KYB, <br> and Verification Process</span>",
          subtitle:
            "Learn about our Know Your Customer (KYC), Know Your Business (KYB), and our Verification processes",
          faq: [
            {
              title: "Verification Processes",
              active: false,
              content:
               "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
            {
              title: "KYC (Know Your Customer)",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
            {
              title: "KYB (Know Your Business)",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
          ],
        },

        {
          title: "<span>Wallex Regional Card Services</span>",
          subtitle: "Detailed information about our cards, and how to use them",
          faq: [
            {
              title: "Card Usage and Services",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
            {
              title: "Common Card Issues",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
          ],
        },

        {
          title: "<span>Policies, Terms & Compliance Rules</span>",
          subtitle: "Learn about our policies.",
          faq: [
            {
              title: "Compliance Rules",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
            {
              title: "AML/CTF and Privacy Policies",
              active: false,
              content:
                "<p class='cursor-pointer'>Getting Started<p><p class='cursor-pointer'>Who are we?<p><p class='cursor-pointer'>About Us<p><p class='cursor-pointer'>Why choose us?<p>",
            },
          ],
        },
      ],
    };
  },
  methods:{
    Details(){
      this.$router.push({ name: "FaqDetails", params: { slug: 'compliance-rules' } });
    }
  }
};
</script>



<style scoped>
.top-arrow {
  transform: rotate(180deg);
}
</style>