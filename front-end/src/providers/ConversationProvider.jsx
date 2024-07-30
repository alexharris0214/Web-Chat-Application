import React, { createContext, useState } from "react";

const ConversationContext = createContext();

const ConversationProvider = ({ children }) => {
    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)
    const contextValues = {
        conversations:[
            {
                id:"42139087123",
                firstName:"dummyFirstName1",
                lastName:"dummyLastName1",
                messages:[
                    {
                        text:"dummy conversation text11",
                        recipientId: "412342987",
                        senderId: "41234213",
                        timeStamp: "sample TimeStapm"
                    },
                    {
                        text:"dummy conversation text11",
                        recipientId: "412342987",
                        senderId: "41234213",
                        timeStamp: "sample TimeStapm"
                    },
                    {
                        text:"dummy conversation text11",
                        recipientId: "412342987",
                        senderId: "41234213",
                        timeStamp: "sample TimeStapm"
                    },
                    {
                        text:"dummy conversation text11",
                        recipientId: "412342987",
                        senderId: "41234213",
                        timeStamp: "sample TimeStapm"
                    },
                    {
                        text:"dummy conversation text11",
                        recipientId: "412342987",
                        senderId: "41234213",
                        timeStamp: "sample TimeStapm"
                    },
                    {
                        text:"dummy conversation text11",
                        recipientId: "412342987",
                        senderId: "41234213",
                        timeStamp: "sample TimeStapm"
                    },
                    {
                        text:"dummy conversation text11",
                        recipientId: "412342987",
                        senderId: "41234213",
                        timeStamp: "sample TimeStapm"
                    },
                    {
                        text:"dummy conversation text11",
                        recipientId: "412342987",
                        senderId: "41234213",
                        timeStamp: "sample TimeStapm"
                    },
                ]
            },
            {
                id:"42139087123",
                firstName:"dummyFirstName2",
                lastName:"dummyLastName2",
                messages:[
                    {
                        text:"dummy conversation text22",
                        recipientId: "412342987",
                        senderId: "41234213",
                        timeStamp: "sample TimeStapm"
                    }
                ]
            },
            {
                id:"42139087123",
                firstName:"dummyFirstName3",
                lastName:"dummyLastName3",
                messages:[
                    {
                        text:"dummy conversation text33",
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
