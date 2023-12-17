import { signInWithGooglePopup, auth } from "../utils/firebase.utils"
import Button from "./button"

const SignIn = ({ user }) => {
    const logIn = async () => {
        await signInWithGooglePopup()
    }

    const logOut = async () => {
        auth.signOut()
    }

    return (
        <div>
            {!user && ( 
                <Button 
                    onClick={logIn}
                    outlined
                >
                    Sign in
                </Button>
            )}
            {user && (
                <div className="flex items-center gap-4">
                    <p className="hidden md:block">{`Signed in as ${user.email}`}</p>
                    <Button 
                        onClick={logOut}
                        outlined
                    >
                        Sign out
                    </Button>
                </div>
            )}
        </div>
    )
}
export default SignIn