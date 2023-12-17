import { signInWithGooglePopup } from "../utils/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(response)
    }

    return (
        <button onClick={logGoogleUser}>Sign In With Google</button>
    )
}
export default SignIn