
import React from 'react';
import { Container } from './style';

interface TooltipProps {
    title: string,
    children: any,
    className?: string,
    hasError: boolean,
}

const Tooltip:React.FC<TooltipProps> = ({ title,children,className,hasError }) => {
    return(
            <Container className={ className }>
                
                <span >{ title }</span>
                {  children }
            </Container>
    )
} 

export default Tooltip;