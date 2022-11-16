function Favorites(){
    const favorites = localStorage.getItem('favorites');
    console.log(favorites);
    
    return (<div className="favorites">
                <div className="favorites-content">
                    <div className="favorites-container">
                        <h5>Favorites</h5>
                    </div>                    
                </div>                
            </div>)
}

export default Favorites