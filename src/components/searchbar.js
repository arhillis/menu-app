import {useState} from 'react';
import {useMenuContext} from '../Context';

function SearchBar(){
    const {allMealsUrl, getMealData} = useMenuContext();
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
            <button className="btn btn-hipster">Suprise me!</button>
        </form>
    </div>)
}

export default SearchBar;