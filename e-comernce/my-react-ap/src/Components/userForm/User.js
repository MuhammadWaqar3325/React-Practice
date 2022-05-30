// import React,{useState} from 'react'
// import {firestore} from "../../config/firebase";
// import { collection ,addDoc} from "firebase/firestore/lite";

// function User() {
//     const [userName, setuserName] = useState("");
//     const [userAge, setuserAge] = useState();
//  const collectionName = "User";
//     const docCollectionRef = collection(firestore,collectionName)

//     // console.log(userName)

//  const addData = async ()=>{
 
// const formData = {
//     userName,
//     userAge,
// }
// // setuserName("")
// // setuserAge("")
//     try {
//         const docRef = await addDoc(docCollectionRef,formData)
//         console.log(docRef.id)
//         setuserName("")
//         setuserAge("")
//     } catch (error) {
//         console.log(error)
//     }
//  }




//   return (
//     <>
//     <input type="text"
//     value={userName}
//      placeholder='Enter your name' 
//      onChange={(e)=>setuserName(e.target.value)}
//       />
//     <input type="number" 
//     placeholder='Enter your age'  
//     value={userAge}
//     onChange={(e)=>setuserAge(e.target.value)}
    
//     />
//     <button type='submit' onClick={addData}>Submit</button>
//     </>
//   )
// }

// export default User;