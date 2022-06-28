import { doc, setDoc,getFirestore } from "firebase/firestore"; 
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";


export const signUp =async(auth,email,password,name)=>{
    const db=getFirestore()
    
    const credentials=await createUserWithEmailAndPassword(auth, email, password)
    await setDoc(doc(db, "users", credentials.user.uid), {
        name: name,
        admin: false,
        email: email
      })
      
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

      return credentials;
}

export const signIn=async(email,password)=>{
    const auth = getAuth();
   const credentials= signInWithEmailAndPassword(auth, email, password)
     
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      return credentials
}

export const initUser=async()=>{
    const auth = getAuth();
    const firebaseUser=useFirebaseUser()
    firebaseUser.value=auth.currentUser
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
    console.log('user state changed',user)
  }
  firebaseUser.value=user
});
}

export const signOut=async()=>{
    const auth=getAuth()
   const result= await auth.signOut()

   return result
}



