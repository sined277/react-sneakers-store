import React from 'react'
import styles from "../components/ShoesList/ShoesList.module.scss";
import { useSelector } from 'react-redux';
import { selectCartList } from '../store/slices/cartSlice';
import { Link } from 'react-router-dom';
import ShoesCardCart from '../components/ShoesCard/ShoesCardCart';
import smile from '../assets/images/sneakesrs/image 9.png'
import arrowLeft from '../assets/images/sneakesrs/right.svg'



const Cart = () => {
    const cartList = useSelector(selectCartList)


    
    if (!cartList.length) {
        return (
            <div className={styles.noLength}>
                <img src={smile} alt="smile" />
                <h2>No bookmarks yet :(</h2>
                <p>You haven't bookmarked anything</p>
                <Link to={'/'}>
                    <button>
                        <img src={arrowLeft} alt="arrowLeft" />
                        <h4>Back</h4>
                    </button>
                </Link>
            </div>
        )
    }
    return (
        <div className="main">
            <h1 className={styles.title}>All Shoes</h1>

            <div className={styles.cardBlocks}>
                {cartList.map((item) => <ShoesCardCart {...item} />)}
            </div>

            <Link to={'/'}>
                <button className={styles.btn}>Back</button>
            </Link>
        </div>
    )
}

export default Cart
