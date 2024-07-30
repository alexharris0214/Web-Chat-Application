import { ConversationCard } from "../components/ConversationCard";

export const generateCardComponents = (conversations) => {
  return conversations.map((conversation, index) => {
    return (
      <ConversationCard
        firstName={conversation.userModels.firstName}
        lastName={conversation.userModels.lastName}
        key={index}
        index={index} // Lets know what chat this is in the list of selected conversations
        mostRecentMessage="This is a sample of the most recent message sent by dummy blah blah blah"
      />
    );
  });
};
