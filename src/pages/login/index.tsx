import { useContext } from "react";
import Home from "../home";
import { UserContext } from "../../contexts/userContext";
import socket from 'socket.io-client'
import { BackgroundLogo, BrazilContent, BrazilIcon, ButtonLogin, ButtonNacionalidade, ContainerPageLogin, InputContainer, InputNumber, InsiraTelefone, InsiraText, LoginContainer, LoginContent, LogoContainer, LogoImg, SetaIcon, TextInput, TextLogo, TextLogoContainer } from "./styles";
import whatsLogo from '../../assets/whatsapp.png'
import setaimg from '../../assets/triangulo.png'
import brazilimg from '../../assets/brasil.png'

export const io = socket('http://localhost:4000', {
    transports: ["websockets"]
})

function Login() {
    const {name, setName, joined, setJoined} = useContext(UserContext)

    const handleJoin = () => {
        if(name){
            io.emit("join", name)
            setJoined(true)
        }
    }

  if(!joined) {
    return (
        <ContainerPageLogin>
            <BackgroundLogo />
            <LogoContainer>
                <LogoImg src={whatsLogo} />
                <TextLogoContainer>
                    <TextLogo>WHATSAPP WEB</TextLogo>
                </TextLogoContainer>
            </LogoContainer>
            <LoginContainer>
                <LoginContent>
                    <InsiraTelefone>
                        <InsiraText>Insira o seu nome</InsiraText>
                    </InsiraTelefone>
                    <InputContainer>
                        <ButtonNacionalidade>
                            <BrazilContent>
                                <BrazilIcon src={brazilimg} />
                                <span>Brasil</span>
                            </BrazilContent>
                            <SetaIcon src={setaimg} />
                        </ButtonNacionalidade>
                        <InputNumber id="tel" value={name} onChange={(e) => setName(e.target.value)} />    
                    </InputContainer>
                    <ButtonLogin onClick={() => handleJoin()}>Avançar</ButtonLogin>
                </LoginContent>
            </LoginContainer>
            
        </ContainerPageLogin>
    )
  }

    return (
        <Home />
    )
}

export default Login