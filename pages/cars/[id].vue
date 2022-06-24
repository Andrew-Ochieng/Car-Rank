<template>
  <div class="mt-5 pl-11 pr-5 mb-5">
    <div class="flex">
      <div class="mr-10">
        <div class="w-full">
          <div class="flex justify-center">
            <div class="rounded-lg shadow-lg bg-white">
              <img
                class="rounded-t-lg h-96"
                src="https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467__340.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="mt-10 w-full">
            <div
              class="p-6 bg-white rounded-lg border border-gray-200 shadow-md"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                General Information
              </h5>

              <div class="flex items-center justify-between">
                <h5 class="text-gray-600 text-lg pr-16">Seller Name:</h5>
                <h5 class="text-gray-600 text-lg">Mulati Brian</h5>
              </div>
              <div class="flex items-center justify-between mt-3">
                <h5 class="text-gray-600 text-lg pr-16">Phone number:</h5>
                <h5 class="text-gray-600 text-lg">+254712345678</h5>
              </div>
              <div class="flex items-center justify-between mt-3">
                <h5 class="text-gray-600 text-lg pr-16">Car model:</h5>
                <h5 class="text-gray-600 text-lg">
                  Mercedes-Benz C-Class 2015
                </h5>
              </div>
              <div class="flex items-center justify-between mt-3">
                <h5 class="text-gray-600 text-lg pr-16">Manufacture year:</h5>
                <h5 class="text-gray-600 text-lg">2015</h5>
              </div>
              <div class="flex items-center justify-between mt-3">
                <h5 class="text-gray-600 text-lg pr-16">Color:</h5>
                <h5 class="text-gray-600 text-lg">Black</h5>
              </div>
              <div class="flex items-center justify-between mt-3">
                <h5 class="text-gray-600 text-lg pr-16">Price:</h5>
                <h5 class="text-gray-600 text-lg">Ksh. 290,000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-72 bg-gray-50 ml-5">
        <div class="p-6 bg-white  border border-gray-200 shadow-md">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            General Information
          </h5>

          <div class="flex items-center justify-between">
            <h5 class="text-gray-600 text-lg pr-16">Mileage:</h5>
            <h5 class="text-gray-600 text-lg">20%</h5>
          </div>
          <div class="flex items-center justify-between mt-3">
            <h5 class="text-gray-600 text-lg pr-16">Car Fuel::</h5>
            <h5 class="text-gray-600 text-lg">80%</h5>
          </div>
          <div class="flex items-center justify-between mt-3">
            <h5 class="text-gray-600 text-lg pr-16">Engine Condition:</h5>
            <h5 class="text-gray-600 text-lg">70%</h5>
          </div>
          <div class="flex items-center justify-between mt-3">
            <h5 class="text-gray-600 text-lg pr-16">Body Condition:</h5>
            <h5 class="text-gray-600 text-lg">75%</h5>
          </div>
          <div class="flex items-center justify-between mt-3">
            <h5 class="text-gray-600 text-lg pr-16">Electrical Condition:</h5>
            <h5 class="text-gray-600 text-lg">45%</h5>
          </div>
          <div class="flex items-center justify-between mt-3">
            <h5 class="text-gray-600 text-lg pr-16">Transmission:</h5>
            <h5 class="text-gray-600 text-lg">20%</h5>
          </div>
          <div class="flex items-center justify-between mt-3">
            <h5 class="text-gray-600 text-lg pr-16">Steering System:</h5>
            <h5 class="text-gray-600 text-lg">30%</h5>
          </div>
          <div class="flex items-center justify-between mt-3">
            <h5 class="text-gray-600 text-lg pr-16">Suspension System:</h5>
            <h5 class="text-gray-600 text-lg">30%</h5>
          </div>
           <div class="flex items-center justify-between mt-3">
            <h5 class="text-gray-600 text-lg pr-16">Tires:</h5>
            <h5 class="text-gray-600 text-lg">30%</h5>
          </div>
          <div class="flex items-center justify-between mt-3">
            <h5 class="text-gray-600 text-lg pr-16">Interior Condition:</h5>
            <h5 class="text-gray-600 text-lg">35%</h5>
          </div>
           <div class="flex items-center justify-between mt-3">
            <h5 class="text-gray-600 text-lg pr-16">Accessories:</h5>
            <h5 class="text-gray-600 text-lg">60%</h5>
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
</script>

<style lang="scss" scoped></style>
