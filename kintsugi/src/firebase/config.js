import firebase from "firebase";

export const config = {
  apiKey: "AIzaSyAwgeo8RtHo_zRjtIPyVCrLe34Ps1iz0HQ",
  authDomain: "kintsugi-8fed9.firebaseapp.com",
  databaseURL: "https://kintsugi-8fed9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kintsugi-8fed9",
  storageBucket: "kintsugi-8fed9.appspot.com",
  messagingSenderId: "679910890411",
  appId: "1:679910890411:web:87fcf69b90d34282c310ee",
  measurementId: "G-KTE8SWQ7C2"
};

const fire = firebase.initializeApp(config);
export default fire;