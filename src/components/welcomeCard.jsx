import React from "react"
import Button from "./button"
import { logIn } from "./signIn"

const WelcomeCard = () => {
    return (
        <div className="w-full flex items-center justify-center"> 
            <div className="bg-gray-500 dark:bg-gray-800 p-10 rounded-3xl flex flex-col items-center gap-5">
                <p className="font-extrabold text-3xl">Welcome to the chatApp</p>
                <Button 
                    onClick={logIn}
                    outlined
                >
                    Sign in
                </Button>
            </div>
        </div>
    )
}

export default WelcomeCard
