<template>
  <div>
  <!-- !the top display cards -->
    <div class="flex items-center justify-between mt-5 p-4 w-full">
      <div>
        <div
          class="block p-6 w-72 bg-blue-700 rounded-lg border border-blue-200 shadow-md hover:bg-blue-800 items-center"
        >
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-50 text-center"
          >
            Popular
          </h5>
          <p class="font-normal text-gray-50 text-center">
           20
          </p>
        </div>
      </div>
      <div>
      <div
          class="block p-6 w-72 bg-green-700 rounded-lg border border-green-200 shadow-md hover:bg-green-800 items-center"
        >
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-50 text-center"
          >
            Recommended
          </h5>
          <p class="font-normal text-gray-50 text-center">
           12
          </p>
        </div>
      </div>
      <div>
      <nuxt-link to="/sell"
          class="block p-6 w-72 bg-cyan-700 rounded-lg border border-cyan-200 shadow-md hover:bg-cyan-800 items-center"
        >
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-50 text-center"
          >
            Sell Your
          </h5>
          <p class="font-normal text-gray-50 text-center">
           Car
          </p>
        </nuxt-link>
      </div>
    </div>
    <!-- !card card displays -->

    <div class="grid grid-cols-3 gap-8">
        <div v-for="car in cars" :key="car.id">
        <nuxt-link :to="{name:'cars-id',params:{id:car.id}}">
        <CarCard1 :car='car'/>
        </nuxt-link>
        </div>
    </div>
  </div>
</template>

<script setup>
import CarCard1 from "../components/carCard.vue";

definePageMeta({
  layout: "admin",
});
const cars=ref([
    {id:1,title: "Mercedes Benze",location:'Kisii',price:"123456789",pic:'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__340.jpg'},
     {id:2,title: "Mercedes Benze",location:'Nairobi',price:"123456789", pic:'https://cdn.pixabay.com/photo/2013/08/29/04/37/automobile-176989__340.jpg'},
      {id:3,title: "Mercedes Benze",location:'Nairobi',price:"123456789", pic:'https://cdn.pixabay.com/photo/2017/03/05/15/29/aston-martin-2118857__340.jpg'},
       {id:4,title: "Mercedes Benze",location:'Nairobi',price:"123456789", pic:'https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__480.jpg'},
        {id:5,title: "Mercedes Benze",location:'Nairobi',price:"123456789", pic:'https://cdn.pixabay.com/photo/2012/04/12/23/48/car-30990__340.png'},
         {id:6,title: "Mercedes Benze",location:'Nairobi',price:"123456789", pic:'https://cdn.pixabay.com/photo/2012/04/13/20/37/car-33556__340.png'},
])
</script>

<style lang="scss" scoped></style>
