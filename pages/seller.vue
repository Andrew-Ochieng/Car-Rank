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
          <p class="font-normal text-gray-50 text-center">20</p>
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
          <p class="font-normal text-gray-50 text-center">12</p>
        </div>
      </div>
      <div>
        <nuxt-link
          to="/sell"
          class="block p-6 w-72 bg-cyan-700 rounded-lg border border-cyan-200 shadow-md hover:bg-cyan-800 items-center"
        >
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-50 text-center"
          >
            Sell Your
          </h5>
          <p class="font-normal text-gray-50 text-center">Car</p>
        </nuxt-link>
      </div>
    </div>
    <!-- !card card displays -->

    <div class="grid grid-cols-3 gap-8">
      <div v-for="car in cars" :key="car.id">
        <nuxt-link :to="{ name: 'cars-id', params: { id: car.id } }">
          <CarCard1 :car="car" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import CarCard1 from "../components/carCard.vue";
import { collection, getDocs, getFirestore } from "firebase/firestore";

definePageMeta({
  layout: "admin",
});
const cars = ref([]);
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
