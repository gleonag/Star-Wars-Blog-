import React, {useState} from 'react'


const MyContext = React.createContext(null);

    const ContextProvider = (props) => {

        const [store, setStore] = useState(
            {
                favoritos: []
            }
        );
    const [actions, setActions] = useState(
        {
            addFavorites: (tittle)=>{
                setStore({
                    ...store,favorites: favorites.concat(tittle)
                })
            },
            removeFavorites: (tittle)=>{
                setStore({
                    ...store, favorites: favorites.delete(tittle)
                })
            }
        }
    )
    return (
        <MyContext.Provider value={{actions, store}}>
            {props.children}
        </MyContext.Provider>
    )
};


export default ContextProvider