import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function computeInitialCounter() {
  console.log('blah')
  return Math.trunc( Math.random() * 20)
}

function App() {

  //const [counter, setCounter] = useState( 0 ) 
  //const [counter, setCounter] = useState( computeInitialCounter() ) 
  const [counter, setCounter] =  useState( () => {
    return computeInitialCounter()
  })

  const [ state, setState ] = useState( {
    title: 'Cчетчик',
    date: Date.now()
  })

  function increment() {
    // setCounter( counter + 1 )
    // setCounter( counter + 1 )
    setCounter( (prevCounter) => {    // same
      return prevCounter + 1
    })
    setCounter( prev => prev + 1 )    // same
  }

  function decrement() {
    setCounter( counter - 1 )
  }

  function updatetitle() {
    setState( prev => {
      return {
        ...prev,
        title: 'Новое название'
      }
    } )
  }

  return (
    <div>
      
      <h1> Счетчик {counter} </h1>
      <button onClick={ increment } className="btn btn-success"> Добавить </button>
      <button onClick={ decrement } className="btn btn-danger"> Убрать </button>
      <button onClick={ () => setState( { title: 'new value' } ) } className="btn btn-default"> Изменить название </button>

    <pre> { JSON.stringify(state, null, 2) } </pre>
    </div>
  );
}

export default App;
