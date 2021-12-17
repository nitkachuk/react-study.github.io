import styles from './Card.module.scss'
import React from 'react';

function Card( { name, price, pic, onPlus } ) {

	const [ isAdded, setIsAdded ] = React.useState( false );

	const onClickPlus = () => {
		onPlus( { name, price, pic } );
		setIsAdded( !isAdded );
	};



    return (
        <div className={styles.card}>
					<div className={styles.favorite}>
						<img src="/img/heart_unliked.svg" alt="Unliked" />
					</div>
					<img src={`/img/sneakers/${(pic+1)}.jpg`} width={133} height={140} alt="Sneakers" />
					<h5> {name} </h5>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column">
							<span>Цена:</span>
							<b> {price} руб.</b>
						</div>
						<button className="button">
							<img className={styles.plus} onClick={ onClickPlus } src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg" } width={20} height={20} alt="Plus" />
						</button>
					</div>
				</div>
				
    );

}

export default Card;