import React from "react";
import { NavBar } from "./NavBar";
import { ConversationProvider } from "../providers/ConversationProvider";
import { MainWindow } from "./MainWindow";
import { SideChatWindow } from "./SideChatWindow";

export const HomePage = () => {
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
};
