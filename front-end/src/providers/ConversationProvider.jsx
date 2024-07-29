import React, { createContext, useState } from "react";

const ConversationContext = createContext();

const ConversationProvider = ({ children }) => {
    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)
    const contextValues = {
        conversations:[
            {
                id:"42139087123",
                firstName:"dummyFirstName",
                lastName:"dummyLastName",
                messages:[
                    {
                        text:"dummy conversation text",
                        recipientId: "412342987",
                        senderId: "41234213",
                        timeStamp: "sample TimeStapm"
                    }
                ]
            },
            {
                id:"42139087123",
                firstName:"dummyFirstName",
                lastName:"dummyLastName",
                messages:[
                    {
                        text:"dummy conversation text",
                        recipientId: "412342987",
                        senderId: "41234213",
                        timeStamp: "sample TimeStapm"
                    }
                ]
            },
            {
                id:"42139087123",
                firstName:"dummyFirstName",
                lastName:"dummyLastName",
                messages:[
                    {
                        text:"dummy conversation text",
                        recipientId: "412342987",
                        senderId: "41234213",
                        timeStamp: "sample TimeStapm"
                    }
                ]
            }
        ],
        selectedConversationIndex: selectedConversationIndex,
        setSelectedConversationIndex: setSelectedConversationIndex
    }
  return (
    <ConversationContext.Provider value={contextValues}>
      {children}
    </ConversationContext.Provider>
  );
};

export { ConversationContext, ConversationProvider };
