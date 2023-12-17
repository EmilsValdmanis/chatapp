import React, { useState } from "react"
import MessageInput from "./messageInput"
import classNames from "classnames"

const Chat = ({ user }) => {
    const [message, setMessage] = useState('')

    return (
        <div
            className={classNames('container mx-auto grow flex flex-col p-10 bg-gray-400 dark:bg-gray-800 justify-between rounded-3xl shadow-xl',
                !user && 'blur'
            )}
        >
            <div>
                Messages go here...
            </div>
            <MessageInput user={user}/>
        </div>
    )
  }
  
  export default Chat
  