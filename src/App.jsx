import React, { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./utils/firebase.utils"

import Navbar from "./components/navbar"
import Chat from "./components/chat"
import WelcomeCard from "./components/welcomeCard"
import Loading from "./components/loading"

function App() {
  const [user, loading] = useAuthState(auth)
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoading(false)
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="flex flex-col min-h-screen text-gray-300 dark:text-gray-100">
      <Navbar user={user} />
      <main className="grow bg-gray-200 dark:bg-gray-700 flex p-5">
        {user && (showLoading || loading) ? <Loading/> : user ? <Chat/> : <WelcomeCard/>}
      </main>
    </div>
  )
}

export default App
