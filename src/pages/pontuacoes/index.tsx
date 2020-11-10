

import React,{useEffect,useState} from 'react';
import Header from '../../components/header/header';
import { Container,Titulo,Lista,Jogador } from './style';
import api from '../../config/api';
import { useAuth } from '../../context/AuthContext';

interface PontuacaoType{
    pontuacao: number;
    erros: number;
    id: number
}

const Pontuacoes:React.FC = () => {
    const [ pontuacao,setPontuacao ] = useState([]);
    const { token,user } = useAuth();
    
    useEffect(() => {
        api.get(`game/player?id=${ user.id }`,{
            headers:{
                authorization: token,
            }
        }).then(response => {
            setPontuacao(response.data);
        })
    })

    return(
        <>
            <Header></Header>
            <Container>
                <Titulo>pontuações do jogador</Titulo>

                <Jogador>
                    <div><span>nome:</span> { user.nome }</div>
                    <div><span>email:</span> { user.email }</div>
                </Jogador>

                <Lista>
                    <div className="row superior">
                        <div className="col">acertos</div>
                        <div className="col">erros</div>
                    </div>
                    { pontuacao.map( (pontuacao:PontuacaoType) => (
                        <div className="row" key={ pontuacao.id }>
                            <div className="col">{ pontuacao.pontuacao }</div>
                            <div className="col">{ pontuacao.erros }</div>
                        </div>
                      ))
                    }
                        
                </Lista>
                
            </Container>
        </>
    )
}

export default Pontuacoes;