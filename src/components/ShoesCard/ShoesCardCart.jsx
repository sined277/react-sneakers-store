import React from 'react'
import styles from './ShoesCard.module.scss';

const ShoesCardCart = ({imageUrlAdress, title, price, id}) => {
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
            </div>
        </div>
    )
}

export default ShoesCardCart
