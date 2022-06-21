<template>
    <div>
        <div>
            <h3>SPECIFIC CAR RATINGS</h3>
        </div>
        <!--ratings-->
        <div v-for="(rating, index) in ratings" :key="index" class="md:flex flex-col space-y-2 p-2 w-1/3 my-3">
            <label for="name">{{ ratings.name }}</label>
            <input type="range" class="w-full" :min="0" :max="5" step="1" />
            <!-- <ul class="flex justify-between w-full px-[10px]">
                <li class="flex justify-center relative"><span class="absolute">Poor</span></li>
                <li class="flex justify-center relative"><span class="absolute">Better</span></li>
                <li class="flex justify-center relative"><span class="absolute">Average</span></li>
                <li class="flex justify-center relative"><span class="absolute">Good</span></li>
                <li class="flex justify-center relative"><span class="absolute">Very Good</span></li>
                <li class="flex justify-center relative"><span class="absolute">Excellent</span></li>
            </ul> -->
        </div>

    </div>
</template>

<script>
    export default {
        ratings: [
            { 
                name: 'Engine Condition', 
                min: '0',
                max: '10'
            },
            { 
                name: 'Mileage', 
                min: '0',
                max: '3'
            },
            { 
                name: 'Body', 
                min: '0',
                max: '6'
            },
            { 
                name: 'Tyres', 
                min: '0',
                max: '3'
            },
            { 
                name: 'Steering', 
                min: '0',
                max: '5'
            },
            { 
                name: 'Car Fuel', 
                min: '0',
                max: '3'
            },
            { 
                name: 'Transmission', 
                min: '0',
                max: '5'
            },
            { 
                name: 'Electrical Condition', 
                min: '0',
                max: '6'
            },
            { 
                name: 'Accessories', 
                min: '0',
                max: '4'
            },
            { 
                name: 'Interior', 
                min: '0',
                max: '4'
            },
            { 
                name: 'Supension System', 
                min: '0',
                max: '6'
            }
        ]
    }
</script>

<style scoped>

</style>