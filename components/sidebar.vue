<template>
  <div class="">
    <div class="bg-white p-3 shadow-lg h-screen">
      <div
        class="flex flex-col justify-center items-center p-2 mb-8 text-center"
      >
        <h2
          class="pt-4 pb-8 md:text-2xl text-xl font-medium text-gray-900 text-center"
        >
          CAR PURCHASE
        </h2>
        <div class="">
          <!--embed :src to pic calling the data from the db (after input in editUsers page)-->
          <img
            class="h-16 bg-gray-100 rounded-full"
            src="@/assets/images/man.png"
            alt="John Doe"
          />
        </div>
        <div>
          <!--embed {{ name }} from db -->
          <h4
            class="font-semibold md:text-2xl text-lg pt-2 text-gray-700 capitalize font-poppins tracking-wide"
          >
            John Doe
          </h4>
          <!--embed {{ number }} from db-->
          <span
            class="text-sm text-gray-500 tracking-wide flex items-center py-2"
          >
            +2547 0123 4567
          </span>

          <!--edit profile-->
          <div>
            <NuxtLink
              class="inline-block px-6 py-2.5 mr-2 bg-gray-200 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
              to="/editUser"
            >
              Edit User
            </NuxtLink>
          </div>
        </div>
      </div>
      <ul class="space-y-4 text-sm">
        <li>
          <a
            href="#"
            class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline"
          >
            <span class="text-gray-600">
              <svg
                class="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <span class="text-gray-600">
              <svg
                class="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span>My profile</span>
          </a>
        </li>
        
        <li>
          <a
            href="#"
            class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <span class="text-gray-600">
              <svg
                class="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <span>Change password</span>
          </a>
        </li>
        <li>
          <button
          v-if="firebaseUser"
            type="button"
            @click="handleSignout"
            class="flex items-center space-x-3 text-red-600 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <span class="text-red-600">
              <svg
                class="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </span>
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>

   
  </div>
</template>

<script setup>
const firebaseUser = useFirebaseUser();
const router=useRouter()
const handleSignout = async () => {
  await signOut();
  router.push('/')
};
</script>

<style scoped></style>
