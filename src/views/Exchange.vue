<template>
    <div class=" w-full">
         <FirstSection />
         <SecondSection />
         <ThirdSection />
         <FourthSection />
         <FifthSection />
         <SixthSection />
    </div>
</template>


<script>
import FirstSection from '../components/sections/exchange/FirstSection.vue'
import SecondSection from '../components/sections/exchange/SecondSection.vue'
import ThirdSection from '../components/sections/exchange/ThirdSection.vue'
import FourthSection from '../components/sections/exchange/FourthSection.vue'
import FifthSection from '../components/sections/exchange/FifthSection.vue'
import SixthSection from '../components/sections/exchange/SixthSection.vue'
export default {
    components: {
        FirstSection,
        SecondSection,
        ThirdSection,
        FourthSection,
        FifthSection,
        SixthSection
    }
}
</script>