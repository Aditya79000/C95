// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCkTXdklhkYN1S1zWfra899IjQqdbi5RvE",
    authDomain: "c93-project-8acf0.firebaseapp.com",
    projectId: "c93-project-8acf0",
    storageBucket: "c93-project-8acf0.appspot.com",
    messagingSenderId: "321360568335",
    appId: "1:321360568335:web:cbf1e845e194b1722b837a"
  };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
    //End code
   });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
  });

   localStorage.setItem("room_name",room_name);

   window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}