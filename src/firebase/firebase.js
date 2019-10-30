
import * as firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCP8Vne94cfrUL89gCUzya3J4zU5Bs_7SQ",
    authDomain: "spark-portfolio.firebaseapp.com",
    databaseURL: "https://spark-portfolio.firebaseio.com",
    projectId: "spark-portfolio",
    storageBucket: "spark-portfolio.appspot.com",
    messagingSenderId: "156180687067",
    appId: "1:156180687067:web:34d6663df8d221128a84fe",
    measurementId: "G-MDCD2GW204"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()
