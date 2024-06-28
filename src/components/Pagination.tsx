import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcon from '@fortawesome/free-solid-svg-icons';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    paginate : (number : number) => void;
    userPerPage : number;
    setUsersPerPage : (number : (number | string)) => void;
    totalUsers : number;
}

const Pagination :React.FC<PaginationProps> = ({ totalPages, currentPage, totalUsers, paginate, setUsersPerPage }) => {
    
    const pageNumbers: JSX.Element[] = [];
    const maxPageNumbersToShow = 5;
    const totalPageNumbers = Math.min(totalPages, maxPageNumbersToShow);

    let startPage = Math.max(1, currentPage - Math.floor(totalPageNumbers / 2));
    let endPage = startPage + totalPageNumbers - 1;

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - totalPageNumbers + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
            <button
                key={i}
                className={`pageNum ${i === currentPage ? 'active' : ''}`}
                onClick={() => paginate(i)}
            >
                {i}
            </button>
        );
    }

    if (startPage > 1) {
        pageNumbers.unshift(
            <button key="1" className="pageNum" onClick={() => paginate(1)}>
                1
            </button>,
            <button key="start-dots" className="dot" disabled>
                ...
            </button>
        );
    }

    if (endPage < totalPages) {
        pageNumbers.push(
            <button key="end-dots" className="dot" disabled>
                ...
            </button>,
            <button key={totalPages} className="pageNum" onClick={() => paginate(totalPages)}>
                {totalPages}
            </button>
        );
    }


    return (
        <div className="paginationWrapper">
            <div className="content">
                <p>Showing</p>
                <select onChange={ e => setUsersPerPage(e.target.value) }>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <p>Out of { totalUsers }</p>
            </div>
            
            <div className="content">
                <FontAwesomeIcon 
                    icon={solidIcon.faAngleLeft} 
                    className={`icon prev ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => paginate(Math.max(currentPage - 1, 1))}
                />
                {pageNumbers}
            <FontAwesomeIcon 
                    icon={solidIcon.faAngleRight} 
                    className={`icon next ${currentPage === totalPages ? 'disabled' : ''}`}
                    onClick={() => paginate(Math.min(currentPage + 1, totalPages))}  
                />
            </div>
        </div>
    )
}

export default Pagination;