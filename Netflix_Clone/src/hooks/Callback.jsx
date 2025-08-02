// import { useCallback } from "react";
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { db } from "../firebase/config";
// export const getDetails = async (email) => {
//     try {
//         const q = query(collection(db, "users"), where("email", "==", email));
//         const snapshot = await getDocs(q);

//         if (snapshot.empty) {
//             return null;
//         }

//         const doc = snapshot.docs[0];

//         return { id: doc.id, ...doc.data() };
//     } catch (err) {
//         return null;
//     }
// };

// export const useCheck = () => {
//     return useCallback(async (email, password) => {
//         const user = await getDetails(email);

//         if (!user) {
//             return "You don't have an account, Please sign up";
//         }

//         if (user.email !== email) {
//             return "Email not found";
//         }

//         if (user.password !== password) {
//             return "Incorrect password";
//         }

//         return true;
//     }, []);
// };
