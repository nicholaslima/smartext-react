

import styled,{ css } from 'styled-components';
import { animated } from 'react-spring';

const toastTypes = {
    success: css`
        color: #04d361;
    `,
    error: css`
        color: #c53030;
    `,
    info: css`
        color: #8257E5;
    `,
}

interface ToastProps{
    type: 'success'|'error'|'info';
}


export const Toast = styled(animated.div)<ToastProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    background-color: white;
    color: #8257E5;
    padding: 10px;
    position: relative;
    z-index: 1;

    font-family: Fira Code;
    font-size: 15px;
    border-radius: 5px; 
    box-shadow: 2px 2px  8px  rgba(0,0,0,0.2);
    width: 360px;

    ${(props) => toastTypes[props.type || 'info' ]}

    margin-bottom: 8px;
`;