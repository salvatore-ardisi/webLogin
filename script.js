firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // user is signed in
    document.getElementById('user_div').style.display = 'block';
    document.getElementById('login_div').style.display = 'none';
    // otherwise
  } else {
    // no user is signed in
    document.getElementById('user_div').style.display = 'none';
    document.getElementById('login_div').style.display = 'block';
  }
});

login = () => {
  var userEmail = document.getElementById('email_field').value;
  var userPass = document.getElementById('password_field').value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert('Error: ' + errorMessage);
    });
};

logout = () => {
  firebase.auth().signOut();
};
