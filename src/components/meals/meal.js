import { BsFillHeartFill } from "react-icons/bs";
import {useMenuContext} from '../../Context';
function Meal({meal}){
    const {selectMeal} = useMenuContext();

    return (<section className='single-meal'>
        <img src={meal.strMealThumb} alt={meal.strMeal}/>
        <footer>
            <h5>{meal.strMeal}</h5>
            <div className="btn-row">
                <button className="btn view-btn" onClick={() => selectMeal(meal.idMeal)}>Details</button>
                <button className="like-btn"><BsFillHeartFill /></button>
            </div>
            
        </footer>
        
    </section>)
}

export default Meal;