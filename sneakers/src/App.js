import Card from './components/Card/'
import Header from './components/Header'
import Drawer from './components/Drawer'
import React from 'react';

const arr = [ 
	{ name: 'Мужские кроссовки Fallen Troopers White', price: '12 999' },
	{ name: 'Мужские кроссовки Fallen Troopers Black', price: '11 999' },
	{ name: 'Мужские кроссовки Fallen Troopers Gray', price: '10 999' },
	{ name: 'Мужские кроссовки Fallen Troopers Green', price: '9 999' }
 ];

function App() {

	const [ cartOpened, setCartOpened ] = React.useState( false );

	return (
	<div className="wrapper clear">

		{ cartOpened ? <Drawer /> : null }
	
		<Header onClickCart={ () => setCartOpened(true) } />
		
		<div className="content p-40">
			<div className="d-flex align-center justify-between mb-40">
				<h1>Все кроссовки</h1>
				<div className="search-block">
					<img src="/img/search.png" width={12} alt="Search" />
					<input placeholder="Поиск..." />
				</div>
			</div>
			
			<div className="d-flex">
			
				{ arr.map( (obj, index) => (

					<Card 
						name = {obj.name} 
						price = {obj.price} 
						pic = {index} 
					/>

				)) }
			
			</div>
			
		</div>
	
	</div>
	);
}

export default App;
