import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  const itemsRef = collection(db, "users", userId, "items");
  const q = query(itemsRef);
  const snapshot = await getDocs(q);

  const items = []
  snapshot.forEach((docSnapshot) => {
    const itemData = docSnapshot.data();
    items.push({
       id: docSnapshot.id,
       name: itemData.name,
        quantity: itemData.quantity,
        unit: itemData.unit, 
      });
  });
  console.log("items:", items);
  return items;
};

export const addItem = async (userId, item) => {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
};
