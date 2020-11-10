

import React, { createContext,useCallback,useState,useContext } from 'react';
import api from '../config/api';

interface SigninCredentials{
    email: string;
    senha: string;
}

interface dataType{
    token:string;
    user: UserType;
}

interface UserType{
    id: number;
    nome: string;
    email: string;
    idade: number;
    sexo: string;
}

interface AuthContextType {
    user: UserType;
    token: string;
    Login(Credentials: SigninCredentials): Promise<void>;
    Logout(): void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider: React.FC = ({ children }) => {

    const [ data,setData ] = useState<dataType>(() => {
        const token = localStorage.getItem('@SmartText:token');
        const user = localStorage.getItem('@SmartText:user');

        if(token && user){
            return {token, user: JSON.parse(user) }
        }

        return {} as dataType;
    });


    const Login = useCallback(async ({email,senha}) => {
       const response = await api.post('user/auth',{
            email,senha
        });

        const { token,user } = response.data;

        localStorage.setItem('@SmartText:token',token);
        localStorage.setItem('@SmartText:user',JSON.stringify(user));

        setData({ token,user });
    },[]);

    const Logout = useCallback(() => {
        localStorage.removeItem('@SmartText:token');
        localStorage.removeItem('@SmartText:user');
        setData({} as dataType);
    },[]);


    return(
            <AuthContext.Provider value={{ user: data.user , Login, Logout,token: data.token }}>
                { children }
            </AuthContext.Provider>
    );
};


function useAuth():AuthContextType {
    const context = useContext(AuthContext);
    if(!AuthContext){
        throw new Error('this function must to be used within a Authprovider');
    }

   return context;
}

export { AuthProvider,useAuth };

