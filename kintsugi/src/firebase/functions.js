import fire from './config.js';
import firebase from 'firebase';

// Authentication users have: email, displayName (username), profilePicture

const userCollection = fire.firestore().collection('users')
const storageRef = fire.storage().ref();
const providerG = new firebase.auth.GoogleAuthProvider();
const providerF = new firebase.auth.FacebookAuthProvider()

export function signUp(params){
    const email = params.email
    return userCollection.doc(email).get().then((doc) => {
        if (!doc.exists) {
            const actionCodeSettings = {url: window.location.href, handleCodeInApp: true};
            return fire.auth().sendSignInLinkToEmail(email, actionCodeSettings)
            .then(() => {
                return fire.auth().createUserWithEmailAndPassword(email, "12345678")
                .then(()=>{
                    console.log("Email Sent!");
                    return true;
                }).catch((err) => {alert('Sign up unsuccessful. Please try again!'); return;})
            }).catch((error) => {
                console.log(error.code)
                console.log(error.message)
            });
        } else {
            alert("A user with this email already exists.")
        }
    }).catch((err) => alert(err.message))
}

export function signIn(params){
    function helper(credential) {
        fire.auth().signInWithCredential(credential).then(() => console.log('Signed in!'))
        .catch((error) => {
            if (error.code === 'auth/user-not-found') {
                alert("User with given email was not found.")
            } else if (error.code === 'auth/wrong-password') {
                alert("The password is incorrect.")
            }
        });
    }
    var email = params.email
    const password = params.password
    if (!email.includes('@')) {
        userCollection.where('username', '==', email).get().then((snap) => {
            if (snap.empty) {
                alert("User with given username was not found.")
                return
            } else {
                snap.forEach(doc => {
                    email = doc.data().email
                    var credential = firebase.auth.EmailAuthProvider.credential(email, password);
                    helper(credential);
                })
            }
        })
    } else {
        var credential = firebase.auth.EmailAuthProvider.credential(email, password);
        helper(credential);
    }
}

export function createProfile() {
    var user = fire.auth().currentUser
    return fire.auth().signInWithEmailLink(user.email, window.location.href).then((result) => {
        user = result.user
        return userCollection.doc(user.email).set({
            email: user.email,
            firstTime: true
        }).then(()=>{
            console.log("Profile Creation Successful!")
            return user
        }).catch(()=>{
            alert("Unable to verify. Please try again!")
        })
    }).catch((error) => {
        console.log(error.code)
        console.log(error.message)
        alert("Unable to verify. Please try again!")
    });
}

export function getUserInfo(email) {
    return userCollection.doc(email).get()
}

export function getCurrentUserInfo(){
    const user = fire.auth().currentUser;
    if (user != null) {
        return userCollection.doc(user.email).get().then(res=>res.data())
    } else {
        console.log('error occured, try again')
    }
}

export function setCurrentUserInfo(info){
    const user = fire.auth().currentUser;
    if (info.username != user.displayName) {
        if (info.username.length <= 4) {
            alert("Username must be more than 4 characters long.")
            return userCollection.doc(user.email).get()
        } if (info.username.includes("@")) {
            alert("Username cannot have @ in it.")
            return userCollection.doc(user.email).get()
        }
        return userCollection.where('username', '==', info.username).get().then((snap) => {
            if (snap.empty) {
                user.updateProfile({ displayName: info.username })
                return userCollection.doc(user.email).update(info)
            } else {
                alert("Username is already taken.")
                return userCollection.doc(user.email).get()
            }
        }).catch((err) => {
            alert("Profile update was unsuccessful.");
            return userCollection.doc(user.email).get()
        })
    } else {
        return userCollection.doc(user.email).update(info)
    }
}

export function uploadProfilePhoto(photo){
    const user = fire.auth().currentUser;
    storageRef.child('profilePhoto/' + user.email).put(photo)
    return storageRef.child('profilePhoto/' + user.email).getDownloadURL()
}

export function getProfilePhotoByEmail(email){
    return storageRef.child('profilePhoto/' + email).getDownloadURL()
}

export function signUpExt(isGoogle){
    fire.auth().signInWithPopup((isGoogle) ? providerG : providerF).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const cred = result.credential;
        // The signed-in user info.
        const user = fire.auth().currentUser;
        const credential = firebase.auth.EmailAuthProvider.credential(user.email, "12345678");
        user.linkWithCredential(credential);
        userCollection.doc(user.email).set({
            email: user.email,
            firstTime: true,
        })
        console.log("User signed up externally")
    }).catch((error)=>{
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
        console.log(errorMessage)
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
    })
}

export function signInExt(isGoogle){
    fire.auth().signInWithPopup((isGoogle) ? providerG : providerF).then((result) => {
        const user = fire.auth().currentUser
        userCollection.doc(user.email).get().then((doc) => {
            if (!doc.exists) user.delete()
        })
        // This gives you a Google Access Token. You can use it to access the Google API.
        // The signed-in user info.
    }).catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
    })
}

export function reauthenticate(currentPassword){
    const user = firebase.auth().currentUser;
    const cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
}


//////////////////////////// Sign Up/In Functions Over ////////////////////////

