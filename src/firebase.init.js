
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:process.env.REACT_APP_apikey,
    authDomain:process.env.REACT_APP_authDomain ,
     projectId:process.env.REACT_APP_projectId ,
     storageBucket:process.env.REACT_APP_storageBucket,
     messagingSenderId:process.env.REACT_APP_messagingSenderId,
     appId:process.env.REACT_APP_appId
};
const app = initializeApp(firebaseConfig);
 const auth=getAuth(app);
export default auth;

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDfNqSwKS3RcTWUc_A9Q2G7eCpLh6i5NNw",
//   authDomain: "motohouse-a6b34.firebaseapp.com",
//   projectId: "motohouse-a6b34",
//   storageBucket: "motohouse-a6b34.appspot.com",
//   messagingSenderId: "703405813613",
//   appId: "1:703405813613:web:56415f48506bea11d8b464"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth=getAuth(app);
// export default auth;