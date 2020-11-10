

import React from 'react';
import Header from '../../components/header/header';
import { Container,Titulo,Jogador } from './style';
import { useAuth }  from '../../context/AuthContext';

const Conta:React.FC = () => {
    const { user } = useAuth();
    return(
        <>
            <Header></Header>
            <Container>
                <Titulo>pontuações do jogador</Titulo>

                <Jogador>
                    <div><span>nome:</span> {user.nome}</div>
                    <div><span>email:</span> {user.email}</div>
                    <div><span>idade:</span> {user.idade}</div>
                    <div><span>sexo:</span> {user.sexo}</div>
                </Jogador>
                
            </Container>
        </>
    )
}

export default Conta;