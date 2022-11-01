import './App.css';

import SearchBar from "./components/searchbar";
import Favorites from './components/favorites';
import Meals from './components/meals';
import Modal from './components/modal';

function App() {
  
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
