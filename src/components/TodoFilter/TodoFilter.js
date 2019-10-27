import React from 'react';

import { VisibilityFilters } from 'utils/constants';
import FilterButton from './FilterButton';

import './TodoFilter.scss';

const TodoFilter = ({ active, filterItems }) => {
  const onFilterItems = filter => filterItems(filter);

  const renderFilterButton = (filter, filterLabel) => {
    const activeFilter = active === filter;
    return (
      <FilterButton
        active={activeFilter}
        onClick={() => onFilterItems(filter)}
      >
        {filterLabel}
      </FilterButton>
    )
  }

  return (
    <div className="todo-filter__container">
      <div className="btn-group btn-group-sm" role="group" aria-label="Filter TodoList">
        {renderFilterButton(VisibilityFilters.SHOW_ALL, 'All')}
        {renderFilterButton(VisibilityFilters.SHOW_ACTIVE, 'Active')}
        {renderFilterButton(VisibilityFilters.SHOW_COMPLETED, 'Completed')}
      </div>
    </div>
  );
}

export default TodoFilter;