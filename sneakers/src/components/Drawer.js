function Drawer() {

    return (
      <div className="overlay">
        <div className="drawer">
        <h2 className="d-flex justify-between mb-30"> Корзина 
            <img width={20} class="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" /> 
        </h2>

         

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
                src="/img/sneakers/3.jpg"
                alt="Sneakers"
                />
                
                <div className="mr-20">
                    <p className="mb-5"> Мужские кроссовки Fallen Troopers Gray </p>
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
    );

}

export default Drawer;