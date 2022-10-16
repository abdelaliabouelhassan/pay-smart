<template>
    <div class=" w-full">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
    </div>
</template>


<script>
import FirstSection from '../components/sections/news/FirstSection.vue'
import SecondSection from '../components/sections/news/SecondSection.vue'
import ThirdSection from '../components/sections/news/ThirdSection.vue'

export default {
    components: {
        FirstSection,
        SecondSection,
        ThirdSection
    },
}
</script>