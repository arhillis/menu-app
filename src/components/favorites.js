import {useMenuContext} from '../Context';

function Favorites(){    
    const {favorites, removeFromFavorites, selectMeal} = useMenuContext();

    return (<div className="favorites">
                <div className="favorites-content">
                    <h5>Favorites</h5>
                    <div className="favorites-container">
                        {favorites.length > 0 ? 
                            favorites.map(meal =>
                            (<div className='favorite-item' 
                                key={meal.idMeal}>
                                    <img 
                                        className='img favorites-img'
                                        src={meal.strMealThumb} 
                                        alt={meal.strMeal}
                                        onClick={() => selectMeal(meal.idMeal)}
                                    />
                                    <button className='remove-btn'
                                        onClick={() => removeFromFavorites(meal.idMeal)}
                                    >
                                        remove
                                    </button>
                            </div>)) :
                            (<>No favorites to show...</>)
                        }
                    </div>                    
                </div>                
            </div>)
}

export default Favorites