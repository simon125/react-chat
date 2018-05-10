import firebase from 'firebase'



const config = {
   apiKey: "AIzaSyCCtBGgJWJa0402SGX225csU2Foq5E84j4",
   authDomain: "jfddl4-sandbox.firebaseapp.com",
   databaseURL: "https://jfddl4-sandbox.firebaseio.com",
   projectId: "jfddl4-sandbox",
   storageBucket: "jfddl4-sandbox.appspot.com",
   messagingSenderId: "631328808238"
}

firebase.initializeApp(config)


  //metoda firebasowa podobna do restowej ale nadal inna 2 rodzaj komunikacji o bok rest api


  export const database = firebase.database()  // <= tworyz nam obiekt który przechowuje "metody do obslugi bazy danych" i dzieki exportowi mozęmy używać w plikach gdzie go zaimportujemy
