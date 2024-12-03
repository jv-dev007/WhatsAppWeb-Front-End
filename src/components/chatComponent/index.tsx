import { Background, ChatContacts, ChatContainer, ChatInput, ChatInputArea, ChatItem, ChatMessages, ChatMessagesArea, ChatOptions, Container, ImageProfile, LastMessage, MessageContent, SendIcon, TitleChatContainer, TitleMessage, UserContainerMessage, UserMessage, UserName } from "./styles"
import imageProfile from '../../assets/profissao-programador-logo.jpg'
import sendImage from "../../assets/send.png"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/userContext"
import { io } from "../../pages/login"

function Chat() {

    const {name, setName, users, setUsers, message, setMessage, messages, setMessages} = useContext(UserContext)

    useEffect(() => {
        io.on("users", (users) => setUsers(users))
        io.on("message", (message) => setMessages((messages: any) => [...messages, message]))
    }, [])

    const handleMessage = () => {
        if(message){
            io.emit("message", {message, name})
            setMessage("")
        }
    }

    return (
        <Container>
            <Background />
            <ChatContainer>
                <ChatContacts>
                    <ChatOptions/>
                    <ChatItem>
                        <ImageProfile src={imageProfile} alt=""/>
                        <TitleChatContainer>
                            <TitleMessage> Profissão Programador</TitleMessage>
                            <LastMessage>{messages.length? `${messages[messages.length - 1].name}: ${messages[messages.length - 1].message}` : ''}</LastMessage>
                        </TitleChatContainer>
                    </ChatItem>
                </ChatContacts>

                <ChatMessages>
                <ChatOptions>
                    <ChatItem>
                        <ImageProfile src={imageProfile} alt=""/>
                        <TitleChatContainer>
                            <TitleMessage> Profissão Programador</TitleMessage>
                            <LastMessage>{users.map((user: any, index: any) => (
                                <span key={index}>{user.name}{index + 1 < users.length? ', ' : ''}</span>
                            ))}</LastMessage>
                        </TitleChatContainer>
                    </ChatItem>
                </ChatOptions>

                <ChatMessagesArea>
                    {messages.map((message: any, index: any) => (
                        <UserContainerMessage username={message.name} name={name} >
                        <MessageContent name={name} username={message.name} >

                        <UserName name={name} username={message.name} >{message.name}</UserName>
                        <UserMessage username={message.name} name={name} key={index}> {message.message}</UserMessage>
                        </MessageContent>
                        </UserContainerMessage>
                    ))}
                </ChatMessagesArea>

                <ChatInputArea>
                    <ChatInput onChange={(e) => setMessage(e.target.value)} value={message} placeholder="mensagem" />
                    <SendIcon onClick={() => handleMessage()} src={sendImage} />
                </ChatInputArea>
                </ChatMessages>
            </ChatContainer>
        </Container>
    )
}

export default Chat