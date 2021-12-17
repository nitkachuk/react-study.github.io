
function Header( { onClickCart, summa = 0 } ) {
	
    return (
        <header className="d-flex justify-between align-center p-40">
			
			<div className="d-flex align-center">
				<img src="/img/logo.png" width={50} alt="Logo" />
				<div>
				
					<h3 className="text-uppercase"> React Sneakers </h3>
					<p className="opacity-5"> Магазин лучших кроссовок </p>
				
				</div>
			</div>
				<ul className="d-flex">
					<li onClick={ onClickCart } className="mr-30 cu-p">
						<img src="/img/cart.png" width={15} alt="Cart" />
						<span> { summa } руб.</span>
					</li>
					<li>
						<img src="/img/user.png" width={15} alt="User" />
					</li>
				</ul>
		
		</header>
    );

}

export default Header;