<template>
  <div>
  <!-- !search bar -->
   <div class="flex justify-center items-center p-4">
      <input
        v-model="search"
        type="text"
        placeholder="search in cars ..."
        class="border border-gray-300 rounded-lg md:block w-full p-2.5 text-gray-900 sm:hidden"
      />
    </div>
   <h3 class="text-2xl text-blue-600 p-8 text-center">Welcome to used cars website <br> 
   <VueWriter :array="['Browse our used cars catalogue and enjoy quality vehicles']" class="text-blue-700 text-lg md:hidden" :iterations="2"/>
   </h3>

    <div class="grid md:grid-cols-3 gap-8 sm:grid-cols-1">
      <div v-for="car in searchedCars" :key="car.id">
        <nuxt-link :to="{ name: 'buyers-id', params: { id: car.id } }">
          <CarCard1 :car="car" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import VueWriter from 'vue-writer'
import CarCard1 from "../components/carCard.vue";
import { collection, getDocs, getFirestore } from "firebase/firestore";

definePageMeta({
  layout: "normal",
});
const cars = ref([]);
const search = ref("");
 const searchedCars = computed(() => {
      return cars.value.filter((car) =>
        car.car_model.match(search.value)
      );
    });
onMounted(async () => {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "cars"));
  querySnapshot.forEach((doc) => {
    cars.value.push({...doc.data(), id:doc.id})
    console.log(`${doc.id} => ${doc.data()}`);
  });
});
</script>

<style lang="scss" scoped></style>
