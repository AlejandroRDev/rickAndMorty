import React from 'react';
import {useState} from 'react';
import './Pagination.scss';
const Pagination = ({pagination}) => {
    const [actualPage, setActualPage] = useState(1);


  return <div className="btn-container">
      <button className="btn-container__left" onClick={() =>{
          setActualPage(actualPage - 1); pagination(actualPage - 1)
      }} >Left </button>
      <span className="btn-container__counter">{actualPage}</span>
      <button className="btn-container__right" onClick={() => {
          setActualPage(actualPage + 1); pagination(actualPage + 1)
      }}>right </button>
  </div>;
};

export default Pagination;
