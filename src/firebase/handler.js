import { collection, addDoc,getDocs } from "firebase/firestore"; 
import { db } from "./firebase";


const handleSubmit = async (data) => {
    console.log("adding users",data)
    try {
        
        const docRef = await addDoc(collection(db, "users"),data);
        

        console.log("Document written with ID: ", docRef.id);

      } catch (e) {
        console.error("Error adding document: ", e);
      }
}



export {handleSubmit}