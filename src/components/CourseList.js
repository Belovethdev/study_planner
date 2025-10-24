import React from 'react';
import CourseItem from './CourseItem';
import './CourseList.css';

const CourseList = ({ courses, onMarkComplete, onDeleteCourse }) => {
  if (courses.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📚</div>
        <h3>No courses found</h3>
        <p>Add a new course to start tracking your learning progress!</p>
      </div>
    );
  }

  return (
    <div className="course-list">
      {courses.map(course => (
        <CourseItem 
          key={course.id} 
          course={course} 
          onMarkComplete={onMarkComplete}
          onDeleteCourse={onDeleteCourse}
        />
      ))}
    </div>
  );
};

export default CourseList;