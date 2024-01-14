import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyA_UQ5upo8BSpQ7iXU-ACWde2vZyhZsWWc",
  authDomain: "myleaderboard-sh.firebaseapp.com",
  projectId: "myleaderboard-sh",
  storageBucket: "myleaderboard-sh.appspot.com",
  messagingSenderId: "137868057524",
  appId: "1:137868057524:web:be526fe3efbed74ff730e1",
  measurementId: "G-70P7R1Y5NE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
