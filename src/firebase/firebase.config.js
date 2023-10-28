import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB-fmmWdRCUDYdUETI_AyxY4IVuZbh5xyQ",
  authDomain: "dragon-news-devhatem.firebaseapp.com",
  projectId: "dragon-news-devhatem",
  storageBucket: "dragon-news-devhatem.appspot.com",
  messagingSenderId: "49069957139",
  appId: "1:49069957139:web:420ced41668f486f6b1fe6"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;