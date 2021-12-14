import styles from './Card.module.scss'
import React from 'react';

function Card( props ) {

	const [ isAdded, setIsAdded ] = React.useState( false );

	const onClickPlus = () => {
		setIsAdded( !isAdded );
	};



    return (
        <div className={styles.card}>
					<div className={styles.favorite}>
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
							<img className={styles.plus} onClick={ onClickPlus } src={ onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg" } width={20} height={20} alt="Plus" />
						</button>
					</div>
				</div>
				
    );

}

export default Card;