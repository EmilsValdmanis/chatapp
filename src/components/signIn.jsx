import { signInWithGooglePopup } from "../utils/firebase.utils"
import Button from "./button"

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(response)
    }

    return (
        <Button 
            onClick={logGoogleUser}
            outlined
        >
            Sign in
        </Button>
    )
}
export default SignIn