 // Import the functions you need from the SDKs you need
 import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
 import {
     getAuth,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut
 } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
 import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";


 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCJDnJ5dEoLa3XAYL-4Dqm9FSo7cG422SE",
 authDomain: "fir-nehal.firebaseapp.com",
 projectId: "fir-nehal",
 storageBucket: "fir-nehal.appspot.com",
 messagingSenderId: "873839134873",
 appId: "1:873839134873:web:1d2a707d6207f12b411008"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth();
 const database = getDatabase(app);

 submitData.addEventListener('click', (e) => {

     var email = document.getElementById('email').value;
     var password = document.getElementById('psw').value;

     //sign up user
     createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ... user.uid
          // save data into real time database
           set(ref(database, 'users/' + user.uid), {
                email: email,
                password: password
            })
                .then(() => {
                    // Data saved successfully!
                     M.toast({html:`user created successfully ${auth, email}`,classes:"green"}) 
                     window.location.href = "Dashboard.html"; 
                })
                .catch((err) => {
                    console.log(err)
                    // M.toast({html: err.message,classes:'red'})
                    M.toast({html:`Enter Valid Password `,classes:"red"})
                  
                });
        })
        .catch((err) => {
            
                        console.log(err)
                        // M.toast({html: err.message,classes:'red'})
                        M.toast({html:`User Already Created please Log in `,classes:"red"}) 
        });

   
    });

        
      
 
