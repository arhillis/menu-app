import React, {useContext, useEffect, useState} from 'react';

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const MenuContext = React.createContext();

const MenuProvider = ({children}) =>{
    const [loading, setLoading] = useState(false); 
    const [meals, setMeals] = useState([]);

    const getMealData = async (url) =>{
        setLoading(true);
        try{
            const res = await fetch(url);
            const data = await res.json();
            setMeals(data.meals)
        }catch(err){
            console.log(err.message)
        }
        setLoading(false)
    }

    useEffect(() =>{
        getMealData(allMealsUrl)
    }, []);

    return <MenuContext.Provider
        value={{
            loading,
            meals
        }}
    >
        {children}
    </MenuContext.Provider>
}



export {MenuProvider}

export const useMenuContext = () =>{
    return useContext(MenuContext)
}