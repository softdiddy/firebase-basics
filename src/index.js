import {initializeApp} from 'firebase/app'
import {
    getFirestore,collection,getDocs
}from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDd7FIkCcjhF2AOpMso1mI-fe__JowxgoM",
    authDomain: "fir-9-basics-f51ba.firebaseapp.com",
    projectId: "fir-9-basics-f51ba",
    storageBucket: "fir-9-basics-f51ba.appspot.com",
    messagingSenderId: "675783802071",
    appId: "1:675783802071:web:5e862e0d8980c840e2c492",
    measurementId: "G-SM39D828N6"
  };

  //initializing the app
  initializeApp(firebaseConfig);

  //init services
  const db=getFirestore()

  //collection ref
  const colRef=collection(db,'books')

  //get the collection data 
  getDocs(colRef)
  .then((snapshot) => {
     let books=[];
     snapshot.docs.forEach((doc) => {
         books.push({...doc.data(), id: doc.id})
     })
     console.log(books)
  })
  .catch(err => {
      console.log(err)
  })

