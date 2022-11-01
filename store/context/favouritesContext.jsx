import { createContext, useState } from "react";
import { set } from "react-native-reanimated";

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {}
});

function FavouritesContextProvider({children}) {
    const [favourateMealIds, setFavouriteMealIds] = useState([]);

    function addFavourite(id){
        setFavouriteMealIds((prev)=>{
            return [...prev, id];
        })
    }

    function removeFavourite(id){
        setFavouriteMealIds((prev)=>{
            return prev.filter((mealId)=>{
                return mealId !== id;
            });
        });
    }

    const value = {
        ids: favourateMealIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite
    }

    return <FavouritesContext.Provider value = {value}>
        {children}
    </FavouritesContext.Provider>
}

export default FavouritesContextProvider;