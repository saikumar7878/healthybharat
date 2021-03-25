// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCiSEBmqyEd5OF1K8c4QmNRdWIUtI1kZTQ",
  authDomain: "logincredentials-205e7.firebaseapp.com",
  databaseURL: "https://logincredentials-205e7-default-rtdb.firebaseio.com",
  projectId: "logincredentials-205e7",
  storageBucket: "logincredentials-205e7.appspot.com",
  messagingSenderId: "1061936576061",
  appId: "1:1061936576061:web:3af52daed87f84b474dc54"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
var database = firebase.database();

function SignUp(){
  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var password2 = document.getElementById("password2").value;


  if(password == password2) {
      auth.createUserWithEmailAndPassword(email, password).then((res) => {
      database.ref('User/'+auth.currentUser.uid).set({
          name: name,
          password: password2,
      });
      //showhide();
      }).catch((error) => {
          console.log(error);
          alert(error.message);
      });

  }

  else{
      alert("password didnt match");
      document.querySelector('.form_container').reset();
  }

}

function Login(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password).catch(e => alert(e.message));
  var login = document.getElementById("login");
  login.style.display="none";
  var menuflow = document.getElementById('menuflow');
  menuflow.style.display="block";

}

function logOut(){
  auth.signOut();
  alert("logged Out");
}

auth.onAuthStateChanged(function(user){
  if(user) {
      var login = document.getElementById("login");
      login.style.display="none"
      var menuflow = document.getElementById('menuflow');
      menuflow.style.display="block";
  };
})

function showhide(){
  var div = document.getElementById("login");
  if (div.style.display !== "none") {
      div.style.display = "none";
  }
  /*else {
      div.style.display = "block";
  }*/
}
