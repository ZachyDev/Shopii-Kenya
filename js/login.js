const signWithGoogleButton = document.getElementById('google');
const signWithGithubButton = document.getElementById('fb');

const loginUser = () => {
    const userEmail = document.getElementById('email').value;
    const userPass = document.getElementById('pass').value;

    // autheticate user
    firebase.auth().signInWithEmailAndPassword(userEmail,userPass)
        .then(() => {
            window.alert('Login success');
            // redirect to barclays.html
            window.location.assign('barclays.html')
        })
        .catch((err) => {
            alert(err.message)
        })

}

// Sign with Google

const signInWithGoogle = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(googleProvider)
        .then(() =>{
            window.location.assign('barclays.html');
        })
        .catch((err) => {
            window.alert(err.message);
        })
}

signWithGoogleButton.addEventListener('click',signInWithGoogle);

// Sign in with Github

const signInWithGithub = () => {

    const githubProvider = new firebase.auth.GithubAuthProvider();

    firebase.auth().signInWithPopup(githubProvider)
        .then(() =>{
            window.location.assign('barclays.html');
        })
        .catch((err) => {
            window.alert(err.message);
        })
}

signWithGithubButton.addEventListener('click',signInWithGithub);