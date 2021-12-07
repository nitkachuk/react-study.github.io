import logo from './logo.svg';
import './App.css';
import React, {useState, useMemo} from 'react';
import { useEffect } from 'react/cjs/react.development';

// custom hook

function useLogger( value ) {
  useEffect( () => {
    
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue( event.target.value )
  }

  const clear = () => setValue('')

  return {
    bind: { value, onChange},
    value, 
    clear
  }
}

function App() {

  const input = useInput('')
  const lastName = useInput('')

  useLogger( input.value )

  return (
    <div>

      <input type='text' { ...input.bind } />

      <button classname="btn btn-warning" onClick={ () => input.clear() }> Clear </button>

      <h1> {input.value} </h1>
      
    </div>
  );

}

export default App;
