import Firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAtDIjnH2o0Yf_fw0ZUGbRoCnF-n2e5O5o",
  authDomain: "methodmelody-728b7.firebaseapp.com",
  databaseURL: "https://methodmelody-728b7.firebaseio.com",
  projectId: "methodmelody-728b7",
  storageBucket: "methodmelody-728b7.appspot.com",
  messagingSenderId: "314569026344",
  appId: "1:314569026344:web:0f0e7ed9c22caeef57be1d",
  measurementId: "G-MMJS0RM1DL",
};

Firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { Firebase, storage as default };
