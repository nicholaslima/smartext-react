


import React,{ useCallback,useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Titulo,Container} from './style';
import Header from '../../components/header/header';
import { Form } from '@unform/web';
import Input from '../../components/input';
import { FiMail,FiUser } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import * as yup  from 'yup';
import ValidationErrors from '../../utils/validationErrors';
import { FormHandles } from '@unform/core';
import { useToast } from '../../context/ToastContext';
import { useHistory } from 'react-router-dom';

interface LoginType{
    email: string;
    senha: string
}

const Signin: React.FC = () => {

    const formRef = useRef<FormHandles>(null);
    const { Login } = useAuth();
    const history = useHistory();


    const { ativarToast } = useToast();

    const handdleAuth = useCallback(async (data: LoginType) => {
            try{
                const schema = yup.object().shape({
                    email: yup.string().required('o email é obrigatorio').email('digite um email válido'),
                    senha: yup.string().required('a senha é obrigatoria'),
                });
                
                await schema.validate(data,{
                    abortEarly: false
                });

                await Login({
                    email: data.email,
                    senha: data.senha,
                });

                
                history.push('/');

                ativarToast({
                    type: 'success',
                    title: 'login',
                    description: 'login efetuado com sucesso',
                });

            }catch(err){
                if(err instanceof yup.ValidationError){
                    const errors = ValidationErrors(err);
                    formRef.current?.setErrors(errors);
                    return;
                }
            
                ativarToast({
                    type: 'error',
                    title: 'erro na autenticação',
                    description: 'ocorreu um erro ao fazer login',
                });
            }   
    },[ativarToast,Login,history]);


    return(
        <>
            <Header></Header>
            <Container>
                <Form onSubmit={ handdleAuth  } ref={ formRef }>
                        <Titulo>Entre em sua conta</Titulo>
                        <Input icon={ FiMail } className="inputSignin" type="text" name="email" placeholder="insira seu email" />
                        <Input icon={ FiUser } className="inputSignin" type="password" name="senha" placeholder="insira sua senha" />
                        <button type="submit" className="btnRoxo" ><FiArrowRight></FiArrowRight> login</button>
                </Form>
            </Container>
        </>
    )


}

export default Signin;