// import React , { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
// import { app } from "../firebase"

// const auth = getAuth(app);

// const SignupPage = () =>{
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const createUser = () => {
//         createUserWithEmailAndPassword(
//             auth,
//             email,
//             password
//         ).then((value) => alert("success") ).catch((error) => alert(error.message));
//     };
//     return (
//         <div className = "Signup-page">
//             <label>Email</label>
//             <input onChange ={(e) => setEmail(e.target.value)} 
//             value = {email}
//             type="email" placeholder="Enter your email" />
//             <label>Password</label>
//             <input onChange ={(e) => setPassword(e.target.value)} value = {password} type="password" placeholder="Enter your password" />
//             <button onClick={createUser}>Sign Up</button>
//         </div>
//     )
// }

// export default SignupPage;