<template>
  <div class="">
    <client-only>
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
          <img
            class="h-16 bg-gray-100 rounded-full"
            src="https://as1.ftcdn.net/v2/jpg/01/39/69/88/1000_F_139698895_YqcszLvAoImKvuIpXUrbBiaANXXO3pXS.jpg"
            alt="John Doe"
          />
        </div>
        <div>
          <h4
            class="font-semibold md:text-2xl text-lg pt-2 text-gray-700 capitalize font-poppins tracking-wide"
          >
            The Best
          </h4>
          <span
            class="text-sm text-gray-500 tracking-wide flex items-center justify-center py-2"
          >
            Used cars
          </span>
        </div>
      </div>
      <ul class="space-y-4 text-sm">
        <li>
          <nuxt-link
            to="/seller"
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
            <span>Home</span>
            
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/accounts"
            
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
          </nuxt-link>
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
    </client-only>

   
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
