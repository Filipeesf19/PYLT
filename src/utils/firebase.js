import firebase from "firebase/compat/app";
import "firebase/firestore";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  addDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJ25C7KORZjl7GPB2FPIea3n_9Dl0aZCc",
  authDomain: "put-your-life-together.firebaseapp.com",
  projectId: "put-your-life-together",
  storageBucket: "put-your-life-together.appspot.com",
  messagingSenderId: "634816148398",
  appId: "1:634816148398:web:2d4aa9a93ccbf3c3a3ce3f",
};

export default firebase;

firebase.initializeApp(firebaseConfig);

export const db = getFirestore();

// Collections
export const selfAwarenessCol = collection(db, "SelfAwarenessText"); //Collection of sections in the Self Awareness Page
export const toDoTaskCol = collection(db, "ToDoTaskList"); //Collection of sections in the Self Awareness Page

//CRUD FUNCTIONS

// GET DOCUMENT
export const getDocument = async (col, id, action) => {
  const docRef = doc(db, `${col}`, `${id}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    let data = docSnap.data();
    data.id = `${id}`;
    action(data);
  } else {
    console.log("no data");
  }
};

//GET COLLECTION
export const fetchAndSetData = async (col, action) => {
  try {
    onSnapshot(col, (snapshot) => {
      let data = [];
      snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      action(data);
    });
    fetchAndSetData;
  } catch (error) {
    console.log(error);
  }
};

//UPDATE DATA
export const updateData = async (col, id, newData) => {
  const docRef = doc(db, `${col}`, `${id}`);
  await updateDoc(docRef, newData);
};

//ADD DATA
export const addData = async (col, newData) => {
  await addDoc(col, newData);
};

//DELETE DOCUMENT
export const deleteData = async (col, id) => {
  await deleteDoc(doc(db, col, `${id}`));
};