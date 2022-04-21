import React, {createContext, useState} from 'react';

const LoginContext = createContext();

function LoginProvider(props){
    const[login, setLogin] = useState("");
    const toggleLogin = (pToken) => {
        setLogin(pToken);
    }
    return(
        <div>
            <LoginContext.Provider value ={{login, toggleLogin}}>
                {props.children}
            </LoginContext.Provider>
        </div>
    )
};

export {LoginContext, LoginProvider};