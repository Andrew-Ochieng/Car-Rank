<template>
    <div>
        <div class="container md:px-8 px-4 py-4 md:flex justify-between ">
            <div class="">
                <p class="lg:text-6xl md:text-4xl text-3xl font-medium text-gray-800">BUYING 
                    <span class="text-blue-600">USED <br> CARS</span> 

                    IS EASIER <br> THAN EVER
                </p>
                <p class=" pt-4 lg:text-xl md:text-xl text-md  text-gray-800 flex">
                    <span class="pr-1 text-blue-700 text-lg">WE VALUE </span>
                    <VueWriter :array="['QUALITY', 'AND', 'CUSTOMER SATISFACTION']" class="text-blue-700 text-lg" :iterations="2"/>
                </p>
                <!-- <vue-typer text='Hello World! I was registered locally!' :repeat="5"></vue-typer> -->
            </div>
                  
            <img class="bg-cover md:pl-4 md:w-full lg:w-2/3" src="@/assets/images/car.jpg" alt="">
        </div>

    </div>
</template>

<script >
import VueWriter from 'vue-writer'
export default {
  components: {VueWriter}
}
    
</script>

<style scoped>
.is-typed {
  /* font-family: "Monaco"; */
  font-size: 30;
  color: black;
}

.is-typed span.typed {
  color: black;
  font-size: 30;
}
</style>