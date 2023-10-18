import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDoc, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';

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
    const docRef = await addDoc(collection(db, 'ticketBuyer'), ticketBuyer);
    const docId = docRef.id;
    console.log('Document written');
    return docId;
  } catch (error) {
    console.error('Error adding document: ', error);
    return false
  }
};

const getTicketById = async (ticketId) => {
  try {
    console.log(ticketId);

    const docRef = doc(db, 'ticketBuyer', ticketId);
    console.log(docRef);

    const ticket = await getDoc(docRef);
    console.log(ticket);

    if (!ticket.exists()) {
      console.log('Ticket not found');
      return null;
    }

    const ticketBuyer = ticket.data();
    console.log(ticketBuyer);

    return ticketBuyer;
  } catch (error) {
    console.error('Error getting ticket: ', error, ticketId);
    return null;
  }
};

const updateRefCreated = async (docId) => {
  try {
    const ticketBuyerRef = doc(db, 'ticketBuyer', docId);
    console.log('ticketBuyerRef', ticketBuyerRef);
    await updateDoc(ticketBuyerRef, { referenceCreated: true });
    return true;
  } catch (error) {
    console.error('Error updating document: ', error);
    return false
  }
};

export { db, addTicketBuyer, updateRefCreated, getTicketById };
