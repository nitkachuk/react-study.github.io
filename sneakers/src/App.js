import Card from './components/Card/'
import Header from './components/Header'
import Drawer from './components/Drawer'
import React from 'react';

function App() {

	const [ items, setItems ] = React.useState( [] );
	const [ cartItems, setCartItems ] = React.useState( [ ] );
	const [ searchValue, setSearchValue ] = React.useState( '' );
	const [ cartOpened, setCartOpened ] = React.useState( false );


	React.useEffect( () => {

		fetch( 'https://61b9bd0c38f69a0017ce624e.mockapi.io/items' ).then( res => {
			return res.json();
		} ).then( (json) => {
			setItems( json );
		} );

	}, [] )


	const onAddToCart = (obj) => {
		setCartItems( prev => [ ...prev, obj ] );
		setCartOpened(true);
	}

	const onChangeSearchInput = (event) => {
		setSearchValue( event.target.value );
	}


	return (
	<div className="wrapper clear">

		{ cartOpened && ( 
				<Drawer 
					items={cartItems} 
					onClose={ () => setCartOpened(false) } 
					summa = { cartItems.reduce( (sum, elem) => sum + Number( elem.price.replace(" ", "") ), 0 ) }
				/> 
			) 
		}
	
		<Header 
			onClickCart={ () => setCartOpened(true) } 
			summa = { cartItems.reduce( (sum, elem) => sum + Number( elem.price.replace(" ", "") ), 0 ) }
		/>
		
		<div className="content p-40">
			<div className="d-flex align-center justify-between mb-40">
				<h1> { searchValue ? `Поиск "${ searchValue }"` : 'Все кроссовки' } </h1>
				<div className="search-block">
					<img src="/img/search.png" width={12} alt="Search" />
					{ searchValue && (
						<img 
							onClick={ () => setSearchValue('') } 
							width={20} className="cu-p clear" 
							src="/img/btn-remove.svg" 
							alt="Close" /> 
					)}
					<input onChange={ onChangeSearchInput } value={ searchValue } placeholder="Поиск..." />
				</div>
			</div>
			
			<div className="d-flex flex-wrap">
			
				{ items
					.filter( item => item.name.toLowerCase().includes(searchValue) )
					.map( (item, index) => (

					<Card 
						key = { index }
						name = { item.name } 
						price = { item.price } 
						pic = { index } 
						onPlus = { (obj) => onAddToCart( obj ) }
					/>

				)) }
			
			</div>
			
		</div>
	
	</div>
	);
}

export default App;
