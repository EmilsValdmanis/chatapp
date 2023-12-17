import React, { useEffect, useState } from "react"
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore"
import { db, auth } from "../utils/firebase.utils"
import Loading from "./loading"
import classNames from "classnames"

const Messages = () => {
    const [messages, setMessages] = useState([])
    const { uid } = auth.currentUser

    useEffect(() => {
        const queryData = query(
            collection(db, "messages"),
            orderBy("createdAt", "asc"),
            limit(50)
        )

        const unsubscribe = onSnapshot(queryData, (QuerySnapshot) => {
            const fetchedMessages = []
            QuerySnapshot.forEach((doc) => {
                fetchedMessages.push({ ...doc.data(), id: doc.id })
            })
            setMessages(fetchedMessages)
        })

        return () => unsubscribe
    }, [])

    if(!messages) return <Loading/>

    return (
        <div className="flex flex-col gap-4 text-gray-800 dark:text-gray-100">
            {messages.map(message => {
                const isCurrentUserMsg = uid === message.uid
                const date = message.createdAt &&
                    new Date(message.createdAt.toDate()).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })

                if(date) return (
                    <div key={message.id} className={classNames('flex items-center gap-4', isCurrentUserMsg && 'flex-row-reverse')}>
                        <p className="w-10">{date}</p>
                        <img src={message.avatar} className="w-8 h-8 rounded-full" />
                        <div className="bg-purple-500 px-5 py-1.5 rounded-xl text-gray-100">
                            {message.text}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Messages
