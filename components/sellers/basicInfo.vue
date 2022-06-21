<template>
    <div>
        <div class="flex flex-col justify-between items-center">
            <h1 class="text-md font-light">BASIC INFORMATION</h1>
            <h3 class="font-medium text-xl">Provide The Basic Information About Your Car</h3>
        </div>

        <div class="continer md:flex flex-col items-start">
            <InputCards />
            <div class="">
                <label class="block py-2 text-lg text-gray-900">Price:</label>
                <input type="text" class="px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Enter your buying price">
            </div>
        </div>

        <div class="flex -mx-3">
            <div class="w-full px-3 mb-5">
                <button class="text-center mx-auto bg-blue-500 duration-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg md:px-16 px-4 py-2 font-semibold">
                    NEXT
                </button>
            </div>
        </div>

    </div>
</template>

<script>
import InputCards from "@/components/sellers/InputCards.vue"

    export default {
        components: "InputCards"
    }
</script>

<style scoped>

</style>