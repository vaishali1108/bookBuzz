import {

  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc

} from "firebase/firestore";


import { db } from "../../firebase";



const bookCollection = "books";



// GET

export const fetchBooks = async () => {


  const snapshot = await getDocs(
    collection(db, bookCollection)
  );


  return snapshot.docs.map(item => ({

    id: item.id,
    ...item.data()

  }));

};




// CREATE

export const createBook = async (data) => {


  const response = await addDoc(

    collection(db, bookCollection),

    data

  );


  return {

    id: response.id,
    ...data

  };


};




// UPDATE

export const editBook = async (id, data) => {


  await updateDoc(

    doc(db, bookCollection, id),

    data

  );


  return {

    id,
    ...data

  };


};




// DELETE

export const removeBook = async (id) => {


  await deleteDoc(

    doc(db, bookCollection, id)

  );


  return id;


};