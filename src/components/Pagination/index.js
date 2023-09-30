import React from 'react';
import './style.scss';
const Pagination = (props) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <ul className='pagination'>
        <li>Previous</li>
        {pages.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <li>Next</li>
      </ul>
    </div>
  );
};

export default Pagination;
