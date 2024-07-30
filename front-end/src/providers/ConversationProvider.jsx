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
                        recipientId: "0",
                        senderId: "1",
                        timeStamp: "sample TimeStamp"
                    },
                    {
                        text:"dummy conversation text11",
                        recipientId: "0",
                        senderId: "1",
                        timeStamp: "sample TimeStamp"
                    },
                    {
                        text:"dummy conversation text11",
                        recipientId: "1",
                        senderId: "0",
                        timeStamp: "sample TimeStamp"
                    },
                    {
                        text:"dummy conversation text11",
                        recipientId: "0",
                        senderId: "1",
                        timeStamp: "sample TimeStamp"
                    },
                    {
                        text:"dummy conversation text11",
                        recipientId: "1",
                        senderId: "0",
                        timeStamp: "sample TimeStapm"
                    },
                    {
                        text:"dummy conversation text11",
                        recipientId: "1",
                        senderId: "0",
                        timeStamp: "sample TimeStamp"
                    },
                    {
                        text:"dummy conversation text11",
                        recipientId: "0",
                        senderId: "1",
                        timeStamp: "sample TimeStamp"
                    },
                    {
                        text:"dummy conversation text11",
                        recipientId: "0",
                        senderId: "1",
                        timeStamp: "sample TimeStamp"
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
                        recipientId: "0",
                        senderId: "1",
                        timeStamp: "sample TimeStamp"
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
                        recipientId: "0",
                        senderId: "1",
                        timeStamp: "sample TimeStamp"
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
