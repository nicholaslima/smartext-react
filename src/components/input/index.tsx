import React,{ InputHTMLAttributes,useEffect,useRef ,useState,useCallback} from 'react';
import { useField } from '@unform/core';
import { InputStyle,ErrorStyled } from './style';
import { FiAlertTriangle } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons/lib';


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({icon:Icon,name,...rest}) => {
    const [ isfocus, setFocus ] = useState(false);
    const [ isFulled , setFulled ] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName,defaultValue,error,registerField} =  useField(name);


   useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
   },[registerField,fieldName]);

   const focusInput = useCallback(() => {
        setFocus(true);
   },[]);

   const blurInput = useCallback(() => {
        setFocus(false);

        if(!!inputRef.current?.value){
            setFulled(true);
        }else{
            setFulled(false);
        }  

    },[]);

    return(

            <InputStyle isFulled={ isFulled } isfocused={ isfocus } hasError={!!error}>
               { Icon && <Icon size={20} />}
                <input  onFocus={ focusInput } onBlur={ blurInput } ref={ inputRef } defaultValue={defaultValue}  {...rest} />  
                {error && (
                        <>
                            <ErrorStyled title={ error } hasError={!!error} >
                                <FiAlertTriangle color="#c44536" size={20}></FiAlertTriangle>
                            </ErrorStyled>
                        </>
                ) }

            </InputStyle>
            
    )
}

export default Input;