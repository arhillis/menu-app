import { useMenuContext } from '../../Context';
import Meal from './meal';

function Meals(){
    const {meals, loading} = useMenuContext();

    if(loading)
        return (<section className='section section-center'>
                    <h4>Loading meals...</h4>
                </section>)
    if(meals !== null) {
        console.log('from meals component', meals[0]);
        return (<section className='section section-center'>
                        {meals.map((meal, index) => 
                            (<Meal key={index} meal={meal}/>)
                        )}
                </section>)
    }

    return (<section className='section section-center'>
                    <h4>No meal to show...</h4>
                </section>)
}

export default Meals;