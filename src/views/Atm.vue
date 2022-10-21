<template>
    <div class="w-full overflow-hidden  "  >
        <div class=" w-full h-[400px] lg:h-auto ">
            <img class=" w-full h-full bg-cover" :src="comingsoon" alt=""> 
        </div>
     <div class=" absolute top-36 sm:top-28 md:top-28  lg:top-1/4 left-1/2 right-1/2">
        <div class=" flex flex-col items-center space-y-2 md:space-y-8">
            <span class=" text-[#ECEDEF] text-base md:text-[32px] font-Inter font-medium whitespace-nowrap">Soon</span>
            <h1 class=" text-white text-[32px] md:text-[90px] font-Inter font-semibold whitespace-nowrap">Coming soon</h1>
            <span class=" text-[#C3C8CD] font-medium font-Inter text-lg md:text-xl whitespace-nowrap">This page will be available soon.</span>
        </div>
   </div>
    </div>
</template>
<script>
import comingsoon from '../assets/comingsoon.png'
export default {
    data() {
        return {
            comingsoon
        }
    },
    mounted(){
       if(!document.body.classList.contains('dark')){
            document.body.classList.add('dark')
       }
    },
    //when route leave remove dark class
    beforeRouteLeave(to, from, next) {
        document.body.classList.remove('dark')
        next()
    }
   
}
</script>