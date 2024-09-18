import React from 'react'
import { openCartContext } from '../../pages/Home';
import { useContext } from 'react';
import styles from "./Header.module.scss";
import logo from '../../assets/images/header/logo.svg';
import cart from '../../assets/images/header/cart.svg';
import profile from '../../assets/images/header/profile.svg';
import { useSelector } from 'react-redux';
import { selectTotalPrice } from '../../store/slices/cartSlice';
import { Link } from 'react-router-dom';



const Header = () => {
    const totalPrice = useSelector(selectTotalPrice)
    const [handlerOpenCart] = useContext(openCartContext)

    return (
        <div className={styles.header}>
            <Link to={'/'}>
                <div className={styles.logo}>
                    <img src={logo} alt='logo' className={styles.img}></img>
                    <div className={styles.info}>
                        <h1 className={styles.title}>DENNIS SNEAKERS</h1>
                        <p className={styles.subtitle}>Best shoes store</p>
                    </div>
                </div>
            </Link>

            <div className={styles.navigation}>
                <ul className={styles.navitems}>
                    <li onClick={handlerOpenCart} className={styles.navitem}><img src={cart} alt=''></img> <h2>${totalPrice}</h2></li>
                    <Link to={'/cart'}>
                        <li className={styles.navitem}><img src={profile} alt=''></img> <h2>Profile</h2></li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header