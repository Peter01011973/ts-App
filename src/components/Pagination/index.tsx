import React from 'react';
import './pagination.css'

interface Props {
    pageSizeArray: number[],
    currentPageChangeHandler: Function,
    pageSizeChangeHandler: Function,
    currentPage: number,
    defaultPageSize: number,
    dataLenght: number,
    pageSize: number,
    startIndex: number,
    endIndex: number
}

const Pagination: React.FC<Props> = ({ currentPageChangeHandler, currentPage, pageSizeArray, pageSizeChangeHandler, defaultPageSize, dataLenght, pageSize, startIndex, endIndex }) => {

    return (
        <div className = 'paginator'>
            <label>rows per page: </label>
            <select className='paginator__select' onChange ={(e) => pageSizeChangeHandler(+e.target.value)} defaultValue={defaultPageSize}>
                {pageSizeArray.map((item, index) => 
                    <option key={index} >{item}</option>)
                }
            </select>
            <p>{startIndex}-{endIndex} from {dataLenght}</p>
            <div className = 'paginator__items'>
                <button 
                    className={'paginator__items__item'} 
                    onClick={() => currentPageChangeHandler(1)}
                    disabled = {startIndex-pageSize<0}
                ><i className='material-icons'>first_page</i></button>
                <button 
                    className={'paginator__items__item'} 
                    onClick={() => currentPageChangeHandler(currentPage-1)}
                    disabled = {startIndex-pageSize<0}
                ><i className='material-icons'>chevron_left</i></button>
                <button 
                    className={'paginator__items__item'} 
                    onClick={() =>{ return currentPageChangeHandler(currentPage+1)} }
                    disabled = {(startIndex + pageSize)>dataLenght}
                ><i className='material-icons'>chevron_right</i></button>
                <button 
                    className={'paginator__items__item'} 
                    onClick={() => currentPageChangeHandler(Math.ceil(dataLenght / pageSize))}
                    disabled ={(startIndex + pageSize)>dataLenght}
                ><i className='material-icons'>last_page</i></button>
            </div>
        </div>
    )
}

export default Pagination
