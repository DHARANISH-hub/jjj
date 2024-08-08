const firebaseConfig = {
    apiKey: "AIzaSyAgXREjq1OYQ5bW_LKLaLCeGJZhLOcIOLg",
    authDomain: "register-page-gec.firebaseapp.com",
    databaseURL: "https://register-page-gec-default-rtdb.firebaseio.com",
    projectId: "register-page-gec",
    storageBucket: "register-page-gec.appspot.com",
    messagingSenderId: "275157369151",
    appId: "1:275157369151:web:22476628ef091c5116538a",
    measurementId: "G-8PWV33FYKL"
  }

  // reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};


