


import styled from 'styled-components';




export const Pontuacao = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 600px;
    margin: 0 auto;
`;


export const ItemTempo = styled.p`  
    max-width: 980px;
    margin: 15px auto;
    display: flex;
    align-items: center;
`;

export const BlockBtns = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    margin: 0 auto;
    margin-top: 25px;
    margin-bottom: 25px;
    button{
        margin: 10px;
    }

`;

export const BtnReiniciar = styled.button`


    border: 2px solid #F0952D;

        svg{
            color: #F0952D;
        }


    &&:hover{
        border: 2px solid #8257E5;
        svg{
            color: #8257E5;
        }
    }
`;

export const BtnEnviar = styled.button` 
     
    border-color: #00E07B;

    svg{
        color: #00E07B;
    }
    &&:hover{
        border: 2px solid #8257E5;
        svg{
            color: #8257E5;
        }
    }
        
`;

export const BtnExcluir = styled.button` 

    border-color: #F03D2D;

    svg{
        color: #F03D2D;
    }
    
    &&:hover{
        border: 2px solid #8257E5;
        svg{
            color: #8257E5;
        }
    }

`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Player = styled.div`

    #textoAluno:focus{
        border: 2px solid #8257E5; 
    }

    #textoAluno{
        border: 2pt solid white;
        border-radius: 15px;
        margin-top: 20px;
        width: 100%;
        padding: 7px;
        font-size: 16px;
        font-family: Fira Code;
        height: 160px;
        font-weight: 500;
    }

    margin: 0 auto;
    width: 980px;
`;



export const TextoApi = styled.p`
    margin-bottom: 15px;
    margin-top: 30px;
`;

export const TextBlock = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const TextoTeste = styled.p`
    font-weight: 500;
    color: black;
    font-family: Fira Code;
    margin: 10px 13px;
`;


export const BtnTrocar = styled.button` 
    &&:hover{
        border: 2px solid #8257E5;
        color: #8257E5;
    }

`;


export const Error = styled.span`
    color: #d1105a;
`;