import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

import { NavBar } from "./components/NavBar"
import { SideChatWindow } from "./components/SideChatWindow"
import { MainWindow } from "./components/MainWindow"

function App() {
  return (
    <>
      <NavBar/>
        <div className="d-flex">
        <SideChatWindow/>
        <MainWindow/>
      </div>
    </>
  )
}

export default App
