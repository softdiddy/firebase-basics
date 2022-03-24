import {initializeApp} from 'firebase/app'
import {
    getFirestore,collection,getDocs,addDoc,deleteDoc,doc,onSnapshot,query,where,
    orderBy,serverTimestamp,getDoc,updateDoc
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
  /* getDocs(colRef)
  .then((snapshot) => {
     let books=[];
     snapshot.docs.forEach((doc) => {
         books.push({...doc.data(), id: doc.id})
     })
     console.log(books)
  })
  .catch(err => {
      console.log(err)
  }) */


  //real time collection data
onSnapshot(colRef, (snapshot) => {
    let books=[];
    snapshot.docs.forEach((doc) => {
        books.push({...doc.data(), id: doc.id})
    })
    console.log(books)
})


  //adding to the collection //addDoc
  const addBookForm=document.querySelector('.add')
    addBookForm.addEventListener('click', (e) => {
	let bookname = "fgfgwe rfjwebfrw erf wrfhj";
    let author = "Lawal";
	addDoc(colRef, {
		book_name: bookname,
		author: author,
        createdAt: serverTimestamp()
	})
	.then(() => {
		console.log("Record Added");
	})
})

    //delete
    const deleteBook=document.querySelector('.delete')
    deleteBook.addEventListener('click', (e) => {
        let bookId = "4s1FBauePjreD0wghXal";
        const docRef= doc(db, 'books', bookId)
        deleteDoc(docRef)
        .then(() => {
            console.log("Deleted");
        })
    })


    //get record using where
    const whereRecord=document.querySelector('.whereRecord')
    whereRecord.addEventListener('click', (e) => {

        //querys
        const q= query(colRef, where("id", "==", "Lawal"))

          //real time collection data
            onSnapshot(q, (snapshot) => {
                let books=[];
                snapshot.docs.forEach((doc) => {
                    books.push({...doc.data(), id: doc.id})
                })
                console.log(books)
            })
    })


    //order by 
    const orderby =document.querySelector('.orderby')
    orderby.addEventListener('click', (e) => {

        //querys
        const q= query(colRef, orderBy('createdAt','desc'))

          //real time collection data
            onSnapshot(q, (snapshot) => {
                let books=[];
                snapshot.docs.forEach((doc) => {
                    books.push({...doc.data(), id: doc.id})
                })
                console.log(books)
            })
    })
 
    //get single record
    const getSingle = document.querySelector('.getSingle')
    getSingle.addEventListener('click', (e) => {
        const docRef = doc(db, 'books', 'pAOXJQvruywnmGp9HaEt')
       
        // getDoc(docRef)
        // .then((doc) => {
        //     console.log(doc.data(), doc.id)
        // })

        //real time
        onSnapshot(docRef, (doc) => {
            console.log(doc.data(), doc.id)
        })

    })

    const updateRecord = document.querySelector('.updateRecord')
    updateRecord.addEventListener('click', (e) => {
        const docRef = doc(db, 'books', 'pAOXJQvruywnmGp9HaEt')
        updateDoc(docRef, {
            book_name: 'Introduction to firebase',
            author: 'Sadiya Umar'
        })
        .then( ()=> {
            console.log("clear Data");
        })
    })