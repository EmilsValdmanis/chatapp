import React, { useState } from "react"
import classNames from "classnames"
import MessageInput from "./messageInput"
import Messages from "./messages"

const Chat = () => {
    return (
        <div
            className='container mx-auto grow flex flex-col p-10 bg-gray-400 dark:bg-gray-800 justify-between rounded-3xl shadow-xl'
        >
            <Messages/>
            <MessageInput/>
        </div>
    )
  }
  
  export default Chat
  