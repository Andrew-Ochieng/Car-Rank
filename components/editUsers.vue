<template>
    <div>
        <div class="container flex justify-center items-center md:mt-16 mt-8">
            
            <!--add/edit account details-->
            <div>
                <div>
                    <div class="flex justify-center items-center">
                        <!--embed :src from db-->
                        <img
                            class="mb-4 md:h-28 h-16 bg-gray-100 rounded-full"
                            src="@/assets/images/man.png"
                            alt="John Doe"
                        />
                    </div>

                    <!--add-file-->
                    <input @change="handleSelectedFiles" class="items-center" type="file" name="file" ref="fileInput" id="user-image">

                    <p class="mt-4 mb-2 font-medium text-blue-800 text-xl">Upload profile photo</p>
                </div>

                <div>
                    <!--name-->
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <label for="" class="text-base text-gray-800 font-medium px-1">Name</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                    <i class="text-gray-400 text-lg"></i></div>
                                    <input 
                                    v-model="name"
                                    type="text" required class="w-full -ml-10 px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="John Doe">
                            </div>
                        </div>
                    </div>

                    <!--email-->
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <label for="" class="text-base text-gray-800 font-medium px-1">Email</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                    <i class="text-gray-400 text-lg"></i></div>
                                    <input 
                                    v-model="email"
                                    type="text" required class="w-full -ml-10 px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="johndoe@gmail.com">
                            </div>
                        </div>
                    </div>

                    <!--phone number-->
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <label for="" class="text-base text-gray-800 font-medium px-1">Phone Number</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                    <i class="text-gray-400 text-lg"></i></div>
                                    <input 
                                    v-model="phone"
                                    type="number" required class="w-full -ml-10 px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="0712345678">
                            </div>
                        </div>
                    </div>

                </div>

                <!--submit-->
                <div class="flex w-full mb-5">
                    <button
                        @click="uploadPic"
                        type="button"
                        class="w-full text-lg transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 text-center mx-auto duration-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                        Save
                    </button>
                </div>
            </div>

        
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                files: [],
            }
        },
        computed: {
      /*The FormData : Here We Make A Form With Images Data To Submit.*/
      form() {
        let form = new FormData();

        this.files.forEach((file, index) => {
          form.append('files[' + index + ']', file);
        });

        return form;
      }
    },
    methods : {
        handleSelectedFiles() {
            let selectedFiles = this.$refs.fileInput.files;

            for (let i = 0; i < selectedFiles.length; i++) {
                
            // check if file has been selected or not
            let isFileExists = this.files.find(file => file.type === selectedFiles[i].type && file.name === selectedFiles[i].name && file.size === selectedFiles[i].size && file.lastModified === selectedFiles[i].lastModified);

            if (!isFileExists)
                this.files.push(selectedFiles[i]);
            }
        },

        //   handle file upload

    
    }
}
</script>

<style scoped>

</style>