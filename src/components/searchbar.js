function SearchBar(){
    return (<div className="search-container">
        <form>
            <input type="text" className="form-input" placeholder="type favorite meal"/>
            <button className="btn">Search</button>
            <button className="btn btn-hipster">Suprise me!</button>
        </form>
    </div>)
}

export default SearchBar;