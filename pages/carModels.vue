<template>
  <div>
    <h3 class="text-gray-600 text-2xl p-4">Car Models</h3>
    <div class="flex justify-between">
      <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div class="flex justify-between items-center p-4 bg-gray-100">
            <h4 class="text-gray-500 text-sm">All Models</h4>

            <p
              @click="handleModel"
              class="font-medium text-blue-600 dark:text-blue-500 cursor-pointer"
            >
              New Model
            </p>
          </div>
          <table class="w-full text-sm text-left text-gray-500">
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-10"
            >
              <tr>
                <th scope="col" class="px-6 py-3"># No.</th>
                <th scope="col" class="px-6 py-3">Name</th>

                <th scope="col" class="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b bg-gray-100">
                <td class="px-6 py-4">1</td>
                <td class="px-6 py-4">Name</td>

                <td class="px-6 py-4 text-right">
                  <p
                    class="font-medium text-blue-600 dark:text-blue-500 cursor-pointer"
                  >
                    Edit
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-if="showModel" class="shadow-lg">
        <div class="flex flex-col justify-between items-center">
          <h1 class="text-md font-light">Car Purchase</h1>
          <img
            class="h-16 bg-gray-100 rounded-full"
            src="https://as1.ftcdn.net/v2/jpg/01/39/69/88/1000_F_139698895_YqcszLvAoImKvuIpXUrbBiaANXXO3pXS.jpg"
            alt="John Doe"
          />
        </div>

        <div class="continer md:flex flex-col items-start pb-3">
          <div class="p-4">
            <label class="block py-2 text-lg text-gray-900">Model Name:</label>
            <input
              v-model="model_name"
              type="text"
              class="px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
              placeholder="Enter your buying price"
            />
          </div>
        </div>
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
</template>

<script setup>
definePageMeta({
  layout: "super",
});
const showModel = ref(false);
const model_name = ref("");
const model_name_error = ref(null);
const handleModel = () => {
  showModel.value = true;
};
const handleSubmit = async (e) => {
  e.preventDefault();

  if (model_name.value) {
    await newModel(model_name.value);
    console.log(model_name.value);
    showModel.value = false;
  } else {
    console.log("do not leave it empty");
  }
};
</script>

<style lang="scss" scoped></style>
