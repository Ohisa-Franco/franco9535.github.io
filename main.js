// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLWqyNoKB_hNn3dkFn5D1UA7dfQORSLNw",
  authDomain: "contactform-302e6.firebaseapp.com",
  projectId: "contactform-302e6",
  storageBucket: "contactform-302e6.appspot.com",
  messagingSenderId: "25171692656",
  appId: "1:25171692656:web:abf9d97804e46338f238b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//Reference for database
var messagesRef = firebase.database().ref('messages');



//listen for form submit

document.getElementById("contactForm").addEventListener("submit", submitForm);


//submitForm
function submitForm(e){
e.preventDefault();


//to the get the value

var name = getInputVal('name');
var company = getInputVal('company');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message');

//  console.log(name)

saveMessage(name, company, email, phone, message);


}

//form values
function getInputVal(id){
return document.getElementById(id).value;
}


//function to save messages
function saveMessage(name, email, phone, message){
    newMessageRef = messagesRef.push();

    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}