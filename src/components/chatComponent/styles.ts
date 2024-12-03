import styled from "styled-components";
import bg from '../../assets/zap-bg.png'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #e2e1de;
`

export const Background = styled.div` 
    background-color: #00A884;
    height: 20%;
    width: 100%;
    position: absolute;
    top: 0;
`

export const ChatContainer = styled.div`
    width: 95%;
    max-width: 1800px;
    height: 95%;
    background-color: #fff;
    position: absolute;
    display: flex;
`

export const ChatContacts = styled.div`
    width: 30%;
    height: 100%;
    border-right: 1px solid #e6e6e6;
`

export const ChatItem = styled.div`
    box-sizing: border-box;
    padding: 10px;
    border-top: 1px solid #f0f2f5;
    border-bottom: 1px solid #f0f2f5;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const TitleChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`

export const ImageProfile = styled.img`
    width: 60px;
    height: auto;
    border-radius: 50%;
`

export const TitleMessage = styled.span`
    font-size: 18px;
`

export const LastMessage = styled.span`
    color: black;
`

export const ChatOptions = styled.div`
    width: 100%;
    height: 80px;
    background-color: #f0f2f5;
`
export const ChatMessages = styled.div`
    flex: 1;
    background-image: url(${bg});
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ChatMessagesArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow-y: auto;
`

export const ChatInputArea = styled.div`
    width: 100%;
    height: 70px;
    background-color: #f0f2f5;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const ChatInput = styled.input`
    width: 90%;
    background-color: #fff;
    height: 45px;
    border: none;
    outline: none;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 4px;
    font-size: 16px;
`


export const SendIcon = styled.img`
    width: 40px;
    height: auto;
    cursor: pointer;
`
export const UserContainerMessage = styled.div<{name: any, username: any}>`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 20px;
    margin: 2px 0;
    justify-content: ${({username, name}) => username === name? 'flex-end' : 'flex-start'};
    
`

export const UserMessage = styled.div<{name: any, username: any}>`
    background-color: ${({username, name}) => username === name? '#D9FDD3' : '#fff'};
    border-radius: 5px;
`

export const UserName = styled.span<{username: any, name: any}>`
    color: ${({username, name}) => username === name? 'blue' : 'red' } ;
`
export const MessageContent = styled.div<{name: any, username: any}>`
    
    padding: 2px 15px 15px 10px;
    box-sizing: border-box;
    border-radius: ${({username, name}) => username === name? '20px 0 20px 20px' : '0 20px 20px 20px'};
    display: flex;
    flex-direction: column;
    background-color: ${({username, name}) => username === name? '#D9FDD3' : '#fff'};

 
    
`