
var firebaseConfig = {
  apiKey: "AIzaSyBU6PJlLBuUXwOvadqKjDn4E0okcn1TI18",
  authDomain: "classtest-234e3.firebaseapp.com",
  databaseURL: "https://classtest-234e3-default-rtdb.firebaseio.com",
  projectId: "classtest-234e3",
  storageBucket: "classtest-234e3.appspot.com",
  messagingSenderId: "636136810519",
  appId: "1:636136810519:web:84b2b5f9b9821fbc705452",
  measurementId: "G-NJKDPRH206"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

