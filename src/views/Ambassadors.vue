<template>
    <div class=" w-full dark:bg-[#161616]">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
    </div>
</template>


<script>
import FirstSection from '../components/sections/ambassadors/FirstSection.vue'
import SecondSection from '../components/sections/ambassadors/SecondSection.vue'
import ThirdSection from '../components/sections/ambassadors/ThirdSection.vue'
import FourthSection from '../components/sections/ambassadors/FourthSection.vue'
export default {
    components: {
        FirstSection,
        SecondSection,
        ThirdSection,
        FourthSection
    },
}
</script>