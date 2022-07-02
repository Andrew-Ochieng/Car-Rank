<template>
  <div>
    <div
      class="min-w-screen min-h-screen bg-gray-50 flex flex-col items-center justify-center p-2"
    >

    <RatingGuide />

      <div
        class="bg-gray-50 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
        style="max-width: 1000px"
      >
      
        <div class="md:flex w-full">
          <div class="w-full md:w-1/2 py-10 px-6 md:px-10">
            <div>
              <div v-if="!showNext">
                <div class="text-center mb-10">
                  <h1 class="font-bold text-3xl text-gray-900">
                    BASIC INFORMATION
                  </h1>
                  <p>Enter the basic information for your car</p>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-3">
                    <label for="" class="text-sm text-gray-600 px-1"
                      >Model</label
                    >
                    <div class="flex">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      ></div>
                      <select
                        v-model="car_model"
                        class="w-full -ml-10 px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500 bg-gray-50 text-gray-500"
                      >
                        <option disabled value="">Select car model</option>
                        <option v-for="car in models" :key="car" :value="car">
                          {{ car }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-4">
                    <label for="" class="text-sm text-gray-600 px-1"
                      >Year</label
                    >
                    <div class="flex">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      ></div>
                      <select
                        v-model="car_year"
                        class="w-full -ml-10 px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500 bg-gray-50 text-gray-500"
                      >
                        <option disabled value="">
                          Select manufacture year
                        </option>
                        <option v-for="year in years" :key="year" :value="year">
                          {{ year }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-4">
                    <label for="" class="text-sm text-gray-600 px-1"
                      >Location</label
                    >
                    <div class="flex">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      ></div>
                      <select
                        v-model="car_location"
                        class="w-full -ml-10 px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500 bg-gray-50 text-gray-500"
                      >
                        <option disabled value="">
                          Select manufacture location
                        </option>
                        <option
                          v-for="locale in locations"
                          :key="locale"
                          :value="locale"
                        >
                          {{ locale }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <label for="" class="text-sm text-gray-600 px-1"
                      >Car Image</label
                    >
                    <div class="flex">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      ></div>
                      <input
                        
                       @change="onfileChange"
                        type="file"
                        required
                        class="w-full -ml-10 px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                        placeholder=""
                      />
                    </div>
                    <p class="text-red-500 text-xs italic"></p>
                  </div>
                </div>

                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <label for="" class="text-sm text-gray-600 px-1"
                      >Price:</label
                    >
                    <div class="flex">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      ></div>
                      <input
                        v-model="car_price"
                        type="text"
                        required
                        class="w-full -ml-10 px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                        placeholder="e.g 25000"
                      />
                    </div>
                    <p class="text-red-500 text-xs italic"></p>
                  </div>
                </div>
                <p
                  @click="handleNext"
                  class="w-full text-center cursor-pointer mx-auto bg-blue-500 duration-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold"
                >
                  Next
                </p>
              </div>

              <!-- !the next section -->
              <div v-if="showNext">
                <div class="text-center mb-10">
                  <h1 class="font-bold text-3xl text-gray-900">Car ratings</h1>
                  <p>Enter the specific information for your car</p>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 flex justify-between">
                    <div class="pr-2">
                      <label for="" class="text-sm text-gray-600 px-1"
                        >Engine Condition:</label
                      >
                    </div>
                    <div class="flex w-full">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      ></div>
                      <input
                        v-model="car_engine"
                        type="range"
                        required
                        class="w-full -ml-10 px-4 py-2 accent-blue-600 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                        min="0"
                        max="10"
                        step="1"
                      />
                    </div>
                    <p class="text-red-500 text-xs italic"></p>
                  </div>
                </div>
                <!-- !milage -->
                <div class="flex -mx-3">
                  <div class="w-full px-3 flex justify-between">
                    <div class="pr-2">
                      <label for="" class="text-sm text-gray-600 px-1"
                        >Milage:</label
                      >
                    </div>
                    <div class="flex w-full">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      ></div>
                      <input
                        v-model="car_milage"
                        type="range"
                        required
                        class="w-full -ml-10 px-4 py-2 accent-blue-600 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                        min="0"
                        max="3"
                        step="0.25"
                      />
                    </div>
                    <p class="text-red-500 text-xs italic"></p>
                  </div>
                </div>
                <!-- !car body -->
                <div class="flex -mx-3">
                  <div class="w-full px-3 flex">
                    <div class="pr-2">
                      <label for="" class="text-sm text-gray-600 px-1"
                        >Body:</label
                      >
                    </div>
                    <div class="flex w-full">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      ></div>
                      <input
                        v-model="car_body"
                        type="range"
                        required
                        class="w-full -ml-10 px-4 py-2 accent-blue-600 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                        min="0"
                        max="6"
                        step="0.5"
                      />
                    </div>
                    <p class="text-red-500 text-xs italic"></p>
                  </div>
                </div>
                <!-- !car body -->
                <!-- !tyres -->
                <div class="flex -mx-3">
                  <div class="w-full px-3 flex">
                    <div class="pr-2">
                      <label for="" class="text-sm text-gray-600 px-1"
                        >Tyres:</label
                      >
                    </div>
                    <div class="flex w-full">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      ></div>
                      <input
                        v-model="car_tyre"
                        type="range"
                        required
                        class="w-full -ml-10 px-4 py-2 accent-blue-600 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                        min="0"
                        max="3"
                        step="0.25"
                      />
                    </div>
                    <p class="text-red-500 text-xs italic"></p>
                  </div>
                </div>
                <!-- !tyres -->
                <!-- !steering -->
                <div class="flex -mx-3">
                  <div class="w-full px-3 flex">
                    <div class="pr-2">
                      <label for="" class="text-sm text-gray-600 px-1"
                        >Steering:</label
                      >
                    </div>
                    <div class="flex w-full">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      ></div>
                      <input
                        v-model="car_steering"
                        type="range"
                        required
                        class="w-full -ml-10 px-4 py-2 accent-blue-600 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                        min="0"
                        max="5"
                        step="0.5"
                      />
                    </div>
                    <p class="text-red-500 text-xs italic"></p>
                  </div>
                </div>
                <!-- !steering -->
                <!-- !fuel -->
                <div class="flex -mx-3">
                  <div class="w-full px-3 flex">
                    <div class="pr-2">
                      <label for="" class="text-sm text-gray-600 px-1"
                        >Fuel:</label
                      >
                    </div>
                    <div class="flex w-full">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      ></div>
                      <input
                        v-model="car_fuel"
                        type="range"
                        required
                        class="w-full -ml-10 px-4 py-2 accent-blue-600 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                        min="0"
                        max="3"
                        step="0.25"
                      />
                    </div>
                    <p class="text-red-500 text-xs italic"></p>
                  </div>
                </div>
                <!-- !fuel -->
                <!-- !transmission -->
                <div class="flex -mx-3">
                  <div class="w-full px-3 flex">
                    <div class="pr-2">
                      <label for="" class="text-sm text-gray-600 px-1"
                        >Transmission:</label
                      >
                    </div>
                    <div class="flex w-full">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      ></div>
                      <input
                        v-model="car_transmission"
                        type="range"
                        required
                        class="w-full -ml-10 px-4 py-2 accent-blue-600 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                        min="0"
                        max="5"
                        step="0.5"
                      />
                    </div>
                    <p class="text-red-500 text-xs italic"></p>
                  </div>
                </div>
                <!-- !transmission -->
                <!-- !electric condition -->
                <div class="flex -mx-3">
                  <div class="w-full px-3 flex">
                    <div class="pr-2">
                      <label for="" class="text-sm text-gray-600 px-1"
                        >Electric Condition:</label
                      >
                    </div>
                    <div class="flex w-full">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      ></div>
                      <input
                        v-model="car_electric"
                        type="range"
                        required
                        class="w-full -ml-10 px-4 py-2 accent-blue-600 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                        min="0"
                        max="6"
                        step="0.5"
                      />
                    </div>
                    <p class="text-red-500 text-xs italic"></p>
                  </div>
                </div>
                <!-- !electric condition -->
                <!-- !accessoriies -->
                <div class="flex -mx-3">
                  <div class="w-full px-3 flex">
                    <div class="pr-2">
                      <label for="" class="text-sm text-gray-600 px-1"
                        >Accessories:</label
                      >
                    </div>
                    <div class="flex w-full">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      ></div>
                      <input
                        v-model="car_accessories"
                        type="range"
                        required
                        class="w-full -ml-10 px-4 py-2 rounded-lg accent-blue-600 border-2 border-gray-200 outline-none focus:border-blue-500"
                        min="0"
                        max="3"
                        step="0.25"
                      />
                    </div>
                    <p class="text-red-500 text-xs italic"></p>
                  </div>
                </div>
                <!-- !accessories -->
                 <!-- !accessoriies -->
                <div class="flex -mx-3">
                  <div class="w-full px-3 flex">
                    <div class="pr-2">
                      <label for="" class="text-sm text-gray-600 px-1"
                        >Suspension:</label
                      >
                    </div>
                    <div class="flex w-full">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      ></div>
                      <input
                        v-model="car_suspension"
                        type="range"
                        required
                        class="w-full -ml-10 px-4 py-2 rounded-lg accent-blue-600 border-2 border-gray-200 outline-none focus:border-blue-500"
                        min="0"
                        max="3"
                        step="0.25"
                      />
                    </div>
                    <p class="text-red-500 text-xs italic"></p>
                  </div>
                </div>
                <!-- !accessories -->
                <!-- !interior -->
                <div class="flex -mx-3">
                  <div class="w-full px-3 flex">
                    <div>
                      <label for="" class="text-sm text-gray-600 px-1"
                        >Interior:</label
                      >
                    </div>
                    <div class="flex w-full">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      ></div>
                      <input
                        v-model="car_interior"
                        type="range"
                        required
                        class="w-full -ml-10 px-4 py-2 rounded-lg accent-blue-600 border-2 border-gray-200 outline-none focus:border-blue-500"
                        min="0"
                        max="3"
                        step="0.25"
                      />
                    </div>
                    <p class="text-red-500 text-xs italic"></p>
                  </div>
                </div>
                <!-- !interior -->
                

                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <button
                      @click="handleSubmit"
                      type="button"
                      class="w-full text-center mx-auto bg-blue-500 duration-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="hidden md:block w-1/2 bg-white p-4">
            <img class="h-4/5 w-full" src="@/assets/images/car.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
const emits=defineEmits(["fileChange"])
// testing file upload
const fileUpload = ref(null);
const onfileChange=async(e)=>{
   var files=e.target.files || e.dataTransfer.files;
   if(!files.length)return;
   const {snapshot,downloadUrl,metadata} = await uploadFile(files[0]);
   emits("fileChange",snapshot,downloadUrl,metadata);
   console.log('download url from sell',downloadUrl)
   fileUpload.value=downloadUrl

}

// file
const car_model = ref("");
const car_year = ref("");
const car_location = ref("");
const car_price = ref("");
const car_engine = ref(0);
const car_milage = ref(0);
const car_transmission = ref(0);
const car_fuel = ref(0);
const car_steering = ref(0);
const car_tyre = ref(0);
const car_body = ref(0);
const car_electric = ref(0);
const car_accessories = ref(0);
const car_interior = ref(0);
const car_suspension=ref(0);
const final_price=ref(0)

const total_rate=ref(0.0)
const firebaseUser=useFirebaseUser()
const router=useRouter()
const handleSubmit = async () => {

  
  if(car_model.value && car_year.value && car_location.value && car_price.value && car_engine.value && car_milage.value && car_transmission.value && car_fuel.value && car_steering.value && car_tyre.value && car_body.value && car_electric.value && car_accessories.value && car_interior.value && car_suspension.value){
    
    total_rate.value=(parseFloat(car_engine.value)+parseFloat(car_milage.value)+ parseFloat(car_transmission.value) + parseFloat(car_fuel.value) + parseFloat(car_steering.value) + parseFloat(car_tyre.value) + parseFloat(car_body.value) + parseFloat(car_electric.value) + parseFloat(car_accessories.value) + parseFloat(car_interior.value))
    console.log(total_rate.value)
    final_price.value=(total_rate.value/50)*car_price.value
    console.log('final price is ',final_price.value)

    await addCar(firebaseUser.value.uid,car_model.value,car_year.value,car_location.value,car_price.value,car_engine.value,car_milage.value,car_transmission.value,car_fuel.value,car_steering.value,car_tyre.value,car_body.value,car_electric.value,car_accessories.value,car_interior.value,fileUpload.value,car_suspension.value);
    router.push('/seller')
    console.log('url inside the submit',fileUpload.value)
  console.log(
    `${car_model.value} ${car_year.value} ${car_location.value} ${car_price.value} ${car_engine.value} ${car_milage.value} ${car_transmission.value} ${car_fuel.value} ${car_steering.value} ${car_tyre.value} ${car_body.value} ${car_electric.value} ${car_accessories.value} ${car_interior.value}`
  );
  }else{
    console.log('dont leave any field empty')
  }
  

  
};
const showNext = ref(false);
const handleNext = () => {
  showNext.value = !showNext.value;
};

const locations = ref([
  "Nairobi",
  "Eldoret",
  "Garissa",
  "Nakuru",
  "Mombasa",
  "Meru",
  "Kisumu",
  "Kakamega",
  "Bungoma",
]);
const years = ref([
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
  "2010",
]);
const models = ref([
  "Toyota Fielder",
  "Mazda Demio",
  "Toyota Noah",
  "Toyota Axio",
  "Toyota Prado",
  "Subaru Forester",
  "Honda Fit",
  "Nissan X-Trail",
  "Subaru Exiga",
  "Toyota Wish",
]);
</script>

<style lang="scss" scoped></style>
