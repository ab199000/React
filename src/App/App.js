import React from "react";
import Asidebar from "../components/Asidebar/Asidebar";
import ChatWindow from "../components/ChatWindow";

import "./App.maodule.css"

function App() {
    return (
      <div className="App" >
          <Asidebar/>
          <ChatWindow/>
      </div>
    );
}

export default App;
