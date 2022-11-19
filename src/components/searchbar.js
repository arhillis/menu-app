import {useState} from 'react';
import {useMenuContext} from '../Context';

function SearchBar(){
    const {allMealsUrl, getMealData, getRandomMeal, getAllMeals} = useMenuContext();
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e) =>{
        setSearchValue(e.target.value);        
    }

    const handleSearch = (e) =>{
        e.preventDefault();
        if(searchValue !== '')
            getMealData(`${allMealsUrl}${searchValue}`)
        setSearchValue('')
    }

    const fetchAllMeals = (e) =>{
        e.preventDefault();
        getAllMeals();
        setSearchValue('');
    }

    return (<div className="search-container">
        <form>
            <input 
                type="text" 
                className="form-input" 
                placeholder="type favorite meal"
                name='searchValue'
                value={searchValue}
                onChange={handleSearchChange}/>
            <button className="btn" onClick={handleSearch}>Search</button>
            <button className="btn" onClick={fetchAllMeals}>All Meals</button>
            <button className="btn btn-hipster" onClick={getRandomMeal}>Suprise me!</button>
        </form>
    </div>)
}

export default SearchBar;