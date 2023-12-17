import { initializeApp } from "firebase/app"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDXX6y-rm0Yz5IBlQ101SPROcGIqVZiZaY",
  authDomain: "chatapp-243ef.firebaseapp.com",
  projectId: "chatapp-243ef",
  storageBucket: "chatapp-243ef.appspot.com",
  messagingSenderId: "877071426103",
  appId: "1:877071426103:web:5e7c28a80436f038ce15b2",
  measurementId: "G-C88L1FZ642"
}

export const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
provider.setCustomParameters({   
  prompt : "select_account "
})
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
