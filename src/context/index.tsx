

import React from 'react';
import { ToastProvider } from './ToastContext';
import { AuthProvider } from './AuthContext';



const Provider: React.FC = ({ children }) => {
    return(
            <AuthProvider>
                <ToastProvider>
                    { children }
                </ToastProvider>
            </AuthProvider>
    )
}

export default Provider;