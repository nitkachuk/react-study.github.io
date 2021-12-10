


function App() {
	return (
	<div className="wrapper clear">
	
		<div className="overlay">
			<div className="drawer">
				<h2 className="d-flex justify-between mb-30"> Корзина <img width={20} class="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" /> </h2>

				<div className="items">

					<div className="cartItem d-flex align-center mb-20">
						
						<img 
						className="mr-20"
						width={70} 
						height={70}
						src="/img/sneakers/1.jpg"
						alt="Sneakers"
						/>
						
						<div className="mr-20 flex">
							<p className="mb-5"> Мужские кроссовки Fallen Troopers White </p>
							<b>12 999 руб.</b>
						</div>
						<img width={20} class="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
					</div>
					
					<div className="cartItem d-flex align-center mb-20">
						
						<img 
						className="mr-20"
						width={70} 
						height={70}
						src="/img/sneakers/2.jpg"
						alt="Sneakers"
						/>
						
						<div className="mr-20">
							<p className="mb-5"> Мужские кроссовки Fallen Troopers Black </p>
							<b>12 999 руб.</b>
						</div>
						<img width={20} class="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
					</div>

					<div className="cartItem d-flex align-center mb-20">
						
						<img 
						className="mr-20"
						width={70} 
						height={70}
						src="/img/sneakers/1.jpg"
						alt="Sneakers"
						/>
						
						<div className="mr-20 flex">
							<p className="mb-5"> Мужские кроссовки Fallen Troopers White </p>
							<b>12 999 руб.</b>
						</div>
						<img width={20} class="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
					</div>
					
					<div className="cartItem d-flex align-center mb-20">
						
						<img 
						className="mr-20"
						width={70} 
						height={70}
						src="/img/sneakers/2.jpg"
						alt="Sneakers"
						/>
						
						<div className="mr-20">
							<p className="mb-5"> Мужские кроссовки Fallen Troopers Black </p>
							<b>12 999 руб.</b>
						</div>
						<img width={20} class="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
					</div>

					<div className="cartItem d-flex align-center mb-20">
						
						<img 
						className="mr-20"
						width={70} 
						height={70}
						src="/img/sneakers/1.jpg"
						alt="Sneakers"
						/>
						
						<div className="mr-20 flex">
							<p className="mb-5"> Мужские кроссовки Fallen Troopers White </p>
							<b>12 999 руб.</b>
						</div>
						<img width={20} class="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
					</div>
					
					<div className="cartItem d-flex align-center mb-20">
						
						<img 
						className="mr-20"
						width={70} 
						height={70}
						src="/img/sneakers/2.jpg"
						alt="Sneakers"
						/>
						
						<div className="mr-20">
							<p className="mb-5"> Мужские кроссовки Fallen Troopers Black </p>
							<b>12 999 руб.</b>
						</div>
						<img width={20} class="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
					</div>
				
				</div>

				<div className="cardTotalBlock">

					<ul>
						<li className="d-flex">
							<span> Итого: </span>
							<div></div>
							<b>21 498 руб.</b>
						</li>
						<li className="d-flex">
							<span> Налог 5%: </span>
							<div></div>
							<b>1 074 руб.</b>
						</li>
					</ul>

					<button> Оформить заказ </button>

				</div>

			</div>
		</div>
	
		<header className="d-flex justify-between align-center p-40">
			
			<div className="d-flex align-center">
				<img src="/img/logo.png" width={50} alt="Logo" />
				<div>
				
					<h3 className="text-uppercase"> React Sneakers </h3>
					<p className="opacity-5"> Магазин лучших кроссовок </p>
				
				</div>
			</div>
				<ul className="d-flex">
					<li className="mr-30">
						<img src="/img/cart.png" width={15} />
						<span>1205 руб.</span>
					</li>
					<li>
						<img src="/img/user.png" width={15} />
					</li>
				</ul>
		
		</header>
		
		<div className="content p-40">
			<div className="d-flex align-center justify-between mb-40">
				<h1>Все кроссовки</h1>
				<div className="search-block">
					<img src="/img/search.png" width={12} alt="Search" />
					<input placeholder="Поиск..." />
				</div>
			</div>
			
			<div className="d-flex">
			
				<div className="card">
					<div className="favorite">
						<img src="/img/heart_unliked.svg" alt="Unliked" />
					</div>
					<img src="/img/sneakers/1.jpg" width={133} height={140} alt="Sneakers" />
					<h5>Мужские кроссовки Fallen Troopers White</h5>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column">
							<span>Цена:</span>
							<b>12 999 руб.</b>
						</div>
						<button className="button">
							<img src="/img/plus.png" width={11} height={11} alt="Plus" />
						</button>
					</div>
				</div>
				
				<div className="card">
					<img src="/img/sneakers/2.jpg" width={133} height={140} alt="Sneakers" />
					<h5>Мужские кроссовки Fallen Troopers Black</h5>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column">
							<span>Цена:</span>
							<b>12 999 руб.</b>
						</div>
						<button className="button">
							<img src="/img/plus.png" width={11} height={11} alt="Plus" />
						</button>
					</div>
				</div>
				
				<div className="card">
					<img src="/img/sneakers/3.jpg" width={133} height={140} alt="Sneakers" />
					<h5>Мужские кроссовки Fallen Troopers Gray</h5>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column">
							<span>Цена:</span>
							<b>12 999 руб.</b>
						</div>
						<button className="button">
							<img src="/img/plus.png" width={11} height={11} alt="Plus" />
						</button>
					</div>
				</div>
				
				<div className="card">
					<img src="/img/sneakers/4.jpg" width={133} height={140} alt="Sneakers" />
					<h5>Мужские кроссовки Fallen Troopers Green</h5>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column">
							<span>Цена:</span>
							<b>12 999 руб.</b>
						</div>
						<button className="button">
							<img src="/img/plus.png" width={11} height={11} alt="Plus" />
						</button>
					</div>
				</div>
			
			</div>
			
		</div>
	
	</div>
	);
}

export default App;
