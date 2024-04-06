//import logo from './4me.png';
import './FindaGame.css';
import React, {useState} from 'react';

const FindaGame = ({location}) => {
  const [Height, setHeight] = useState('100hv');
  const [user, setUser] =useState({
    nameR: '',
    nameS: '',
    nameC: '',
    code: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  console.log(user.code)
  return (location.pathname === '/FindaGame')
  ? (
    <div className="App" style={{ height: Height}}>
      <h1 className="App-header">
        Acronym 4 Me
      </h1>
      <div className = "container">
      <h2 className = "findrandomgame"> 
        Search for a random lobby
        <div className = "space">
          <div>
            Name
          </div>
          <input
            className = "textbox"
            type="text"
            name="nameR"
            value={user.nameR}
            onChange={handleChange}
            />
            
        </div>
        <button className = "button-84">
          Join Game
        </button>
      </h2>
      <h2 className = "entergamecode"> 
        Search for a lobby using a code
        <div className = "space">
          <div>
            Name
          </div>
          <input
            className = "textbox"
            type="text"
            name="nameS"
            value={user.nameS}
            onChange={handleChange}
            />
        </div>
        <div className = "space">
          <div>
            Code
          </div>
          <input
            className = "textbox"
            type="text"
            name="code"
            value={user.code}
            onChange={handleChange}
            />
        </div>
        <button className = "button-84">
          Join Game
        </button>
      </h2>
      </div>
      <h3 className = "createagame">
        Create a Lobby
        <div >
          <div>
            Name
          </div>
          <input
            className = "textbox2"
            type="text"
            name="nameC"
            value={user.nameC}
            onChange={handleChange}
            />
        </div>
        <button className = "button-2">
          Join Game
        </button>
      </h3>
    </div>
  ): null;
}

export default FindaGame;