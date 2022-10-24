<template>
    <div class=" w-full dark:bg-[#161616] overflow-hidden">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
         <FourthSection />
         <FifthSection /> 
       
    </div>
</template>


<script>
import FirstSection from '../components/sections/home/FirstSection.vue'
import SecondSection from '../components/sections/home/SecondSection.vue'
import ThirdSection from '../components/sections/home/ThirdSection.vue'
import FourthSection from '../components/sections/home/FourthSection.vue'
import FifthSection from '../components/sections/home/FifthSection.vue'
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