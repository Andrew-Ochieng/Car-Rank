<template>
    <div>
        <div class="">
            <div v-for="(Car, index) in CarDetails" :key="index">
                <label for="cars">{{ CarDetails.Description }}</label>
                <select name="cars" id="cars">
                    <option value="volvo">{{ CarDetails.Cars }}</option>
                </select> 
            </div>
        </div>
        

    </div>
</template>

<script>
    export default {
        data() {
            return {
                CarDetails: [
                    {
                        Description: "Make:",
                        Cars: [
                            "Subaru", 
                            "BMW", 
                            "Mercedes", 
                            "RangeRover", 
                            "Prado", 
                            "Volkswagen",
                            "Ford"
                        ]
                    },
                    {
                        Description: "Model:",
                        Cars: [
                            "A-Class", 
                            "X7", 
                            "C-Class", 
                            "E-Class", 
                            "SUV", 
                            "Sedan",
                            "Expedition"
                        ]
                    },
                    {
                        Description: "Year:",
                        Cars: [
                            "2014", 
                            "2010", 
                            "2020", 
                            "2013", 
                            "2016", 
                            "2018",
                            "2019"
                        ]
                    },
                    {
                        Description: "Car Location:",
                        Cars: [
                            "Nairobi", 
                            "Eldoret", 
                            "Lamu", 
                            "Mombasa", 
                            "Nairobi", 
                            "Kisumu",
                            "Nairobi"
                        ]
                    },
                    {
                        Description: "Image:",
                        Cars: [
                            "@/assets/images/subaru.jpg", 
                            "@/assets/images/bmw.jpg",
                            "@/assets/images/mercedes.jpg",
                            "@/assets/images/rangerover.jpg", 
                            "@/assets/images/prado.jpg", 
                            "@/assets/images/volkswagen.jpg",
                            "@/assets/images/ford.jpg"
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>