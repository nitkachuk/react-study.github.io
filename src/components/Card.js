function Card( props ) {

    return (
        <div className="card">
					<div className="favorite">
						<img src="/img/heart_unliked.svg" alt="Unliked" />
					</div>
					<img src={`/img/sneakers/${(props.pic+1)}.jpg`} width={133} height={140} alt="Sneakers" />
					<h5> {props.name} </h5>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column">
							<span>Цена:</span>
							<b> {props.price} руб.</b>
						</div>
						<button className="button">
							<img src="/img/plus.png" width={11} height={11} alt="Plus" />
						</button>
					</div>
				</div>
				
    );

}

export default Card;