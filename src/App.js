import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import {Data} from './data.js';

function App() {
   return (
      <div className='App'>
         <SearchBar onSearch={(characterID) => console.log(characterID)} />
         <Cards characters={Data} />
      </div>
   );
}

export default App;
