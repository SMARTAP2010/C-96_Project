var firebaseConfig = {
      apiKey: "AIzaSyCIUk6VDZcqlXCVVw5hFsffwqsAJ8S3tNE",
      authDomain: "letschatapp-60073.firebaseapp.com",
      databaseURL: "https://letschatapp-60073-default-rtdb.firebaseio.com",
      projectId: "letschatapp-60073",
      storageBucket: "letschatapp-60073.appspot.com",
      messagingSenderId: "368823066883",
      appId: "1:368823066883:web:be084ea33dbf50ecd58936"
    };

    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}