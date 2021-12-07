import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [ type, setType ] = useState( 'users' )
  const[ data, setData ] = useState( [] )
  const  [pos, setPos ] = useState( {
    x: 0, y: 0
  } )

  


  useEffect( () => {
    fetch( `https://jsonplaceholder.typicode.com/${type}` )
      .then( response => response.json() )
      .then( json => SVGMetadataElement(json) )
  }, [type] )
  

  useEffect( () => {

    console.log('ComponentDidMount')

    window.addEventListener( 'mousemove', event => {
      setPos( {
        x: event.clientX,
        y: event.clientY
      })
    })
    
  }, [] )


  return (
    <div>
      
      <h1>ресурс: {type}</h1>

      <button onClick={ () => setType('users') }>Пользователи</button>
      <button onClick={ () => setType('todo') }>Todo</button>
      <button onClick={ () => setType('posts') }>Посты</button>

      <pre> { JSON.stringify( pos, null, 2 ) } </pre>
    </div>
  );

}

export default App;
