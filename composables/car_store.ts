import { getFirestore,collection, addDoc } from "firebase/firestore";


export const addCar=async(uid,car_model,car_year,car_location,car_price,car_engine,car_milage,car_transmission,car_fuel,car_steering,car_tyre,car_body,car_electric,car_accessories,car_interior,fileUpload,car_suspension,car_owner,car_contact)=>{
    const db=getFirestore()
    try {
        const docRef = await addDoc(collection(db, "cars"), {
            uid:uid,
            car_model:car_model,
            car_year:car_year,
            car_location:car_location,
            car_price:car_price,
            car_engine:car_engine,
            car_milage:car_milage,
            car_transmission:car_transmission,
            car_fuel:car_fuel,
            car_steering:car_steering,
            car_tyre:car_tyre,
            car_body:car_body,
            car_electric:car_electric,
            car_accessories:car_accessories,
            car_interior:car_interior,
            fileUpload:fileUpload,
            car_suspension:car_suspension,
            car_owner:car_owner,
            car_contact:car_contact

        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
