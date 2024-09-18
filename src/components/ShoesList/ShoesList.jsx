import React from 'react'
import styles from "./ShoesList.module.scss";
import searchLogo from '../../assets/images/sneakesrs/search.svg';
import ShoesCard from '../ShoesCard/ShoesCard';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectSneakersList } from '../../store/slices/sneakersSlice';
import SneakersSkeleton from '../SneakerSkeleton/SneakerSkeleton';

const ShoesList = ({ handleInputChange, searchValue }) => {
    const shoesArray = useSelector(selectSneakersList)
    const loadingStatus = useSelector(selectIsLoading)
    const sneakers = shoesArray.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((sneakerItem) => <ShoesCard key={sneakerItem.id} {...sneakerItem} />)
    const skeletons = [...new Array(10)].map((_, index) => <SneakersSkeleton key={index} />)


    
    return (
        <div className={styles.shoes}>
            <div className={styles.blocks}>
                <h1 className={styles.title}>All Shoes</h1>

                <div className={styles.searchBlock}>
                    {sneakers.length > 0 && (
                        <>
                            <img src={searchLogo} alt="search" />
                            <input onChange={(event) => handleInputChange(event)} value={searchValue} type="text" placeholder='Search...' />
                        </>
                    )}
                </div>
            </div>
            <div className={styles.cards}>
                {loadingStatus === "loading" ? skeletons : sneakers}
            </div>
        </div>
    )
}

export default ShoesList