
import styled from 'styled-components';

export const Container = styled.nav`

    .btnSair{
        display: flex;
        flex-direction: row;
        cursor: pointer;
    }

    nav{
        display: flex;
        flex-direction: row;
        max-width: 800px;
        font-family: Fira Code;
        font-size: 16px;
        margin: 0 auto;
        text-transform: capitalize;
        color: white;
        justify-content: space-around;
        a{
            color: white;
        }
    }
    
    background-color: #8257E5;
    padding: 28px 28px;
`;