import React ,{ useContext,useCallback,createContext,useState } from 'react';
import { uuid } from 'uuidv4';
import Toast from '../components/toasts';


 export interface MessageType{
    id: string;
    title: string;
    description?: string;
    type?: 'success' | 'error' | 'info';
}

interface ContextType{
    ativarToast(message:  Omit<MessageType,'id'>): void;
    desativarToast(id: string): void;
}


const ToastContext = createContext<ContextType>({} as ContextType);



const ToastProvider: React.FC = ({children}) => {

    const [ msgs,setMsg ] = useState<MessageType[]>([]);

    const ativarToast = useCallback(({title,description,type}: Omit<MessageType,'id'>) => {

        const id = uuid();

        const message = {
            id,
            title,
            description,
            type
        }

        setMsg((state) => [...state,message]);
    },[]);

    const desativarToast = useCallback((id: string) => {
        setMsg((state) => state.filter(item => item.id !== id))
    },[]);

    return(
        <ToastContext.Provider value={{ ativarToast,desativarToast }}>
            { children }
            <Toast messages={ msgs } ></Toast>
        </ToastContext.Provider>
    )
}

function useToast():ContextType {
    const context = useContext(ToastContext);

    if(!context){
        throw new Error('useToast must be used within a Toastprovider')
    };

    return context;
}


export { ToastProvider,useToast };