import React from 'react';
import './CourseItem.css';

const CourseItem = ({ course, onMarkComplete, onDeleteCourse }) => {
  const progress = course.totalLessons > 0 
    ? Math.round((course.completedLessons / course.totalLessons) * 100)
    : 0;

  const isCompleted = course.completedLessons === course.totalLessons;

  return (
    <div className={`course-item ${isCompleted ? 'completed' : ''}`}>
      <div className="course-header">
        <h3 className="course-title">{course.name}</h3>
        <button 
          className="delete-btn"
          onClick={() => onDeleteCourse(course.id)}
          title="Delete course"
        >
          ×
        </button>
      </div>
      
      <div className="progress-section">
        <div className="progress-stats">
          <span className="progress-text">
            {course.completedLessons}/{course.totalLessons} lessons completed
          </span>
          <span className="progress-percent">{progress}%</span>
        </div>
        
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <div className="course-actions">
        {!isCompleted ? (
          <button 
            className="complete-btn"
            onClick={() => onMarkComplete(course.id)}
            disabled={isCompleted}
          >
            <span>🎯 Complete Lesson</span>
            <span className="btn-subtext">Mark one lesson as completed</span>
          </button>
        ) : (
          <div className="completion-badge">
            <span className="badge-icon">🎉</span>
            <span className="badge-text">Course Completed!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseItem;