import React, {useContext} from 'react';

const MenuContext = React.createContext();

const MenuProvider = ({children}) =>{
    return <MenuContext.Provider
        value={{
            message: 'Hola mundo'
        }}
    >
        {children}
    </MenuContext.Provider>
}

export {MenuContext, MenuProvider}

export const useMenuContext = () =>{
    return useContext(MenuContext)
}