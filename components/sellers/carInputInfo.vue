<template>
    <div>
        <div class="">
            <div v-for="(Car, index) in CarDetails" :key="index">
                <label for="cars">{{ CarDetails.Description }}</label>
                <select v-model="cars" name="cars" id="cars">
                    <option value="volvo">{{ CarDetails.Cars }}</option>
                </select> 
            </div>
        </div>
        

    </div>
</template>

<script>
import { CarDetails } from "@/assets/data.js"

    export default {
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped>

</style>