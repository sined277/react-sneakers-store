import React, { useState, useEffect, createContext } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSneakers } from '../store/slices/sneakersSlice';
import OverlayCart from '../components/OverlayCart/OverlayCart';
import ShoesList from '../components/ShoesList/ShoesList';
import Header from '../components/Header/Header';

export const openCartContext = createContext();

const Home = () => {
    const dispatch = useDispatch();
    const [isOpenCart, setIsOpenCart] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handlerOpenCart = () => {
        setIsOpenCart(!isOpenCart);
    };

    
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    useEffect(() => {
        try {
            dispatch(fetchSneakers("https://6589bb86324d417152596aab.mockapi.io/items"));
        } catch (error) {
            console.log(`Error ${error}`);
        }
    }, [dispatch]);

    return (
        <openCartContext.Provider value={[handlerOpenCart]}>
            <Header />
            {isOpenCart && <OverlayCart />}
            <div className="main">
                <ShoesList handleInputChange={handleInputChange} searchValue={searchValue} />
            </div>
        </openCartContext.Provider>
    );
};

export default Home;
