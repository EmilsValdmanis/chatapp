import SignIn from "./signIn"
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav className="flex items-center bg-gray-900 justify-between p-5 shadow-lg">
            <div className="flex gap-4 items-center">
                <img src={logo} alt="logo" className="w-8"/>
                <p className="text-lg font-extrabold text-gray-100">
                    chatApp
                </p>
            </div>
            <SignIn/>
        </nav>
    )
}


export default Navbar