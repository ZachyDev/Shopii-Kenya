
const registerUser = () => {
  const userEmail = document.getElementById('email').value;
  const userPass = document.getElementById('pass').value;
  const msgDiv = document.getElementById('msg');

  // create new user
  firebase.auth().createUserWithEmailAndPassword(userEmail,userPass)
    .then(() => {
      msgDiv.innerHTML = "User created successfully!"
      setTimeout(() => {
        window.location.assign('index.html')
      },2000)
    })
    .catch(err => {
      window.alert(err.message)
    })
}
