
import styled from 'styled-components';




export const Form = styled.form`
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


export const BlockDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 600px;

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

    .inputSignin{
        width: 560px;
    }
`;



export const BtnVoltar = styled.button`
    color: #8257E5;
    font-family: Fira Code;
    font-size: 18px;
    border: 0px solid white;
    a{
        color: #8257E5;
    }
`;