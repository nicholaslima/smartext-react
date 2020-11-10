

import React from 'react';
import { Container } from './style';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

 const Header:React.FC = () => {

   const { user,Logout } = useAuth();
    return(
        <>
            <Container>

                   
                    { !!user && (
                        <nav>
                            <Link to="/jogar">jogo</Link>
                            <Link to="/conta">conta</Link>
                            <Link to="/pontuacoes">pontuações</Link>
                            <div className='btnSair' onClick={ Logout }>
                                <FiLogIn style={{  marginRight: '10px'}}/>
                                <p>sair</p>
                            </div>
                        </nav>
                    )}

                    { !user && (
                        <nav>
                            <Link to="/">jogo</Link>
                            <Link to="/signup">sign up</Link>
                            <Link to="/signin">sign in</Link>
                        </nav>
                    )}

             </Container>
        </>
    )
}

export default Header;