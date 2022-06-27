<template>
  <div>
    

   <div v-if="userCars">
   <h3 class="text-xl text-gray-600 uppercase p-4 mb-6 ">Here are your cars for sell</h3>
    <div class="grid grid-cols-3 gap-8">
      <div v-for="car in userCars" :key="car.id">
        <nuxt-link :to="{ name: 'cars-id', params: { id: car.id } }">
          <CarCard1 :car="car" />
        </nuxt-link>
      </div>
    </div>
   </div>
   <div v-else>
   <h3 class="text-2xl text-red-600 text-center font-bold">You don't have a car to sell</h3>
   </div>
  </div>
</template>

<script setup>
import CarCard1 from "../../components/carCard.vue";
import {  getFirestore,collection, query, where,getDocs } from "firebase/firestore";

definePageMeta({
  layout: "admin",
});
const firebaseUser=useFirebaseUser()
const userCars = ref([]);

onMounted(async () => {
  const db = getFirestore();
  const userCarsRef = collection(db, "cars");
  const q = query(userCarsRef, where("uid", "==", firebaseUser.value.uid));
  
  const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  userCars.value.push({...doc.data(),id:doc.id})
  console.log(doc.id, " => ", doc.data());
});

});
</script>

<style lang="scss" scoped></style>
