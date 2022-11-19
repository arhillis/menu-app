import {useMenuContext} from '../Context';

function Favorites(){    
    const {favorites} = useMenuContext();

    return (<div className="favorites">
                <div className="favorites-content">
                    <h5>Favorites</h5>
                    <div className="favorites-container">
                        {favorites.length > 0 ? 
                            (<>Favorites go here...</>) :
                            (<>No favorites to show...</>)
                        }
                    </div>                    
                </div>                
            </div>)
}

export default Favorites