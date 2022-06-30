<template>
  <div class="flex justify-center items-center mt-auto mb-auto h-screen">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-10"
        >
          <tr>
            <th scope="col" class="px-6 py-3"># No.</th>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b bg-gray-100"
            v-for="(user, index) in users"
            :key="index"
          >
            <td class="px-6 py-4">{{ index + 1 }}</td>
            <td class="px-6 py-4">{{ user.name }}</td>
            <td class="px-6 py-4">{{ user.email }}</td>
            <td class="px-6 py-4 text-right" v-if="user.admin">
              <p
                class="font-medium text-blue-600 dark:text-blue-500 cursor-pointer"
              >
                Admin
              </p>
            </td>
            <td @click="handleAdmin(user.id)" class="px-6 py-4 text-right" v-else>
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
</template>

<script setup>
import { collection, getDocs, getFirestore,doc, updateDoc } from "firebase/firestore";

const users = ref([]);
const router=useRouter()
let db;

const handleAdmin=async(id)=>{
  users.value.forEach(user=>{
    if(user.id==id){
          const userRef = doc(db, "users", user.id);
           updateDoc(userRef, {
            admin: true
        });
        router.push('/seller')

    }
  })

  }
onMounted(async () => {
  db = getFirestore();



  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    users.value.push({ ...doc.data(), id: doc.id });
    console.log(doc.id, " => ", doc.data());
  });
});

definePageMeta({
  layout: "admin",
});
</script>

<style lang="scss" scoped></style>
