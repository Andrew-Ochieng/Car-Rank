<template>
  <div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-500 uppercase bg-gray-50 "
        >
          <tr>
            <th scope="col" class="px-6 py-3">Engine Condition</th>
            <th scope="col" class="px-6 py-3">Body</th>
            <th scope="col" class="px-6 py-3">Mileage</th>
            <th scope="col" class="px-6 py-3">Tires</th>
            <th scope="col" class="px-6 py-3">Steering</th>
            <th scope="col" class="px-6 py-3">Electric condition</th>
            <th scope="col" class="px-6 py-3">Fuel Type</th>
            <th scope="col" class="px-6 py-3">Suspension</th>
            <th scope="col" class="px-6 py-3">Interior</th>
            <th scope="col" class="px-6 py-3">Transmission</th>
          </tr>
        </thead>
        <tbody>
          <tr class=" " v-for="rate in rates" :key="rate">
            <td class="">{{rate.engine}}</td>
            <td class="">{{rate.body}}</td>
            <td class="">{{rate.mileage}}</td>
            <td class="">{{rate.tires}}</td>
            <td class="">{{rate.steering}}</td>
            <td class="">{{rate.electrical}}</td>
            <td class="">{{rate.fuelType}}</td>
            <td class="">{{rate.suspension}}</td>
            <td class="">{{rate.interior}}</td>
            <td class="">{{rate.transmission}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const rates = ref([
  {
    engine: "Noises",
    body: "Bonnet",
    mileage: "150,000KM+",
    tires: "Rotation",
    steering: "Power Steering Fluid Level",
    electrical: "Fog lights",
    fuelType: "Battery powered",
    suspension: "Shocks",
    interior: "Roof Rear",
    transmission: "Noises",
  },
  {
    engine: "Leaks",
    body: "Paint",
    mileage: "150,000-100,000KM",
    tires: "Balance",
    steering: "Wear",
    electrical: "Indicators Lights",
    fuelType: "Petrol",
    suspension: "Sway Bar",
    interior: "Rear View Mirror",
    transmission: "Leaks",
  },
  {
    engine: "Corrosion",
    body: "Trunk",
    mileage: "99,999-50,000KM",
    tires: "Wear",
    steering: "Play",
    electrical: "Hazard Lights",
    fuelType: "Diesel",
    suspension: "Looseness",
    interior: "Visors",
    transmission: "Transmission Housing",
  },
  {
    engine: "Belts",
    body: "Cowl Panel",
    mileage: "49,999-1KM",
    tires: "Alignment",
    steering: "Shaft",
    electrical: "Parking Lights",
    fuelType: "Solar powered",
    suspension: "Cracks",
    interior: "Head Rests",
    transmission: "Transfer Box",
  },
  {
    engine: "Hoses",
    body: "Fenders",
    mileage: "",
    tires: "",
    steering: "Leaks",
    electrical: "Reverse Lights",
    fuelType: "",
    suspension: "Wear",
    interior: "Seats",
    transmission: "Propellor shaft",
  },
  {
    engine: "Noises",
    body: "Mirrors",
    mileage: "",
    tires: "",
    steering: "Noises",
    electrical: "Headlamps",
    fuelType: "",
    suspension: "Ball Joints",
    interior: "Door Handles",
    transmission: "Diffferential",
  },
  {
    engine: "Efficiency",
    body: "Front Wind Shield",
    mileage: "",
    tires: "",
    steering: "",
    electrical: "Interior Lights",
    fuelType: "",
    suspension: "Noise",
    interior: "Air Vents",
    transmission: "Axels",
  },
  {
    engine: "Gear power",
    body: "Rear Wind Shield",
    mileage: "",
    tires: "",
    steering: "",
    electrical: "Dashboard",
    fuelType: "",
    suspension: "Play",
    interior: "Dashboards",
    transmission: "Pressure plates",
  },
  {
    engine: "Engine knock",
    body: "Front doors",
    mileage: "",
    tires: "",
    steering: "",
    electrical: "Headlamps",
    fuelType: "",
    suspension: "",
    interior: "Floor Carpet",
    transmission: "Electronic Clutch",
  },
  {
    engine: "Exhaust Gas Quality",
    body: "Rear doors",
    mileage: "",
    tires: "",
    steering: "",
    electrical: "Starter",
    fuelType: "",
    suspension: "",
    interior: "",
    transmission: "Transaxle",
  },
]);
</script>

<style lang="scss" scoped></style>
