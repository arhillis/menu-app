import React, {useContext, useEffect, useState} from 'react';

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const MenuContext = React.createContext();

const MenuProvider = ({children}) =>{
    const [loading, setLoading] = useState(false); 
    const [meals, setMeals] = useState(null);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [searchValue, setSearchValue] = useState('');    
    const [favorites, setFavorites] = useState(
            JSON.parse(localStorage.getItem('favorites')) ||
        []);

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
    };

    const getAllMeals = () =>{ 
        getMealData(allMealsUrl)
    };

    const getRandomMeal = (e) =>{ 
        e.preventDefault();
        setSearchValue('');
        getMealData(randomMealUrl)
    };

    const hideModal = () => setSelectedMeal(null);

    const selectMeal = (id) =>{
        setSelectedMeal(meals.find(meal => meal.idMeal === id))
    }

    const isFavorite = (id) =>{
        return favorites.find(meal => meal.idMeal === id)
    }

    const addToFavorites = (meal) =>{
        const {idMeal} = meal;
        if(!isFavorite(idMeal))
            setFavorites([...favorites, meal])
    }

    const removeFromFavorites = (id) =>{
        setFavorites(favorites.filter(meal => meal.idMeal !== id))
    }

    useEffect(() =>{
        if(!searchValue) return;
        getMealData(`${allMealsUrl}${searchValue}`)
    }, [searchValue])

    useEffect(() =>{
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites])

    useEffect(() =>{ getAllMeals()}, []);
    
    

    return <MenuContext.Provider
        value={{
            loading,
            meals,
            getMealData,
            allMealsUrl,
            setSearchValue,
            getAllMeals,
            getRandomMeal,
            selectedMeal,
            hideModal,
            selectMeal,
            favorites,
            isFavorite,
            addToFavorites,
            removeFromFavorites
        }}
    >
        {children}
    </MenuContext.Provider>
}



export {MenuProvider}

export const useMenuContext = () =>{
    return useContext(MenuContext)
}