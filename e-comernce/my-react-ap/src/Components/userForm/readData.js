// import React,{useState,useEffect} from 'react'
// import bootstrap from 'bootstrap';
// import { firestore } from "../../config/firebase";
// import { collection, getDocs } from "firebase/firestore/lite";
// import { async } from '@firebase/util';
// function ReadData() {
// const [documents, setdocuments] = useState([])
//     const collectionName = "User";

//     const docCollectionRef = collection(firestore, collectionName)

// const readData = async ()=>{
//     let newArray = [];
//     const docRef = await getDocs(docCollectionRef);
//     docRef.forEach((item)=>{
//         newArray.push({...item.data(),id:item.id,})
//     })
//     setdocuments(newArray)
// }

// useEffect(() => {
//     readData();
// }, [])

//     return (
//         <>
// {
// documents.map((items)=>{
//     return(
//         <p className='text-danger' key={items.id}>UserName:{items.userName} || UserAge:{items.userAge}</p>
//     )
// })
// }
//         </>
//     )
// }

// export default ReadData;