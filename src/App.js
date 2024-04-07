
import SnorlaxSleep from './images/SnorlaxSleep.jpg';
import './App.css';
import './Buttons.js'
import React, {useState} from 'react';

function App() {

  function ListWithButton(){
    // state to hold my list
    const [list, setList] = useState(['Snorlax', 'Crochet', 'Art', 'Movies', 'Sleeping']);

    const reorderList = () => {
      // reorder the list when button is clicked
      const newList = [...list].reverse();
      setList(newList);
    }

    return (
      <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={reorderList}>Reorder List</button>
    </div>
    )

  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to my website!
        </p>

        <img src={SnorlaxSleep} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://www.linkedin.com/in/cami-lacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cami Lacy LinkedIn
        </a>

        <subtitle className="App-subtitle">
        <p>
          My name is Cami Lacy, and I am a graduating senior from the University of Washington Bothell. I am majoring in Computer Science and Software Engineering while planning to attend my third summer interning at Dell Technologies. 
        </p>
        <p>
          List of my interests: 
        </p>

        <ListWithButton/>

      </subtitle>
      </header>

    </div>
  );
}

export default App;
