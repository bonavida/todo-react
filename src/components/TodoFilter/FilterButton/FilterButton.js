import React from 'react';

import './FilterButton.scss';

const FilterButton = ({ onClick, active, children }) => {
  const filterButtonClassName = active ? 'btn-primary' : 'btn-light';
  return (
    <button type="button" className={`filter__button btn ${filterButtonClassName}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default FilterButton;