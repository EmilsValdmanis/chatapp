import { signInWithGooglePopup, auth } from "../utils/firebase.utils"
import Button from "./button"

export const logIn = async () => {
    await signInWithGooglePopup()
}

const logOut = async () => {
    auth.signOut()
}

const SignIn = ({ user }) => {

    return (
        <div>
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