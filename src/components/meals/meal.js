import { BsFillHeartFill } from "react-icons/bs";
function Meal({meal}){
    
    return (<section className='single-meal'>
        <img src={meal.strMealThumb} alt={meal.strMeal}/>
        <footer>
            <h5>{meal.strMeal}</h5>
            <button className="like-btn"><BsFillHeartFill /></button>
        </footer>
        
    </section>)
}

export default Meal;