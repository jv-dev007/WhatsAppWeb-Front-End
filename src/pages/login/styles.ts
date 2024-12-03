import styled from "styled-components";



export const ContainerPageLogin = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #e2e1de;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BackgroundLogo = styled.div`
    width: 100%;
    height: 30%;
    background-color: #00a884;
    position: absolute;
    top: 0;
`

export const LogoContainer = styled.div`
    width: 65%;
    height: 32px;
    position: absolute;
    top: 0;
    display: flex;
    padding-top: 28px;
`

export const LogoImg = styled.img`
    height: 100%;
`
export const TextLogoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
`

export const TextLogo = styled.span`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
`

export const LoginContainer = styled.div`
    margin-top: 60px;
    width: 65%;
    height: 80%;
    display: flex;
    justify-content: center;
    background-color: #fff;
    position: absolute;
    border-radius: 4px;
    box-shadow: 1px 3px 8px 4px rgba(0, 0, 0, 0.3);
`

export const LoginContent = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
`

export const InsiraTelefone = styled.div`
    display: flex;
    justify-content: center;
`

export const InsiraText = styled.span`
    font-size: 28px;
    color: #41525D;
    font-weight: 300;
`

export const TextInput = styled.div`
    font-size: 16px;
    color: #8696A0;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`
export const ButtonNacionalidade = styled.button`
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    width: 220px;
    height: 50px;
    color: #111b21;
    border-radius: 25px;
    border: 1px solid #e2e1de;
    padding: 20px;
    box-sizing: border-box;
    transition: 0.5s;
    outline: none;

    &:hover {
        box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
    }
`

export const InputNumber = styled.input`
    width: 220px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid #e2e1de;
    padding: 20px;
    box-sizing: border-box;
    color: #111b21;

    &:focus {
        outline-color: #008069;
    }
`

export const ButtonLogin = styled.div`
    font-size: 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #008069;
    width: 100px;
    height: 38px;
    color: #fff;
    font-weight: 500;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const BrazilIcon = styled.img`
    width: 16px;
    height: auto;
    padding-right: 5px;
`

export const SetaIcon = styled.img`
    width: 8px;
    height: auto;
`

export const BrazilContent = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`