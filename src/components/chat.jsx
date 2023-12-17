import React, { useState } from "react";
import classNames from "classnames";
import MessageInput from "./messageInput";
import Messages from "./messages";

const Chat = () => {
  return (
    <div className="container mx-auto grow flex flex-col p-10 bg-gray-400 dark:bg-gray-800 justify-between rounded-3xl shadow-xl gap-8">
      <div className="overflow-y-auto" style={{height: 'calc(100vh - 16.75rem)'}}>
        <Messages />
      </div>
      <MessageInput />
    </div>
  )
}

export default Chat;
