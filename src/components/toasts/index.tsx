

import React from 'react';
import { Container } from './style';

import { MessageType } from '../../context/ToastContext';
import ContentToast from './contentToast';
import { useTransition } from 'react-spring';

interface ToastType {
    messages: MessageType[];
}

const Toasts: React.FC<ToastType> = ({ messages }) => {

   const messagesWithTransition =  useTransition(
        messages,
        (message) => message.id,
        {
            from: { right: '-120%',opacity: 0 },
            enter: { right: '0%' ,opacity: 1},
            leave: {right: '-120%',opacity: 0},
        }
    )

    return(
        <Container>
            { messagesWithTransition.map( ({ item,key,props }) => (
                    <ContentToast key={ key } style={ props } message={ item } ></ContentToast>
            ))}

        </Container>
    )
}

export default Toasts;