import SignIn from "./signIn"
import logo from '../assets/logo.png'

const Navbar = ({ user }) => {   
    return (
        <nav className="flex items-center justify-between p-5 shadow-lg bg-gray-500 dark:bg-gray-900">
            <a href="/" className="flex items-center">
                <img src={logo} alt="logo" className="w-8" />
                <p className="text-lg font-extrabold text-gray-100 ml-2">
                    chatApp
                </p>
            </a>
            <SignIn user={user} />
        </nav>
    )
}

export default Navbar
