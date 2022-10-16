<template>
    <div class=" w-full">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
    </div>
</template>


<script>
import FirstSection from '../components/sections/news_details/FirstSection.vue'
import SecondSection from '../components/sections/news_details/SecondSection.vue'
import ThirdSection from '../components/sections/news_details/ThirdSection.vue'

export default {
    components: {
        FirstSection,
        SecondSection,
        ThirdSection
    },
}
</script>