import { async } from "@firebase/util";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";


export const signUp =async(email,password,name)=>{
    const auth = getAuth();
    const credentials=createUserWithEmailAndPassword(auth, email, password)
      
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

      return credentials;
}

export const signIp=async(email,password)=>{
    const auth = getAuth();
   const user= signInWithEmailAndPassword(auth, email, password)
     
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      return user
}

export const initUser=async()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log('user state schanged',uid)
    // ...
  } else {
    // User is signed out
    // ...
    console.log('user state changed',uid)
  }
});
}

export const signOut=async()=>{
    const auth=getAuth()
   const result= await auth.signOut()

   return result
}



