import React from 'react'
import { useContext } from 'react'
import { openCartContext } from '../../pages/Home'
import styles from './OverlayCart.module.scss'
import CartItem from './CartItem'
import arrow from '../../assets/images/sneakesrs/rightArrow.svg'
import rightArrow from '../../assets/images/sneakesrs//right.svg'
import emptyCart from '../../assets/images/sneakesrs/emptyCart.png'
import { useSelector } from 'react-redux'
import { selectCartList, selectTotalPrice, selectTotalTax } from '../../store/slices/cartSlice'

const OverlayCart = () => {

    
    const cartList = useSelector(selectCartList);
    const totalPrice = useSelector(selectTotalPrice);
    const totalTax = useSelector(selectTotalTax);
    const [handlerOpenCart] = useContext(openCartContext)

    if (!cartList.length) {
        return (
            <div className={styles.overlay}>
                <div className={styles.drawler}>
                    <div className={styles.cartTop}>
                        <h2 className={styles.title}>Cart</h2>
                    </div>

                    <div className={styles.empty}>
                    <img src={emptyCart} alt="emptyCart" />
                        <h4>Cart is empty</h4>

                        <button onClick={handlerOpenCart} className={styles.buttonOrder}>
                            <img src={rightArrow} alt="arrow" />
                            <h2>Back</h2>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.drawler}>
                <div className={styles.cartTop}>
                    <h2 className={styles.title}>Cart</h2>
                    <button onClick={handlerOpenCart} className={styles.cartButtonList}>x</button>
                </div>

                <div className={styles.cartItemsList}>
                    {cartList.map((item) => {
                        return (
                            <CartItem key={item.id} {...item} />
                        )
                    })}
                </div>

                <ul className={styles.cartTotalBlock}>
                    <li>
                        <span>Total:</span>
                        <div></div>
                        <b>${totalPrice}</b>
                    </li>
                    <li>
                        <span>Tax 5%:</span>
                        <div></div>
                        <b>${totalTax}</b>
                    </li>
                </ul>


                <button className={styles.buttonOrder}>
                    <h2>Make an order</h2>
                    <img src={arrow} alt="arrow" />
                </button>
            </div>
        </div>
    )
}

export default OverlayCart
