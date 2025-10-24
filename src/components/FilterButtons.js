import React from 'react';
import './FilterButtons.css';

const FilterButtons = ({ filter, onFilterChange, courseCount }) => {
  const filters = [
    { key: 'all', label: 'All Courses', icon: '📚' },
    { key: 'in-progress', label: 'In Progress', icon: '🚧' },
    { key: 'completed', label: 'Completed', icon: '✅' }
  ];

  return (
    <div className="filter-section">
      <div className="filter-header">
        <h3>Your Courses ({courseCount})</h3>
        <p>Filter by progress status</p>
      </div>
      
      <div className="filter-buttons">
        {filters.map(({ key, label, icon }) => (
          <button
            key={key}
            className={`filter-btn ${filter === key ? 'active' : ''}`}
            onClick={() => onFilterChange(key)}
          >
            <span className="filter-icon">{icon}</span>
            <span className="filter-label">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;