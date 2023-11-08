const firebaseConfig = {

    apiKey: "SUA_API_KEY",
    authDomain: "SEU_DOMINIO.firebaseapp.com",
    projectId: "SEU_ID_DE_PROJETO",
    storageBucket: "SEU_STORAGE_BUCKET",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
    
    };
  
    // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
  
    // Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const pessoaRef = dbRef.child('avaliacaoip');

var storage = firebase.storage();
  
