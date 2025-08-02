// src/firebase/db.js
import { setDoc, doc } from "firebase/firestore";
import { db } from "./config"; 

export const addUser = async ({ uid, email, name }) => {
  try {
    await setDoc(doc(db, "users", uid), {
      email,
      name,
      createdAt: new Date(),
    });
    console.log("User added to Firestore.");
  } catch (error) {
    console.error("🔥 Firestore addUser error:", error.message);
    throw error; 
  }
};
