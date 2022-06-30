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
          <p class="font-normal text-gray-50 text-center">{{cars.length}}</p>
        </div>
      </div>
      <div v-if="user">
        <div v-if="user.superAdmin">
        <nuxt-link to="/users"
          class=" cursor-pointer block p-6 w-72 bg-green-700 rounded-lg border border-green-200 shadow-md hover:bg-green-800 items-center"
        >
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-50 text-center"
          >
            View
          </h5>
          <p class="font-normal text-gray-50 text-center">Users</p>
        </nuxt-link>
        </div>
        <!-- !normal -->
        <div v-else
        @click="handleRecommended"
          class="block p-6 w-72 bg-green-700 rounded-lg cursor-pointer border border-green-200 shadow-md hover:bg-green-800 items-center"
        >
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-50 text-center"
          >
            Recommended
          </h5>
          <p class="font-normal text-gray-50 text-center">{{recommendeCars.length}}</p>
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

    <div class="grid grid-cols-3 gap-8" v-if="showAll">
      <div v-for="car in cars" :key="car.id">
        <nuxt-link :to="{ name: 'cars-id', params: { id: car.id } }">
          <CarCard1 :car="car" />
        </nuxt-link>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-8" v-if="!showAll">
      <div v-for="car in recommendeCars" :key="car.id">
        <nuxt-link :to="{ name: 'cars-id', params: { id: car.id } }">
          <CarCard1 :car="car" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import CarCard1 from "../components/carCard.vue";
import { collection, getDocs, getFirestore, doc, getDoc } from "firebase/firestore";

definePageMeta({
  layout: "admin",
});
const firebaseUser= useFirebaseUser()
const cars = ref([]);
const user=ref(null);

const showAll=ref(true);

const handleRecommended=()=>{
  showAll.value=!showAll.value
}

const recommendeCars=computed(()=>{
  return cars.value.filter((car)=>car.car_engine >= 5)
})

onMounted(async () => {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "cars"));
  querySnapshot.forEach((doc) => {
    cars.value.push({...doc.data(), id:doc.id})
    console.log(`${doc.id} => ${doc.data()}`);
  });
  // find the signed in user
  const userRef=doc(db, "users", firebaseUser.value.uid);
  const userSnap= await getDoc(userRef);
  if (userSnap.exists()) {
    user.value=userSnap.data();
  console.log("User data in seller:", userSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}


});
</script>

<style lang="scss" scoped></style>
