

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        outline: 0px;
        box-sizing: border-box;
    }

    border,input,button{
        font: 16px Roboto sans-serif;
    }

    body{
        -webkit-font-smoothing: antialiased;  
        background: #f0f0f5;
        color: black;
    }
    
    #root{
        margin: 0 auto;
    }
    button{
        cursor: pointer;
    }

    .btnRoxo{
        color: white;
        font-family: Fira Code;
        font-weight: 700;
        text-transform: capitalize;
        background-color: #8257E5;
        border: 0px solid #8257E5;
        border-radius: 5px;
        padding: 10px 30px;
        float: right;
        width: 100%;
        margin-top: 10px;
    }

    .btnPreto{
        color: white;
        font-family: Fira Code;
        font-weight: 700;
        text-transform: capitalize;
        background-color: rgb(32, 32, 36);
        border-radius: 5px;
        padding: 10px 30px;
        float: right;
    }

    .Title{
        font-size: 25px; 
        font-weight: 700;
        color: black;
        font-family: Fira Code;
        text-transform: capitalize;
        margin-bottom: 12px;
    }

    .subTitle{
        font-size: 16px; 
        font-weight: 700;
        color: black;
        font-family: Fira Code;
        text-transform: capitalize;
    }
    a{
        text-decoration: none;
    }
`;