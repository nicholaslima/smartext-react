

import React,{ useState,useCallback,useImperativeHandle,forwardRef } from 'react';
import api from '../../config/api';
import {  useAuth  } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

import { FiXCircle } from 'react-icons/fi';
import { Container } from './style';

interface confirmType {
    message: string,
    acertos: number;
    erros: number;
}

export interface ConfirmRef{
    HandleOpenConfirm: () => void;
    confirmed: boolean;
    setConfirmed(confirmado: boolean): void;
}

const Confirm:React.ForwardRefRenderFunction<ConfirmRef,confirmType> = ({ message,acertos,erros },ref) => {
    const [ visible,setVisible ] = useState(false);
    const [ confirmed,setConfirmed ] = useState(false);


    const authContext = useAuth();
    const toastContext = useToast();

    const { user,token } = authContext;
    const { ativarToast  } = toastContext;


    const HandleOpenConfirm = useCallback(() => {
        setVisible(true);
    },[]);

    const salvarPontos = useCallback( async () => {
        if(!user){
            ativarToast({
                title: "não é possivel salvar!",
                description: "é preciso estar logado para salvar seus pontos",
                type: "error",
            })
            return;
        }
        console.log(acertos);
        await api.post(`/game/player?id=${ user.id }`,{
                pontuacao: acertos,
                erros
            },
            { 
                headers: { 
                    authorization: token,
            }
        }
        ).then(response => {
            console.log(response);
            ativarToast({
                title: "enviado com sucesso",
                description: "pontuação salva com sucesso!",
                type: "success",
            });
            setVisible(false);
        }) 
    },[acertos,erros]);


    useImperativeHandle(ref,() => {
        return {
            HandleOpenConfirm,
            confirmed,
            setConfirmed
        }  
    });

    return(
        <Container visible={ visible } >
            <FiXCircle size='20' color="#8257E5" style={{ right: '10px',top: '10px',position: 'absolute',cursor: 'pointer'}} onClick={ () => setVisible(false) } ></FiXCircle>
            <div className="content">
                <h1>{ message }</h1>

                <div className="pontuacao">
                    <p>Acertos: <span className="acertos">{ acertos }</span></p>
                    <p>Erros: <span className="erros">{ erros }</span></p>
                </div>
               
                <div className="btns">
                    <p onClick={ salvarPontos } >sim</p>
                    <p onClick={ () => setVisible(false) } >não</p>
                </div>
            </div>
        </Container>
    )
}

export default forwardRef(Confirm);