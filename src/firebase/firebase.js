import * as firebase from "firebase";
import { set } from "numeral";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider,database as default };

// //child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses")
//     .once("value")
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref("expenses").on("value", (snapshot) => {
//     const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
// });

// database.ref("expenses").push({
//     description: "rent",
//     createdAt: 0,
//     amount: 12,
//     note: ""
// });

// database.ref("notes/-MBokCS4bRFS-Q9Vnj1x").remove()

// database.ref("notes").push({
//     title: "course topic",
//     body: "react js"
// });

// const firebaseNotes = {
//     notes: {
//         apojasdf: {
//             title: "first note",
//             body:"this is my note"
//         }, 
//         apoihasdfjfeu: {
//             title: "other note",
//             body:"this is my note"
//         }
//     }
// };

// const notes = [{
//     id: "12",
//     title: "first note",
//     body: "this is my note"
// }, {
//     id: "9992",
//     title: "other note",
//     body: "this is not my note"
// }];

// database.ref("notes").set(notes);
// database.ref("notes/12");

// database.ref()
// .once("value")
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log("Error fetching date", e);
// });

// database.ref().set({
//     name: "Benjamin B",
//     age: 26,
//     job: {
//         title: "Dev",
//         company: "Google"
//     },
//     stressLevel: "6",
//     location: {
//         city: "thorigny",
//         country: "FR"
//     }
// }).then(() => {
//     console.log("Data is saved");
// }).catch((e) => {
//     console.log("This failed.", e)
// });

// database.ref().update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Detroit"
// });

// database.ref().remove().then(() => {
//     console.log("Remove succeeded");
// }).catch((e) => {
//     console.log("Remove failed", e);
// });