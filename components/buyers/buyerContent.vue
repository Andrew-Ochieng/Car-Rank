<template>
    <div>
        <div class="w-9/12 md:pl-0 pl-4 lg:px-16 md:8 px-4">
            <!--search bar-->
            <div class="p-4 text-gray-500">
                <div class="flex -mx-3">
                    <div class="w-full px-3 mb-5">
                        <div class="flex">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                <i class="text-gray-400 text-lg"></i>
                            </div>
                            <input type="email" required class="w-full -ml-10 px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Search through all vehicles..">
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-2 text-gray-800 text-center md:text-2xl text-xl">
                <h2>WELCOME TO THE BEST CAR SALES WEBSITE </h2>
            </div>

            <!--cards-->
            <div class="md:mt-8 mt-4 lg:px-2 md:px-8 px-4 md:mb-12 mb-8">
                <div class="md:flex justify-center md:gap-12 gap-6" v-for="(carDetail, key) in carDetails" :key="carDetails">
                    <div class="max-w-sm bg-white rounded-xl shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-400">
                        <a href="#">
                            <img class="rounded-t-xl" :src="image" alt="" />
                        </a>
                        <div class="p-6">
                            <a href="#">
                                <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ carDetails.title }}</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ carDetails.location }}</p>
                            <p class="mb-6 font-normal text-gray-700 dark:text-gray-400">{{ carDetails.mileage }} | {{ carDetails.carFuel }} | Right | 2WD</p>
                            <p class="border-b-2 border-gray-300"></p>
                            <p class="my-4 text-center font-normal text-gray-700 dark:text-gray-400">{{ carDetails.price }}</p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
        

    </div>
</template>

<script>
    export default {
        data() {
            carDetails [
                {
                    image: "@/assets/images/car2.jpg",
                    title: "Mercedes-Benz C-class 2015",
                    location: "Nairobi",
                    mileage: "7300km",
                    carFuel: "petrol",
                    year: "2018",
                    price: "Ksh 1,200,000"

                },
                {
                    image: "@/assets/images/car2.jpg",
                    title: "Mercedes-Benz C-class 2015",
                    location: "Nairobi",
                    mileage: "7300km",
                    carFuel: "petrol",
                    year: "2018",
                    price: "Ksh 1,200,000"

                },
                {
                    image: "@/assets/images/car2.jpg",
                    title: "Mercedes-Benz C-class 2015",
                    location: "Nairobi",
                    mileage: "7300km",
                    carFuel: "petrol",
                    year: "2018",
                    price: "Ksh 1,200,000"

                },
                {
                    image: "@/assets/images/car2.jpg",
                    title: "Mercedes-Benz C-class 2015",
                    location: "Nairobi",
                    mileage: "7300km",
                    carFuel: "petrol",
                    year: "2018",
                    price: "Ksh 1,200,000"

                }
            ]
        }
    }
</script>

<style scoped>

</style>