import styled from 'styled-components';

export const Container = styled.div`
   position: relative;

   span{
       position: absolute;
       font-family: Fira Code;
       text-transform: capitalize;
       font-size: 12px;
       padding: 10px;
       background-color: white;
       color: black;
       box-shadow: 5px 5px 10px grey;
       bottom: calc(100% + 10px);
       width: 180px;
       left: 50%;
       transform: translateX(-50%);
       opacity: 0;
       transition: opacity 0.5s;
       visibility: hidden;

       &::before{
           content: '';
           border-style: solid;
           border-color: white transparent;
           border-width: 6px 6px 0 6px;
           top: 100%;
           position: absolute;
           left: 50%;
           transform: translateX(-50%);
       }

   }

   &:hover span{
        visibility: visible;
        opacity: 1;
   }

`;