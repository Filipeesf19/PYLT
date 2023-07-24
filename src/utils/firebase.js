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
  setDoc,
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

//CRUD FUNCTIONS

//GET COLLECTION
export const getCollection = async (path, setState) => {
  const col = collection(db, path);
  try {
    onSnapshot(col, (snapshot) => {
      let data = [];
      snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setState(data);
      console.log(data);
    });
    getCollection;
  } catch (error) {
    console.log(error);
  }
};

// GET DOCUMENT
export const getDocument = async (path, id, setState) => {
  const docRef = doc(db, path, `${id}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    let data = docSnap.data();
    data.id = `${id}`;
    setState(data);
  } else {
    console.log("no data");
  }
};

//ADD A DOCUMENT WITH AUTO ID
export const addDocumentAutoId = async (path, newData) => {
  const col = collection(db, path);
  await addDoc(col, newData);
};

//ADD DOCUMENT WITHOUT AUTO ID
export const addDocumentAutoIdNoAutoId = async (path, newDocName, fields) => {
  const col = collection(db, path);
  await setDoc(doc(db, col, `${newDocName}`), fields);
};

//DELETE DOCUMENT
export const deleteData = async (path, id) => {
  await deleteDoc(doc(db, path, id));
};

//UPDATE A DOCUMENT
export const updateData = async (path, id, newData) => {
  const docRef = doc(db, path, `${id}`);
  await updateDoc(docRef, newData);
};
