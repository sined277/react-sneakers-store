import React, { useState } from 'react'
import styles from './ShoesCard.module.scss';
import plus from '../../assets/images/sneakesrs/plus.svg';
import checked from '../../assets/images/sneakesrs/checked.svg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';

const ShoesCard = ({ title, price, imageUrlAdress, id }) => {

    const [isAddedToCart, setisAddedToCart] = useState(false)
    const dispatch = useDispatch()
    const handlerAddToCart = () => {
        setisAddedToCart(!isAddedToCart)
    }
    const addToCartClick = (obj) => {
        dispatch(addToCart(obj))
    }

    return (
        <div className={styles.card}>
            <div className={styles.item}>
                <img className={styles.cardImage} src={imageUrlAdress} alt="asd" />
                <p className={styles.brandName}>{title}</p>
            </div>

            <div className={styles.buy}>
                <div className={styles.price}>
                    <span>Price:</span>
                    <b>${price}</b>
                </div>

                <div className={styles.buttons}>
                    <button onClick={handlerAddToCart} className={styles.cartButton}>
                        <img onClick={() => addToCartClick({ title, price, imageUrlAdress, id })} src={!isAddedToCart ? plus : checked} alt="add to cart button" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShoesCard
