<template>
    <div>
        <div class="container md:px-8 px-4 md:pt-16 pt-8 md:flex gap-8 justify-between ">
            <div>
                <img class="bg-cover w-full rounded-lg" src="@/assets/images/car2.jpg" alt="">
            </div>

            <div class="md:py-0 py-8">
                <p class="pb-4 lg:text-2xl md:text-xl text-md  text-gray-800">
                    WE VALUE 
                    <span class="text-blue-600">QUALITY </span>& CUSTOMER
                    <br> SATISFACTION
                </p>
                <p class="lg:leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    anim id est laborum.
                </p>
            </div>
        </div>

        <div class="container md:px-8 px-4 py-4">
            <h3>OUR CAR COLLECTIONS</h3>
            <div>
                <div>
                    <img :src="pic" alt="">
                    <p>{{ carCollection.name }}</p> 
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { carCollection } from "@/assets/data.js"

    export default {
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>

</style>