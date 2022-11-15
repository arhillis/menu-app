import { useMenuContext } from '../../Context';
import Meal from './meal';

function Meals(){
    const {meals, loading} = useMenuContext();

    if(loading)
        return (<section className='section section-center'>
                    <h4>Loading meals...</h4>
                </section>)
    if(meals) console.log('from meals component', meals[0]);
    return (<section className='section section-center'>
            {meals.map((meal, index) => (<Meal key={index} meal={meal}/>))}
    </section>)
}

export default Meals;