

import styled,{ css } from 'styled-components';

interface confirmType{
    visible: boolean;

}
export const Container = styled.div<confirmType>`
    padding: 10px 20px;
    border-radius: 15px;
    box-shadow: 4px 4px 22px #3a3a3a;
    position: fixed;
    display: none;
    background-color: white;
    right: 42%;
    top: 250px;
    z-index: 1;
    transition: 0.5s display;
    
    ${ (props) => props.visible && css`
        display: block;
    `}

    .content{   
        margin-top: 25px;
    }

    h1{
        font-size: 16px;
        font-family: 'Fira Code';
    }

    .btns{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 15px;
        font-family: 'Fira Code';
        p{
            &:hover{
                color: #8257E5;
                cursor: pointer;
            }
        }
        
    }

    .pontuacao{
        font-family: 'Fira Code';
        font-size: 15px;
        margin-top: 7px;
        .acertos{
            color: #8257E5;
        }
        .erros{
            color: #c53030;
        }
    }
`