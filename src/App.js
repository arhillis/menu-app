//import { useContext } from 'react';
import { useMenuContext } from './Context';

import './App.css';

import SearchBar from "./components/searchbar";
import Favorites from './components/favorites';
import Meals from './components/meals';
import Modal from './components/modal';

function App() {
  const context = useMenuContext();
  const {meals} = context;
  if(meals){
    console.log(meals);
  }
  
  return (
    <div className="App">
      <SearchBar />
      <Favorites />
      <Meals />
      <Modal />
    </div>
  );
}

export default App;
