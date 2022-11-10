import { useMenuContext } from '../../Context';
import Meal from './meal';

function Meals(){
    const {meals} = useMenuContext();
    if(meals) console.log('from meals component', meals[0]);
    return (<section className='section section-center'>
            {meals.map((meal, index) => (<Meal key={index} meal={meal}/>))}
    </section>)
}

export default Meals;