const firebaseConfig = {
  apiKey: "AIzaSyD59Nyc500CRdYmyM-hPXdGxT6nt1edcMk",
  authDomain: "ionicfirebaseaapp.firebaseapp.com",
  projectId: "ionicfirebaseaapp",
  storageBucket: "ionicfirebaseaapp.appspot.com",
  messagingSenderId: "19273559184",
  appId: "1:19273559184:web:1d940af46ee6702262fc15",
  measurementId: "G-3C4BZH0CQ2"
};
  
    // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
  
    // Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const pessoaRef = dbRef.child('avaliacaoip');

var storage = firebase.storage();
  
