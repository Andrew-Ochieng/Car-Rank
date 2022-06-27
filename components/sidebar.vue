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
          <img
            class="h-16 bg-gray-100 rounded-full"
            src="@/assets/images/man.png"
            alt="John Doe"
          />
        </div>
        <div>
          <h4
            class="font-semibold md:text-2xl text-lg pt-2 text-gray-700 capitalize font-poppins tracking-wide"
          >
            John Doe
          </h4>
          <span
            class="text-sm text-gray-500 tracking-wide flex items-center py-2"
          >
            +2547 0123 4567
          </span>
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </span>
            <span>Notifications</span>
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
