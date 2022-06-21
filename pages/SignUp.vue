<template>
    <div>
        <!-- signup -->
        <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
            <div class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style="max-width:1000px">
                <div class="md:flex w-full">
                    <div class="w-full md:w-1/2 py-10 px-6 md:px-10">
                        <div class="text-center mb-10">
                            <h1 class="font-bold text-3xl text-gray-900">Sign Up</h1>
                            <p>Enter your information to register</p>
                        </div>
                        <div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-5">
                                    <label for="" class="text-xs font-semibold px-1">Name</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="text-gray-400 text-lg"></i></div>
                                        <input type="name" required class="w-full -ml-10 pl-4 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="John Doe">
                                    </div>
                                </div>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-5">
                                    <label for="" class="text-xs font-semibold px-1">Email</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="text-gray-400 text-lg"></i></div>
                                        <input type="email" required class="w-full -ml-10 pl-4 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="johndoe@gmail.com">
                                    </div>
                                </div>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-12">
                                    <label for="" class="text-xs font-semibold px-1">Password</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="text-gray-400 text-lg"></i></div>
                                        <input type="password" required class="w-full -ml-10 pl-4 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="************">
                                    </div>
                                </div>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-5">
                                    <button class=" w-full mx-auto bg-blue-500 duration-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                                </div>
                            </div>
                            <div class="text-sm font-semibold mt-2 pt-1 mb-0">
                                Already have an account?
                                <NuxtLink 
                                    to="/signin"
                                    class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">
                                    Sign In
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                    <div class="hidden md:block w-1/2 bg-white py-10 px-10">
                        <img class="h-4/5 w-full " src="@/assets/images/car.jpg" alt="">

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>