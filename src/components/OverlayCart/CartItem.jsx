import React from 'react'
import styles from './OverlayCart.module.scss'
import { removeItem} from '../../store/slices/cartSlice'
import { useDispatch } from 'react-redux';


const CartItem = ({title, price, imageUrlAdress, id}) => {
    const dispatch = useDispatch();


    
    return (
        <div className={styles.cartItem}>
            <img width={90} height={70} src={imageUrlAdress} alt="sneakers" />

            <div className={styles.cartPrice}>
                <h3>{title}</h3>
                <p>${price}</p>
            </div>
            <button onClick={() => dispatch(removeItem(id))} className={styles.cartButtonList}>x</button>
        </div>
    )
}

export default CartItem