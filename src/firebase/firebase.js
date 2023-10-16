import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAvjIvX4K_Nzu6kJG4vVOXOkNEI7hZynfU",
  authDomain: "gala-9cabb.firebaseapp.com",
  projectId: "gala-9cabb",
  storageBucket: "gala-9cabb.appspot.com",
  messagingSenderId: "95473473677",
  appId: "1:95473473677:web:1032cb6f0327651e366ac4",
  measurementId: "G-6C41QK59CM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const fetchData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'ticketBuyer'));

    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  } catch (error) {
    console.error('Error getting documents:', error);
  }
};

const addTicketBuyer = async (ticketBuyer) => {
    try {
        const docRef = await addDoc(collection(db, 'ticketBuyer'), ticketBuyer);
        console.log('Document written with ID: ', docRef.id);
    } catch (error) {
        console.error('Error adding document: ', error);
    }
};

fetchData();

export { db, addTicketBuyer };
