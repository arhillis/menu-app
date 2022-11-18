import {useMenuContext} from '../Context';//
import { AiFillYoutube } from "react-icons/ai";

function Modal(){
    const {selectedMeal, hideModal} = useMenuContext();

    if(!selectedMeal) return null;

    return (<div className="modal-overlay">
                <div className="modal-container">
                    <img src={selectedMeal.strMealThumb} className='modal-img' alt={selectedMeal.strMeal}/>
                    <div className='modal-content'>
                        <h3>{selectedMeal.strMeal}</h3>
                        <p>
                            {selectedMeal.strInstructions}
                        </p>
                            <a href={selectedMeal.strYoutube} target='_new'>
                                Watch on &nbsp;
                                <AiFillYoutube size='2rem'/>
                            </a>
                            <a href={selectedMeal.strSource} target='_new'>
                                View source
                            </a>
                        <button className=' btn close-btn' onClick={hideModal}>Close</button>
                    </div>
                </div>                
            </div>)
}

export default Modal