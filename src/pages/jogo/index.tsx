

import React,{ useCallback,useEffect,useState,useRef } from 'react';
import { Pontuacao,BlockBtns,Item,ItemTempo,BtnReiniciar,BtnEnviar,BtnExcluir } from './style';
import { Player,TextBlock,BtnTrocar,TextoTeste,TextoApi } from './style';
import Header from '../../components/header/header';
import { FiCheckCircle,FiRefreshCw,FiTrash } from 'react-icons/fi';
import Confirm,{ ConfirmRef } from '../../components/confirm';

import api from '../../config/api';



interface TextoType{
    id: number;
    conteudo: string;
    titulo: string;
    dificuldade: string;
}

const Jogo: React.FC = () => {
    const [ textos,setTextos ] = useState<TextoType[]>([]);
    const [ indiceTexto,setIndiceTexto] = useState(0);
    const [ textoAtual,setTextoAtual] = useState<TextoType>({} as TextoType);
    const [ acertos,setAcertos ] = useState(0);
    const [ erros,setErros ] = useState(0);
    const [ tempo ,setTempo ] = useState(30);
    const [ palavrasErradas,setPalavrasErradas ] =  useState(0);
    const [ palavrasCertas,setPalavrasCertas] =  useState(0);
    const [ idTempo,setIdTempo ] =  useState();
    const [ disabledTextArea,setDisabledTextArea ] = useState(false);
    const [ textPlayer,setTextPlayer ] = useState('');

    const textPlayerRef = useRef<HTMLTextAreaElement>(null);
    const confirmRef = useRef<ConfirmRef>(null);

    useEffect(() => {
        api.get('/texts/')
            .then(response => {
                setTextos(response.data);
                if(Object.keys(textoAtual).length === 0){
                    setTextoAtual(response.data[0]);
                    setIndiceTexto(1);
                }
            });  
    });

    function TrocarTexto(){
        var value = indiceTexto;

        if(textos[indiceTexto] === undefined){
            setIndiceTexto(0);
            return;
        }

        value++;
        setTextoAtual(textos[indiceTexto]);
        setIndiceTexto(value);
        resetJogo();
    }

    function calcularAcertoseErros(){
        const letrasPlayer = textPlayer.split('');
        const letrasTexto = textoAtual.conteudo.split('');
        var acertos = 0;
        var erros = 0;


        letrasPlayer.forEach((item,key) => {
            if(letrasTexto[key] === item){
                acertos++;
                setAcertos(acertos);
                return;
            }
            setErros(erros);
            erros++;
            return; 
        });
    }


    function calcularPalavrasAcertos(){

        const palavrasPlayer = textPlayer.split(' ');
        const palavrasTexto = textoAtual.conteudo.split(' ');
        var erros = 0;
        var acertos = 0;

        palavrasPlayer.forEach((palavra,key) => {
            
            if(palavra === ''){
                return;
            }

            if(palavrasTexto[key] !== palavra){
                erros++;
                setPalavrasErradas(erros);
                return;
            }

            acertos++;
            setPalavrasCertas(acertos);
            return;
        })
    };

  
    function HandleCalcular(){
        PararContagem();
        setTempo(30);
        setDisabledTextArea(true);
        calcularPalavrasAcertos();
        calcularAcertoseErros();
        openConfirm();
    }


    function apagarTexto(){
        setTextPlayer('');
    }

    function resetJogo(){
        setTextPlayer('');
        setAcertos(0);
        setErros(0);
        setPalavrasErradas(0);
        PararContagem();
        setTempo(30);
        setDisabledTextArea(false);
    }
    
    function contagem(){
        var num = 30;

        if(tempo < 30){
            return;
        }

        var timeClose:any = global.setInterval(() => {
            num--;
            setTempo(num);
            setIdTempo(timeClose);
            
            if(num <= 0){ 
                global.clearInterval(timeClose);
                setTempo(30);
                setDisabledTextArea(true);
                calcularPalavrasAcertos();
                calcularAcertoseErros();
            }
        },1000);
    }

    const openConfirm = useCallback(() => { 
        confirmRef.current?.HandleOpenConfirm(); 
    },[]);


    function PararContagem(){
        global.clearInterval(idTempo);
    }

    return(
        <>
            <Header></Header>
            <ItemTempo>
                <p className="subTitle" style={{ marginRight: '10px' }}>tempo:</p>
                <p id="tempo">{ tempo }</p>
            </ItemTempo>

                
                <Player>
                        <TextoApi>
                            <p className='Title'>{ textoAtual.titulo }</p>
                            <TextBlock>
                                <TextoTeste>
                                    { textoAtual.conteudo }
                                </TextoTeste>
                                
                                <BtnTrocar  className='btnPreto'  onClick={ TrocarTexto }>trocar texto</BtnTrocar>
                            </TextBlock>
                            
                        </TextoApi>
                        <textarea id="textoAluno"  style={{ resize: 'none' }} ref={ textPlayerRef } disabled={ disabledTextArea }  value={ textPlayer } onFocus={contagem } onChange={ (e) => { setTextPlayer(e.target.value)} }></textarea>
                </Player>
                
                <BlockBtns>
                    <BtnReiniciar  id="reiniciar" className='btnPreto' style={{ marginRight: '10px' }} onClick={ resetJogo } ><FiRefreshCw size='22px'/></BtnReiniciar>
                    
                    <BtnEnviar  id="enviar" onClick={ 
                        () => { 
                            HandleCalcular();
                        }
                    } 
                        className='btnPreto' 
                        style={{ marginRight: '10px' }}>
                            <FiCheckCircle size='22px'/>
                    </BtnEnviar>
                    <BtnExcluir className='btnPreto' style={{ marginRight: '10px' }} onClick={  apagarTexto  }  ><FiTrash size='22px' /></BtnExcluir>
                    <Confirm ref={ confirmRef } acertos={ acertos } erros={ erros } message="salve sua pontuação"></Confirm>
                </BlockBtns>    

                <Pontuacao>
                    <Item>
                        <p className="subTitle" style={{ marginRight: '10px' }}>palavras erradas:</p>
                        <p id="textos">{ palavrasErradas }</p>
                    </Item>

                    <Item>
                        <p className="subTitle" style={{ marginRight: '10px' }}>palavras certas:</p>
                        <p id="textos">{ palavrasCertas }</p>
                    </Item>


                    <Item>
                        <p className="subTitle" style={{ marginRight: '10px' }}>acertos:</p>
                        <p id="acertos">{ acertos }</p>
                    </Item>

                    <Item>
                        <p className="subTitle" style={{ marginRight: '10px' }}>erros:</p>
                        <p id="erros">{ erros }</p>
                    </Item>

                    <Item>
                        <p className="subTitle" style={{ marginRight: '10px' }}>textos:</p>
                        <p id="textos">{ indiceTexto }</p>
                    </Item>
                </Pontuacao>
        </>
    )
}

export default Jogo;