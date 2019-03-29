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
    .doc()
    .set({
      name: document.querySelector("#name").value,
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

db.collection("trains").onSnapshot(snap => {
  snap.docs.forEach(doc => {
    let { name, destination, time, frequency } = doc.data();

    console.log(
      `Trains first time: ${time} and comes every ${frequency} minutes`
    );
    //Grab current time
    let currentTime = moment().format("HH:MM");
    console.log(`current time: ${currentTime}`);

    //Difference between now and unix of train time
    let difference = moment().diff(moment().unix(time), "minutes");
    console.log(`Difference: ${difference}`);

    //Time apart
    let remainder = moment().diff(difference, "minutes") % frequency;
    console.log(`remainder is ${remainder}`);

    //Calculates minutes remaining until next train
    let minutes = frequency - remainder;
    console.log(`Minutes until next: ${minutes}`);

    //Add minutes to next train to current time
    let nextArr = moment()
      .add(minutes, "m")
      .format("HH:MM A");

    //Change HTML to reflect data
    let trainElem = document.createElement("tr");
    trainElem.innerHTML = `<td>${name}</td>
    <td>${destination}</td>
    <td>${frequency}</td>
    <td>${nextArr}</td>
    <td>${minutes}</td>`;
    document.querySelector("#train-table").append(trainElem);
  });
});
