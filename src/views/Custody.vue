<template>
     <div class=" w-full">
         <FirstSection />
         <SecondSection />
         <ThirdSection />
         <FourthSection />
         <FifthSection />
    </div>
</template>

<script>
import FirstSection from '../components/sections/custody/FirstSection.vue'
import SecondSection from '../components/sections/custody/SecondSection.vue'
import ThirdSection from '../components/sections/custody/ThirdSection.vue'
import FourthSection from '../components/sections/custody/FourthSection.vue'
import FifthSection from '../components/sections/custody/FifthSection.vue'
export default {
    components: {
        FirstSection,
        SecondSection,
        ThirdSection,
        FourthSection,
        FifthSection
    },
}
</script>