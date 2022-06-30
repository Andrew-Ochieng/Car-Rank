<template>
  <div>
  
   <h3 class="text-2xl text-gray-700 p-8 ">Recommended used Cars</h3>

    <div class="grid grid-cols-3 gap-8">
      <div v-for="car in recommendedCars" :key="car.id">
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
const recommendedCars=computed(()=>{
    return cars.value.filter((car)=>car.car_engine >= 5);
})
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
