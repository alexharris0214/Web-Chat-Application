import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { NavBar } from "./components/NavBar";
import { SideChatWindow } from "./components/SideChatWindow";
import { MainWindow } from "./components/MainWindow";
import { ConversationProvider } from "./providers/ConversationProvider";

function App() {

  return (
    <>
      <NavBar />
      <div className="d-flex">
        <ConversationProvider>
          <SideChatWindow />
          <MainWindow />
        </ConversationProvider>
      </div>
    </>
  );
}

export default App;
