

import React,{ useEffect } from 'react';
import { Toast } from './style';
import { FiAlertCircle,FiXCircle,FiInfo,FiCheckCircle } from 'react-icons/fi';
import { useToast,MessageType } from '../../../context/ToastContext';

interface ToastType{
    message: MessageType;
    style: Object;
}

const icons = {
    success: <FiCheckCircle size={24}></FiCheckCircle>,
    error: <FiAlertCircle size={24}></FiAlertCircle>,
    info: <FiInfo size={24}></FiInfo>,
}

const ContentToast: React.FC<ToastType> = ({ message,style }) => {
    const { desativarToast } = useToast();

    useEffect(() => {
       const tempo = setTimeout(() => {
            desativarToast(message.id);
        },5000);

        return () => {
            clearTimeout(tempo);
        }
    },[desativarToast,message.id]);

    return(
        <Toast type={message.type || 'info'}  key={ message.id } style={ style }>
            { icons[message.type || 'info'] }

            <div className="mensagem">
                <p className="title">{ message.title }</p>
                <p>{ message.description }</p>
            </div>
            <FiXCircle size='20' onClick={ () => desativarToast(message.id) } ></FiXCircle>
        </Toast>
    )
}

export default ContentToast;