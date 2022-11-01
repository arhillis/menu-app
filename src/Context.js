import React, {useContext, useEffect, useState} from 'react';

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const MenuContext = React.createContext();

const MenuProvider = ({children}) =>{
    const [meals, setMeals] = useState([]);

    const getMealData = async (url) =>{
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
            .catch(err => console.log('SOMETHING WENT WRONG!!!'))
    }

    useEffect(() =>{
        getMealData(allMealsUrl)
    }, []);

    return <MenuContext.Provider
        value={{
            message: 'Hola mundo',
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