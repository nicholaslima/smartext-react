
import styled,{ keyframes } from 'styled-components';


export const Input = styled.input`
    font-family: Fira Code;
    font-size: 21px;
    padding: 14px;
    border: 0px solid white;
    border-radius: 5px;
    margin-top: 10px;
    &&:focus{
        border: 2px solid #8257E5;
    }

    &&::placeholder{
        color: black;
    }
`;

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    padding: 15px;
    justify-content: center;
    width: 600px;

    button {
        margin-top: 25px;
        font-size: 21px;
    }
`;

const animationLeftToRight = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50px);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
`;

export const BlockDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 600px;
    animation: ${animationLeftToRight} 1s;

    button{
        margin-top: 25px;
        font-size: 17px;
        padding: 5px 4px;
    }
`;

export const Titulo = styled.h1`
    font-family: Fira Code;
    margin: 0 auto;
    margin-bottom: 15px;
`;


export const Description = styled.h1`
    font-family: Fira Code;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 15px;
    text-transform: capitalize;
`;


export const Container = styled.div`
    max-width: 960px;
    margin: 5rem auto;
    display: flex;
    justify-content: space-around;
    flex-direction: row;

    form{
        display: flex;
        flex-direction: column;
        padding: 15px;
        justify-content: center;
        width: 600px;

        button {
            margin-top: 25px;
            font-size: 21px;
        }
    }
`;


export const BtnVoltar = styled.button`
    background-color: #8257E5;
    color: white;
    border-radius: 5px;
    font-family: Fira Code;
    font-size: 18px;
    border: 0px solid white;
    a{
        color: white;
    }
`;