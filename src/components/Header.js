function Header() {

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
					<li className="mr-30">
						<img src="/img/cart.png" width={15} />
						<span>1205 руб.</span>
					</li>
					<li>
						<img src="/img/user.png" width={15} />
					</li>
				</ul>
		
		</header>
    );

}

export default Header;