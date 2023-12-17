import Button from "./button"

const MessageInput = ({ user }) => {
    return (
        <form className="flex w-full gap-2">
            <input
                placeholder="Enter message here..."
                disabled={!user}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            <Button
                disabled={!user}
            >
                Send
            </Button>
        </form>

    )
}

export default MessageInput