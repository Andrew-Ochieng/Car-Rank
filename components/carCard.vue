<template>
  <div>
    <div class="w-80 bg-white rounded-lg border border-gray-200 shadow-md">
      <img class="rounded-t-lg h-44 w-full" :src="car.fileUpload" alt="" />

      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {{car.car_model}}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">
          <i class="las la-map-marker"></i> {{ car.car_location }}
        </p>
        <p class="mb-3 font-normal text-gray-700">
          <i class="las la-map-marker"></i> {{ car.car_contact }}
        </p>
        <ul
          class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"
        ></ul>

        <div class="flex items-center justify-center">
          <p class="mb-3 font-normal text-gray-700 text-2xl">
            Ksh. {{ car.car_price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["car"],
  setup(props) {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
