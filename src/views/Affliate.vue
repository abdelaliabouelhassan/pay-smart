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
import FirstSection from '../components/sections/affliate/FirstSection.vue'
import SecondSection from '../components/sections/affliate/SecondSection.vue'
import ThirdSection from '../components/sections/affliate/ThirdSection.vue'
import FourthSection from '../components/sections/affliate/FourthSection.vue'
export default {
    components: {
        FirstSection,
        SecondSection,
        ThirdSection,
        FourthSection,
    },
}
</script>