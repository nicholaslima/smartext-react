
import styled from 'styled-components';

export const Container = styled.div`
    margin: 3rem auto;
    max-width: 960px;

`;

export const Lista = styled.table`
    width: 960px;
    margin-top: 30px;
    margin-bottom: 30px;

    .row{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 350px;

        font-family: Fira Code;
        font-size: 17px;
        text-transform: capitalize;
        width: 1000px;
        background-color: white;
        border-radius: 5px;
        padding: 12px 8px;
    }

    .superior{
        background-color: #8257E5;
        color: white;
    }

    .col{
        width: 80px;
    }
`;

export const Titulo = styled.h1`
    font-family: Fira Code;
    margin: 0 auto;
    margin-bottom: 15px;
`;


export const Jogador = styled.div`
    font-family: Fira Code;

    span{
        font-weight: 700;
        text-transform: capitalize;
    }

    diV{
        margin-bottom: 10px;
    }

`;