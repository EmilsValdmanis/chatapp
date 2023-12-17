import Navbar from "./components/navbar"
import Chat from "./components/chat"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="grow bg-gray-700 flex p-3">
        <Chat/>
      </main>
    </div>
  )
}

export default App
