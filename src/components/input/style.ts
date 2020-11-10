
import styled,{ css } from 'styled-components';
import Tooltip from '../tooltip';

interface InputProps{
    hasError: boolean;
    isfocused: boolean;
    isFulled: boolean;
}

interface TooltipProps{
    hasError: boolean;
}

export const InputStyle = styled.div<InputProps>` 

    border-radius: 5px;
    border: 2px solid white;
    padding: 14px;
    background-color: white;
    margin: 10px;
    display: flex;
    flex-direction: row;
    input{
        font-family: Fira Code;
        font-size: 21px;
        border: 0px solid white;
        width: 100%;
        &&::placeholder{
            color: black;
        }
    }
    ${(props) => props.isFulled && css`
        svg{
            color:#8257E5;
        }
        input{
            color: #8257E5;
        }
    `}

    ${(props) => props.hasError && css`
        border: 2px solid #c44536;
        color:#c44536;
    `}

    ${(props) => props.isfocused && css`
        border: 2px solid #8257E5;
    `}

   svg{
       margin-right: 8px;
   }
`;

export const ErrorStyled = styled(Tooltip)<TooltipProps>` 

    ${(props) => props.hasError && css`
        visibility: visible;
        
    `}
`;

