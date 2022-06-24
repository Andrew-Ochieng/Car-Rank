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
                                    <label for="" class="text-xs font-semibold px-1">Username</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="text-gray-400 text-lg"></i></div>
                                        <input 
                                        v-model="username"
                                        type="name" required class="w-full -ml-10 pl-4 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="John Doe">
                                    </div>
                                    <p v-if="usernameError" class="text-red-500 text-xs italic">{{usernameError}}</p>
                                </div>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-5">
                                    <label for="" class="text-xs font-semibold px-1">Email</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="text-gray-400 text-lg"></i></div>
                                        <input 
                                        v-model="email"
                                        type="email" required class="w-full -ml-10 pl-4 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="johndoe@gmail.com">
                                    </div>
                                    <p v-if="emailError" class="text-red-500 text-xs italic">{{emailError}}</p>
                                </div>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-12">
                                    <label for="" class="text-xs font-semibold px-1">Password</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="text-gray-400 text-lg"></i></div>
                                        <input
                                        v-model="password"
                                         type="password" required class="w-full -ml-10 pl-4 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="************">
                                    </div>
                                    <p v-if="passwordError" class="text-red-500 text-xs italic">{{passwordError}}</p>
                                </div>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-5">
                                    <button 
                                    type="button"
                                    @click="handleRegister"
                                    class=" w-full mx-auto bg-blue-500 duration-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
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

                    <div class="hidden md:block w-1/2 bg-white p-4">
                        <img class="h-4/5 w-full " src="@/assets/images/car.jpg" alt="">

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import {getAuth} from 'firebase/auth'
const email=ref('')
const password=ref('')
const username=ref('')
const passwordError=ref(null)
const emailError=ref(null)
const usernameError=ref(null)

const handleRegister=async()=>{
    if(email.value && password.value && password.value.length>=6 && username.value){
        passwordError.value=null
        emailError.value=null
        usernameError.value=null
       await signUp(auth,email.value,password.value,username.value)
       
    }else{
        passwordError.value="Please enter the password of 6 characters"
        emailError.value="Please enter an email address"
        usernameError.value="Please enter your username"
    }
}
let auth;
onMounted(async()=>{
auth=getAuth()
})



</script>

<style scoped>

</style>