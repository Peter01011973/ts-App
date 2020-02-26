import React, { useState } from 'react';
import './About.css';
import Pagination from '../../components/Pagination';

interface Props {
    
}

const About: React.FC<Props> = () => {
    const defaultPageSize = 10
    const [currentPage, setCurrentPage] = useState(3)
    let startIndex: number = 1;
    let endIndex: number =1;
    const [pageSize, setPageSize] = useState(defaultPageSize)
    const rows: number[] = [...Array(100)].map((i, index) => index+1);
    const totalItems = rows.length;



    const getPage = (currentPage: number, totalItems: number, pageSize: number) => {
        // calculate total pages
        // let totalPages = Math.ceil(totalItems / pageSize);
        startIndex = (currentPage - 1) * pageSize;
        endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    }

    const currentPageChangeHandler = (page: number) =>  {
        setCurrentPage(page);
        // getPage(currentPage, totalItems, pageSize);
    }
    const pageSizeChangeHandler = (rowsPerPage: number) => {
        setPageSize(rowsPerPage);
        setCurrentPage(1);
        // getPage(1, totalItems, rowsPerPage);
    }
    

    getPage(currentPage, totalItems, pageSize);

    return (
        <div className='about'>           
            <Pagination 
                dataLenght = {totalItems} 
                currentPageChangeHandler = {currentPageChangeHandler} 
                currentPage={currentPage} 
                pageSizeArray={[3,5,10]}
                pageSizeChangeHandler = {pageSizeChangeHandler}
                defaultPageSize = {defaultPageSize}
                pageSize = {pageSize}
                startIndex = {startIndex+1}
                endIndex = {endIndex+1}
            />
        </div>
    )
}

export default About
