import './App.css';
import {Cards} from './components/Cards/Cards.jsx';
import {SearchBar} from './components/SearchBar/SearchBar.jsx';
import {Data} from './data.js';
import {LogoRAM} from './components/Logo/LogoRAM';
import { CursorShip } from './components/cursorShip/CursorShip';

function App() {
   return (
      <div className='App'>
         <LogoRAM/>
         <SearchBar onSearch={(characterID) => console.log(characterID)} />
         <Cards characters={Data} />
         <CursorShip/>
      </div>
   );
}

export {App};
