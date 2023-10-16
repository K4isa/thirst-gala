import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const fetchData = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, ''));

//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
//     });
//   } catch (error) {
//     console.error('Error getting documents:', error);
//   }
// };

const addTicketBuyer = async (ticketBuyer) => {
    try {
        await addDoc(collection(db, 'ticketBuyer'), ticketBuyer);
        console.log('Document written');
        return true
    } catch (error) {
      console.error('Error adding document: ', error);
      return false
    }
};

export { db, addTicketBuyer };
