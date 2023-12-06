import './Pagination.css';
import PaginationItemsDropDown from './PaginationItemsDropDown';
import leftArrowImg from './images/chevron-left.svg';
import leftArrowActiveImg from './images/chevron-left-active.svg';
import rightArrowImg from './images/chevron-right.svg';
import rightArrowActiveImg from './images/chevron-right-active.svg';
import { useState, useEffect } from 'react';

function Pagination({ totalPages, onPageChange }) {
    const [leftArrowActive, setLeftArrowActive] = useState(false);
    const [rightArrowActive, setRightArrowActive] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } 
    };

    const gotToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    useEffect(() => {
        onPageChange(currentPage); 
        console.log(`yes yes yes yes ${currentPage}`);
        if (currentPage == 1) setLeftArrowActive(false);
        else setLeftArrowActive(true);
        if (currentPage == totalPages) {
            console.log("no no");
            setRightArrowActive(false);
        }
        else setRightArrowActive(true);
    }, [ currentPage ]);

    return (
        <div className='pagination-container-div'>
            <div className='pagination-container'>
                <PaginationItemsDropDown />
                <div className='pagination-right-div'>
                    <button className='left-nav-arrow-btn' onClick={goToPreviousPage} disabled={currentPage == 1}>
                        <img src={leftArrowActive ? leftArrowActiveImg : leftArrowImg} alt='left-arrow-img'/>
                    </button>  
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => {setCurrentPage(index + 1)}}
                            className={currentPage == index + 1 ? 'active-page-btn' : 'page-btn'}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button className='right-nav-arrow-btn' onClick={gotToNextPage} disabled={currentPage == totalPages}>
                        <img src={rightArrowActive ? rightArrowActiveImg : rightArrowImg} alt="right-arrow-img" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pagination;
