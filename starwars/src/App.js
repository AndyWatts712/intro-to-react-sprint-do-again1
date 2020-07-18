import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Characters from './components/Character';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [char, setChar] = useState()

  useEffect(() => {
  axios.get('https://rickandmortyapi.com/api/character')
    .then((resp) => {
      console.log(resp)
      setChar(resp.data.results)
    })
    .catch(err => console.log(err))
  }, [])
  console.log('CHAR', char)
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {char && char.map((chr) => {
        return(
      <Characters char = {chr.name} />)})}
    </div>
  );
}

export default App;
