import { BsFillHeartFill, BsXCircleFill } from "react-icons/bs";
import {useMenuContext} from '../../Context';
function Meal({meal}){
    const {selectMeal, addToFavorites, removeFromFavorites, isFavorite} = useMenuContext();
    const isFav = isFavorite(meal.idMeal)

    return (<section className={isFav ? 'single-meal favorite' : 'single-meal'}>
        <img src={meal.strMealThumb} alt={meal.strMeal}/>
        <footer>
            <h5>{meal.strMeal}</h5>
            <div className="btn-row">
                <button className="btn view-btn" 
                    onClick={() => selectMeal(meal.idMeal)}>
                        Details
                </button>
                {isFav ? (
                    <button className="like-btn"
                        onClick={() => removeFromFavorites(meal.idMeal)}
                    >
                        <BsXCircleFill />
                    </button>
                ) : (
                    <button className="like-btn" 
                            onClick={() => addToFavorites(meal)}>
                        <BsFillHeartFill />
                    </button>
                )}
                
                        
            </div>
            
        </footer>
        
    </section>)
}

export default Meal;