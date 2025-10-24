import React, { useState } from 'react';
import './AddCourse.css';

const AddCourse = ({ onAddCourse }) => {
  const [courseName, setCourseName] = useState('');
  const [totalLessons, setTotalLessons] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const lessons = parseInt(totalLessons);
    
    if (courseName.trim() && lessons > 0) {
      onAddCourse({
        id: Date.now(),
        name: courseName.trim(),
        totalLessons: lessons,
        completedLessons: 0,
        createdAt: new Date().toISOString()
      });
      
      setCourseName('');
      setTotalLessons('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-course-form">
      <div className="form-header">
        <h2>Add New Course</h2>
        <p>Start tracking your progress on a new frontend technology</p>
      </div>
      
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter course name (e.g., 'Vue.js Mastery', 'TypeScript Basics')"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="course-input"
          required
        />
        
        <input
          type="number"
          placeholder="Total lessons"
          value={totalLessons}
          onChange={(e) => setTotalLessons(e.target.value)}
          min="1"
          max="100"
          className="lessons-input"
          required
        />
        
        <button type="submit" className="add-button">
          <span>+ Add Course</span>
        </button>
      </div>
    </form>
  );
};

export default AddCourse;