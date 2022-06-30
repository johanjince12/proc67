import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAhyFCnPfJ_zk1rZp2IaxnHitRHMHH_UwM",
    authDomain: "teamvoting-7ffad.firebaseapp.com",
    projectId: "teamvoting-7ffad",
    storageBucket: "teamvoting-7ffad.appspot.com",
    messagingSenderId: "1073674301402",
    appId: "1:1073674301402:web:570ec1c32d952e1a881ae3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();