// /*  // this code is simply to see if the connection was made 
// // Import the CSS file for styling
// import './App.css';

// // Import functions from Firebase Realtime Database
// // getDatabase → to get a database instance
// // ref → to make a reference (a "path") in the database
// // set → to write data to that reference
// import { getDatabase, ref, set } from 'firebase/database';

// // Import the Firebase app instance (configured in firebase.js)
// import { app } from './firebase';

// // Initialize the Realtime Database using our app instance
// // db is now our "connection" to Firebase Realtime Database
// const db = getDatabase(app);

// function App() {
//   // A function to put (write) data into the database
//   const putData = () => {
//     // 'ref(db, "user/Maisha")' → points to the path "user/Maisha" in the database
//     // 'set(...)' → writes the given object to that path
//     set(ref(db, 'user/Maisha'), {
//       id: 1,
//       name: 'Maisha Kaur',
//       age: 19
//     });
//     // If "user/Maisha" already exists, this will overwrite it with new data
//   };

//   // The UI (what user sees)
//   return (
//     <div>
//       // {Button that calls putData when clicked }
//       <button onClick={putData}>Put Data</button>
//     </div>
//   );
// }

// // Export App component so React can render it
// export default App;
// */
// //////////////////////////////////////////////////////////////////////////////////////////////////


// // Import Firebase Authentication functions from the Firebase library
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// // Import the Firebase app instance that we exported from firebase.js
// import { app } from "./firebase";

// // Import CSS for styling
// import "./App.css";

// import SignupPage from "./pages/Signup";
// import SigninPage from "./pages/Signin";

// // Create an auth object linked to our Firebase app
// // This lets us use authentication features (sign up, login, etc.)
// // const auth = getAuth(app);

// function App() {
// //   // A function to sign up a user
// //   const signupUser = () => {
// //     // This Firebase function creates a new user with email & password
// //     createUserWithEmailAndPassword(
// //       auth, // the Firebase auth instance (knows which project to use)
// //       "piyush.dev@gmail.com", // email of the new user
// //       "Pikjhgfdcfghjkjhgfd@3" // password of the new user
// //     )
// //     // If the signup is successful, this `.then()` runs
// //     .then((value) => console.log(value));
// //     // `value` contains user information (like uid, email, etc.)
// // };

//   // The UI (what will show in the browser)
//   return (
//    <Routes>
//         <Route path="/" element={<SigninPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/home" element={<HomePage />} />
//       </Routes>
//   );
// }
// // Export the App component so React can render it
// export default App;


