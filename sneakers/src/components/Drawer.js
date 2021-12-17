function Drawer( { onClose, items = [], summa } )  {

    return (
      <div className="overlay">
        <div className="drawer">
        <h2 className="d-flex justify-between mb-30"> 
        Корзина <img onClick={onClose} width={20} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close" /> 
        </h2>

         

        <div className="items">

            {
                items.map( (obj, index) => (

                    <div className="cartItem d-flex align-center mb-20">
                        
                        <div
                            style={{ backgroundImage: `url( /img/sneakers/${ index + 1 }.jpg )` }}
                            className="cartItemImg"></div>
                        
                        <div className="mr-20 flex">
                            <p className="mb-5"> {obj.name} </p>
                            <b>{obj.price} руб.</b>
                        </div>
                        <img width={20} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                    </div>

                ))}
            
            
        
        </div>

        <div className="cardTotalBlock">

            <ul>
                <li className="d-flex">
                    <span> Итого: </span>
                    <div></div>
                    <b> { summa } руб.</b>
                </li>
                <li className="d-flex">
                    <span> Налог 5%: </span>
                    <div></div>
                    <b> { Math.round( summa / 100 * 5 ) } руб.</b>
                </li>
            </ul>

            <button> Оформить заказ </button>

        </div>

    </div>
  </div>
    );

}

export default Drawer;