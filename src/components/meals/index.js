import { useMenuContext } from '../../Context';

function Meals(){
    const {meals} = useMenuContext();
    if(meals) console.log('from meals component', meals);
    return (<section className='section section-center'>Meals go here...</section>)
}

export default Meals;