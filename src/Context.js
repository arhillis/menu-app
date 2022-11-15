import React, {useContext, useEffect, useState} from 'react';

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const MenuContext = React.createContext();

const MenuProvider = ({children}) =>{
    const [loading, setLoading] = useState(false); 
    const [meals, setMeals] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [numCalls, setNumCalls] = useState(0);//keeps track of the number of calls made

    
    console.log(`There have been ${numCalls} calls made...`)

    const getMealData = async (url) =>{
        setLoading(true);
        try{
            let calls = parseInt(localStorage.getItem('numCalls')) || 0;

            if(calls)
                setNumCalls(calls)
            const res = await fetch(url);
            const data = await res.json();
            setMeals(data.meals)
            calls++
            setNumCalls(calls)
            localStorage.setItem('numCalls', JSON.stringify(calls))
        }catch(err){
            console.log(err.message)
        }
        setLoading(false)
    }

    useEffect(() =>{
        getMealData(`${allMealsUrl}${searchValue}`)
    }, [searchValue])

    useEffect(() =>{
        getMealData(allMealsUrl)
    }, []);

    return <MenuContext.Provider
        value={{
            loading,
            meals,
            getMealData,
            allMealsUrl,
            setSearchValue
        }}
    >
        {children}
    </MenuContext.Provider>
}



export {MenuProvider}

export const useMenuContext = () =>{
    return useContext(MenuContext)
}