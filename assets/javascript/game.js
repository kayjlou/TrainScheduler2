// Initialize Firebase
var config = {
  apiKey: "AIzaSyC2A6gCfH23mJFs4DaUdiOUnY2CLykugQI",
  authDomain: "trainscheduler-ac366.firebaseapp.com",
  databaseURL: "https://trainscheduler-ac366.firebaseio.com",
  projectId: "trainscheduler-ac366",
  storageBucket: "",
  messagingSenderId: "547021647264"
};

firebase.initializeApp(config);

const db = firebase.database();

//On submit push data
document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //Gather inputs
  let name = document.querySelector("#name").value;
  let destination = document.querySelector("#destination").value;
  let time = document.querySelector("#time").value;
  let frequency = parseInt(document.querySelector("#frequency").value);

  console.log(name);
});
