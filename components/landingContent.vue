<template>
  <div>
    <div
      class="container md:px-8 px-4 md:pt-16 pt-8 md:flex gap-8 justify-between"
    >
      <div>
        <img
          class="bg-cover w-full rounded-lg"
          src="@/assets/images/car2.jpg"
          alt=""
        />
      </div>

      <div class="md:py-0 py-8">
        <p class="pb-4 lg:text-2xl md:text-xl text-md text-gray-800">
          WE VALUE
          <span class="text-blue-600">QUALITY </span>& CUSTOMER <br />
          SATISFACTION
        </p>
        <p class="lg:leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>

    <div class="container md:px-8 px-4 py-4 flex items-center justify-center">
      <div>
      <h3 class="p-4 text-lg text-gray-800">OUR CAR COLLECTIONS</h3>
      <div>
        <div class="grid grid-cols-3 gap-8">
          <div v-for="car in cars" :key="car.id">
            <div
              class="w-80 bg-white rounded-lg border border-gray-200 shadow-md"
            >
              <img class="rounded-t-lg h-44 w-full" :src="car.pic" alt="" />

              <div class="p-5">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {{car.name}}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cars = ref([
  {
    id: "1",
    pic: "https://cdn.pixabay.com/photo/2014/03/28/00/18/car-299772__340.jpg",
    name: "Porshe",
  },
  {
    id: "2",
    pic: "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220__340.jpg",

    name: "Mercedes",
  },
  {
    id: "3",
    pic: "https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467__340.jpg   ",
    name: "BMW",
  },
  {
    id: "4",
    pic:"https://cdn.pixabay.com/photo/2016/11/22/23/55/car-1851299__340.jpg",
    name: "Range Rover",
  },
  {
    id: "5",
    pic: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Volkswagen",
  },
  {
    id: "6",
    pic:"https://cdn.pixabay.com/photo/2016/12/07/21/50/car-1890494__340.jpg",
    name: "Bughatti",
  },
  {
    id: "7",
    pic:"https://cdn.pixabay.com/photo/2012/04/12/23/48/car-30990__340.png",
    name: "Ferrari",
  },
  {
    id: "8",
    pic: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Lamborgini",
  },
]);
</script>

<style scoped></style>
