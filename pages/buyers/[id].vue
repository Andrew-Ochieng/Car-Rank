<template>
  <div>
    <div v-if="car" class="mt-5 pl-11 pr-5 mb-5">
      <div class="flex">
        <div class="mr-10">
          <div class="w-full">
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg bg-white">
                <img class="rounded-t-lg h-96" :src="car.fileUpload" alt="" />
              </div>
            </div>

            <div class="mt-10 w-full">
              <div
                class="p-6 bg-white rounded-lg border border-gray-200 shadow-md"
              >
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                >
                  General Information
                </h5>

                <div class="flex items-center justify-between">
                  <h5 class="text-gray-600 text-lg pr-16">Seller Name:</h5>
                  <h5 class="text-gray-600 text-lg">{{car.car_owner}}</h5>
                </div>
                <div class="flex items-center justify-between mt-3">
                  <h5 class="text-gray-600 text-lg pr-16">Phone number:</h5>
                  <h5 class="text-gray-600 text-lg">{{car.car_contact}}</h5>
                </div>
                <div class="flex items-center justify-between mt-3">
                  <h5 class="text-gray-600 text-lg pr-16">Car model:</h5>
                  <h5 class="text-gray-600 text-lg">
                    {{ car.car_model }}
                  </h5>
                </div>
                <div class="flex items-center justify-between mt-3">
                  <h5 class="text-gray-600 text-lg pr-16">Manufacture year:</h5>
                  <h5 class="text-gray-600 text-lg">{{ car.car_year }}</h5>
                </div>

                <div class="flex items-center justify-between mt-3">
                  <h5 class="text-gray-600 text-lg pr-16">Price:</h5>
                  <h5 class="text-blue-600 text-lg">Ksh.{{ final_price }}</h5>
                </div>
                 <div class="flex justify-center items-center">
                  <button
                    type="button"
                    class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-sm leading-tight uppercase rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-72 bg-gray-50 ml-5">
          <div class="p-6 bg-white border border-gray-200 shadow-md">
            <h5 class="mb-2 text-xl tracking-tight text-gray-700">
              Car Ratings
            </h5>

            <div class="flex items-center justify-between">
              <h5 class="text-gray-600 text-lg pr-16">Mileage:</h5>
              <h5 class="text-gray-600 text-lg">{{milage}}%</h5>
            </div>
            <div class="flex items-center justify-between mt-3">
              <h5 class="text-gray-600 text-lg pr-16">Car Fuel::</h5>
              <h5 class="text-gray-600 text-lg">{{fuel}}%</h5>
            </div>
            <div class="flex items-center justify-between mt-3">
              <h5 class="text-gray-600 text-lg pr-16">Engine Condition:</h5>
              <h5 class="text-gray-600 text-lg">{{engine}}%</h5>
            </div>
            <div class="flex items-center justify-between mt-3">
              <h5 class="text-gray-600 text-lg pr-16">Body Condition:</h5>
              <h5 class="text-gray-600 text-lg">{{mwili}}%</h5>
            </div>
            <div class="flex items-center justify-between mt-3">
              <h5 class="text-gray-600 text-lg pr-16">Electrical Condition:</h5>
              <h5 class="text-gray-600 text-lg">{{electric}}%</h5>
            </div>
            <div class="flex items-center justify-between mt-3">
              <h5 class="text-gray-600 text-lg pr-16">Transmission:</h5>
              <h5 class="text-gray-600 text-lg">{{transmission}}%</h5>
            </div>
            <div class="flex items-center justify-between mt-3">
              <h5 class="text-gray-600 text-lg pr-16">Steering System:</h5>
              <h5 class="text-gray-600 text-lg">{{steering}}%</h5>
            </div>
            <div class="flex items-center justify-between mt-3">
              <h5 class="text-gray-600 text-lg pr-16">Suspension System:</h5>
              <h5 class="text-gray-600 text-lg">{{suspension}}%</h5>
            </div>
            <div class="flex items-center justify-between mt-3">
              <h5 class="text-gray-600 text-lg pr-16">Tires:</h5>
              <h5 class="text-gray-600 text-lg">{{tyre}}%</h5>
            </div>
            <div class="flex items-center justify-between mt-3">
              <h5 class="text-gray-600 text-lg pr-16">Interior Condition:</h5>
              <h5 class="text-gray-600 text-lg">{{interior}}%</h5>
            </div>
            <div class="flex items-center justify-between mt-3">
              <h5 class="text-gray-600 text-lg pr-16">Accessories:</h5>
              <h5 class="text-gray-600 text-lg">{{accessory}}%</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Skeletor v-for="i in 5" :key="i" />
    </div>
  </div>
</template>

<script setup>
import {
  doc,
  getDoc,
  getFirestore,
  
} from "firebase/firestore";

const route = useRoute();
const car = ref(null);
const total_rate = ref(0.0);
const final_price = ref(0.0);
const milage=ref(0)
const fuel=ref(0)
const engine=ref(0)
const mwili=ref(0)
const electric=ref(0)
const transmission=ref(0)
const steering=ref(0)
const suspension=ref(0)
const tyre=ref(0)
const interior=ref(0)
const accessory=ref(0)

onMounted(async () => {
  const db = getFirestore();
  const carRef = doc(db, "cars", route.params.id);
  const carSnap = await getDoc(carRef);
  if (carSnap.exists()) {
    car.value = carSnap.data();
    console.log("Document data:", carSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
 total_rate.value= parseFloat(car.value.car_engine)+ parseFloat(car.value.car_milage)+parseFloat(car.value.car_transmission)+parseFloat(car.value.car_fuel)+parseFloat(car.value.car_steering)+parseFloat(car.value.car_tyre)+parseFloat(car.value.car_body)+parseFloat(car.value.car_electric)+parseFloat(car.value.car_accessories)+parseFloat(car.value.car_interior)
 console.log(total_rate.value)
  
  final_price.value = ((total_rate.value / 50) * parseFloat(car.value.car_price)|0)
  console.log(final_price.value)
// find individual percentage
milage.value=car.value.car_milage*2
fuel.value=car.value.car_fuel*2
engine.value=car.value.car_engine*2
mwili.value=car.value.car_body*2
electric.value=car.value.car_electric*2
transmission.value=car.value.car_transmission*2
steering.value=car.value.car_steering*2
suspension.value=car.value.car_suspension*2
tyre.value=car.value.car_tyre*2
interior.value=car.value.car_interior*2
accessory.value=car.value.car_accessories*2





});

   

definePageMeta({
  layout: "normal",
});
</script>

<style lang="scss" scoped></style>
