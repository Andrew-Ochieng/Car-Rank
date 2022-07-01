import { collection, addDoc,getFirestore } from "firebase/firestore"; 

export const newModel=async(model_name)=>{
    const db=getFirestore();
    try {
        const docRef = await addDoc(collection(db, "models"), {
         model_name:model_name
        });
       
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
}
export const newLocation=async(location_name)=>{
    const db=getFirestore();
    try {
        const docRef = await addDoc(collection(db, "locations"), {
            location_name:location_name
        });
       
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}