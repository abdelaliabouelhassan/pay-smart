<template>
    <div class=" w-full">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
    </div>
</template>


<script>
import FirstSection from '../components/sections/home/FirstSection.vue'
import SecondSection from '../components/sections/home/SecondSection.vue'
import ThirdSection from '../components/sections/home/ThirdSection.vue'
export default {
    components: {
        FirstSection,
        SecondSection,
        ThirdSection
    },
}
</script>