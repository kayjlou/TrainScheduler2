// Initialize Firebase
var config = {
  apiKey: "AIzaSyDL3h8psDVqZjKdkx5GvxAzEfqERI8tnE4",
  authDomain: "train-25009.firebaseapp.com",
  databaseURL: "https://train-25009.firebaseio.com",
  projectId: "train-25009",
  storageBucket: "train-25009.appspot.com",
  messagingSenderId: "227750187416"
};

firebase.initializeApp(config);

const db = firebase.firestore();
//Create object to hold values
let name, destination, time, frequency;

//On submit push data
document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //Push values to firebase
  db.collection("trains")
    //Set name of train as document
    .doc(document.querySelector("#name").value)
    .set({
      // name: document.querySelector("#name").value,
      destination: document.querySelector("#destination").value,
      time: document.querySelector("#time").value,
      frequency: parseInt(document.querySelector("#frequency").value)
    });
  console.log("Train has been added");
  //Clear all the text boxes
  document.querySelector("#name").value = "";
  document.querySelector("#destination").value = "";
  document.querySelector("#time").value = "";
  document.querySelector("#frequency").value = "";
});

//Onclick submit display train in table
document.querySelector("#submit").addEventListener("click", e => {
  //Prevent refresh
  e.preventDefault();

  //create variables to hold forebase data
  let tName = 
  let tDest =
  let tTime = 
  let tFrequency = 
});
