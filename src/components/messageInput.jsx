import React, { useState } from "react"
import { auth, db } from "../utils/firebase.utils"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import Button from "./button"

const MessageInput = () => {
    const [message, setMessage] = useState('')
    
    const sendMessage = async (event) => {
        event.preventDefault()
        if (message.trim() === "") {
            return
        }
        const { uid, displayName, photoURL } = auth.currentUser
        await addDoc(collection(db, "messages"), {
            text: message,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid,
        })
        setMessage("")
    }

    return (
        <form className="flex w-full gap-2" onSubmit={sendMessage}>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter message here..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
            />
            <Button
            >
                Send
            </Button>
        </form>
    )
}

export default MessageInput