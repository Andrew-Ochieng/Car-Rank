<template>
  <div>
    <div class="w-80 bg-white rounded-lg border border-gray-200 shadow-md">
      <img class="rounded-t-lg h-44 w-full" :src="car.fileUpload" alt="" />

      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {{ car.car_model }}
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
            Ksh. {{ final_price }}
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
    const total_rate = ref(0.0);
    const final_price = ref(0.0);
    total_rate.value =
      parseFloat(props.car.car_engine) +
      parseFloat(props.car.car_milage) +
      parseFloat(props.car.car_transmission) +
      parseFloat(props.car.car_fuel) +
      parseFloat(props.car.car_steering) +
      parseFloat(props.car.car_tyre) +
      parseFloat(props.car.car_body) +
      parseFloat(props.car.car_electric) +
      parseFloat(props.car.car_accessories) +
      parseFloat(props.car.car_interior);
    console.log(total_rate.value);

    final_price.value =
      ((total_rate.value / 50) * parseFloat(props.car.car_price)) | 0;
    console.log(final_price.value);
    return { final_price };
  },
};
</script>

<style lang="scss" scoped></style>
