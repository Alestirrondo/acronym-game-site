//import logo from './4me.png';
import './FindaGame.css';
import react, {useState} from 'react';

const FindaGame = ({location}) => {
  const [Height, setHeight] = useState('100hv');
  return (location.pathname === '/FindaGame')
  ? (
    <div className="App" style={{ height: Height}}>
      <h1 className="App-header">
        Acronym 4 Me
      </h1>
      <div className = "container">
      <h2 className = "findrandomgame"> 
        Search for a random lobby
        <div >
          <div>
            Name
          </div>
          <input
            type="text"
            name="name"
            />
        </div>
      </h2>
      <h2 className = "entergamecode"> 
        Search for a lobby using a code
        <div >
          <div>
            Name
          </div>
          <input
            type="text"
            name="name2"
            />
        </div>
        <div >
          <div>
            Code
          </div>
          <input
            type="text"
            name="code"
            />
        </div>
      </h2>
      </div>
      <h3 className = "createagame">
        Create a Lobby
      </h3>
    </div>
  ): null;
}

export default FindaGame;