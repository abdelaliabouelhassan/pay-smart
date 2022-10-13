<template>
    <div class="w-full overflow-hidden  "  >
        <div class=" w-full ">
            <img class=" w-full h-full bg-cover" :src="comingsoon" alt=""> 
        </div>
         <div class=" absolute top-1/4 left-1/2 right-1/2">
        <div class=" flex flex-col items-center space-y-8">
            <span class=" text-[#ECEDEF] text-[32px] font-Inter font-medium whitespace-nowrap">Soon</span>
            <h1 class=" text-white text-[90px] font-Inter font-semibold whitespace-nowrap">Coming soon</h1>
            <span class=" text-[#C3C8CD] font-medium font-Inter text-xl whitespace-nowrap">This page will be available soon.</span>
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