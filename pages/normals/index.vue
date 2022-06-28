<template>
    <div>
    <div v-if="user">
        <div class="flex bg-white drop-shadow-md rounded-lg p-1.5 ml-64 mt-40 w-96">
        <img
          class="w-28 h-28 rounded-full border-4 border-slate-50 object-cover"
          src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg"
        />
        <div class="flex flex-col px-5 py-1">
          <h4 class="font-bold text-lg text-pink-600">
           {{user.name}}
          </h4>
          <h4 >{{user.email}}</h4>

          
        </div>
      </div>
        </div>
    </div>
</template>

<script setup>
import { doc, getDoc,getFirestore } from "firebase/firestore";
definePageMeta({
  layout: "normal",
});
const firebaseUser=useFirebaseUser()
const user=ref(null)
onMounted(async()=>{
    const db =getFirestore()
    
       const userRef = doc(db, "users", firebaseUser.value.uid);
        const docSnap = await getDoc(userRef);
       if(docSnap.exists()){
         user.value=docSnap.data();

       }
})
</script>

<style lang="scss" scoped>

</style>