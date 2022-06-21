<template>
    <div>
        <!-- signin -->
        <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
            <div class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style="max-width:1000px">
                <div class="md:flex w-full">
                    <div class="w-full md:w-1/2 py-10 px-6 md:px-10">
                        <div class="text-center mb-10">
                            <h1 class="font-bold text-3xl text-gray-900">SIGN IN</h1>
                            <p>Enter your information to sign in</p>
                        </div>
                        <div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-5">
                                    <label for="" class="text-xs font-semibold px-1">Email</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="text-gray-400 text-lg"></i></div>
                                        <input type="email" required class="w-full -ml-10 px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="johndoe@gmail.com">
                                    </div>
                                </div>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-12">
                                    <label for="" class="text-xs font-semibold px-1">Password</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input type="password" required class="w-full -ml-10 px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="************">
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center justify-between mb-8">
                                <div class="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                    <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
                                </div>

                                <div class="text-sm">
                                    <a href="#" class="font-medium text-blue-600 hover:text-blue-500"> Forgot your password? </a>
                                </div>
                            </div>

                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-5">
                                    <button class="w-full text-center mx-auto bg-blue-500 duration-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold">
                                        SIGN IN
                                    </button>
                                </div>
                            </div>

                            <div class="text-sm font-semibold mt-2 pt-1 mb-0">
                                Don't have an account?
                                <NuxtLink 
                                    to="/signup"
                                    class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">
                                    Sign Up
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

<script>
// import { getAuth } from "firebase/auth";
// import { getFirestore,doc,getDoc } from "@firebase/firestore";

// export default {
//   setup() {
//     const router = useRouter();
//     const firebaseUser = useFirebaseUser();
//     const email = ref("");
//     const password = ref("");
//     const emailError = ref(null);
//     const passwordError = ref(null);
//     let db;
//     let auth;
//     onMounted(() => {
//       auth = getAuth();
//       db = getFirestore();
//     });
//     // user query
//     const handleLogin = async () => {
//       if (password.value && password.value >= 6 && email.value) {
//         emailError.value = null;
//         passwordError.value = null;
//         // sign in
//         const credentials = await signInUser(auth, email.value, password.value);
//         const user = credentials.user;
//         console.log("You have signed in", user);
//         // fetching user info
//         const userRedirect = ref(null);
//         const docRef = doc(db, "users", user.uid);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           userRedirect.value = docSnap.data();
//           console.log("Document data:", docSnap.data());
//           console.log('user found',userRedirect.value)
//           if(userRedirect.value.isAdmin){
//           router.push("/buyer");
//         }else{
//           router.push('/seller')
//         }
//         } else {
//           // doc.data() will be undefined in this case
//           console.log("No such document! check your email in signin");
//         }
        
//         //  check user before redirecting
        
//       } else {
//         emailError.value = "fill out the email";
//         passwordError.value = "fill out the password ";
//       }
//     };
//     return {
//       email,
//       password,
//       emailError,
//       passwordError,
//       handleLogin,
//     };
//   },
// };


</script>

<style lang="scss" scoped>

</style>