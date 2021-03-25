// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAR-fxVU8rhScgFN6V5hDFr8DKAZI7KM5k",
    authDomain: "healthbharat-fa468.firebaseapp.com",
    projectId: "healthbharat-fa468",
    storageBucket: "healthbharat-fa468.appspot.com",
    messagingSenderId: "1058506343655",
    appId: "1:1058506343655:web:5915e61a8697670a818e42"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //referencing the collection

let contactInfo = firebase.database().ref("information");

//listen for submit
document.querySelector(".form_container2").addEventListener("submit",submitForm);


function submitForm(e) {
    e.preventDefault();

    //fetching the input values
    let fname = document.querySelector(".fname").value;
    let lname = document.querySelector(".lname").value;
    let email = document.querySelector(".mail").value;
    let number = document.querySelector(".phoneno").value;
    let country = document.querySelector(".country").value;
    let message = document.querySelector(".subject").value;

    //console.log(fname, lname, email, number, country, message);

    saveInformation(fname, lname, email, number, country, message);

    document.querySelector(".form_container2").reset();

    sendEmail(fname, lname, email, number, country, message);
}

//save the information to firebase

function saveInformation(fname, lname, email, number, country, message) {
    let newinformation = contactInfo.push();

    newinformation.set({
        fname: fname,
        lname: lname,
        email: email,
        number: number,
        country: country,
        message: message,
    });

    retrieveInformation();
}

//retrieve information
function retrieveInformation(){
    let ref = firebase.database().ref("information");
    ref.on("value", gotData);
}

function gotData(data) {
    let infor = data.val();
    let keys = Object.keys(infor);

    for(let i = 0;i < keys.length; i++){
        let infdata = keys[i];
        let fname = infor[infdata].fname;
        let lname = infor[infdata].lname;
        let email = infor[infdata].email;
        let number = infor[infdata].number;
        let country = infor[infdata].country;
        let message = infor[infdata].message;

        console.log(fname, lname, email, number, country, message);
    }
}

//Sending email
function sendEmail(fname, lname, email, number, country, message) {
    Email.send({
       Host: "smtp.gmail.com",
       Username: 'Healthbharat',
       Password: "Healthybharat",
       To: 'avinash9490251214@gmail.com',
       From: 'healthybharatinfo@gmail.com',
       Subject: `${fname} has raised a complaint`,
       Body: `Name🙂  ${fname} <br> Email📧  ${email} <br> Message📔  ${message}`,
    }).then( message => alert("mail sent successfully"));
}
