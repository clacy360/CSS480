import SnorlaxSleep from './images/SnorlaxSleep.jpg';
import { BrowserRouter, Routes, Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import './App.css';
import './Buttons.js'
import React, {useState} from 'react';
//import { BrowserRouter } from 'react-router-dom';
import ThingsToRead from './ThingsToRead.js';

function App() {

  function ListWithButton(){
    // state to hold my list
    const [list, setList] = useState(['Snorlax', 'Crochet', 'Art', 'Movies', 'TV Shows', 'Sleeping']);

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
      <Navbar/> 
        <p>
          Welcome to my website!
        </p>
        <br/>
        
        

        <img src={SnorlaxSleep} className="App-logo" alt="logo" />

        {/* <a
          className="App-link"
          href="https://www.linkedin.com/in/cami-lacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cami Lacy LinkedIn
        </a> */}

        <subtitle className="App-subtitle">
          <br/>
        <p>
          My name is Cami Lacy, and I am a graduating senior from the University of Washington Bothell. I am majoring in Computer Science and Software Engineering while planning to attend my third summer interning at Dell Technologies. 
        </p>
        <br/>
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