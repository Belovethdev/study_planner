import React, { useState } from 'react';
import AddCourse from './components/AddCourse';
import CourseList from './components/CourseList';
import FilterButtons from './components/FilterButtons';
import './App.css';

function App() {
  const [courses, setCourses] = useState([
    { id: 1, name: 'HTML & CSS Fundamentals', totalLessons: 12, completedLessons: 8 },
    { id: 2, name: 'JavaScript Basics', totalLessons: 15, completedLessons: 5 },
    { id: 3, name: 'React Development', totalLessons: 20, completedLessons: 3 },
    { id: 4, name: 'Advanced CSS & Sass', totalLessons: 10, completedLessons: 10 },
  ]);
  
  const [filter, setFilter] = useState('all');

  const addCourse = (newCourse) => {
    setCourses([...courses, newCourse]);
  };

  const markLessonComplete = (courseId) => {
    setCourses(courses.map(course =>
      course.id === courseId && course.completedLessons < course.totalLessons
        ? { ...course, completedLessons: course.completedLessons + 1 }
        : course
    ));
  };

  const deleteCourse = (courseId) => {
    setCourses(courses.filter(course => course.id !== courseId));
  };

  const filteredCourses = courses.filter(course => {
    if (filter === 'completed') {
      return course.completedLessons === course.totalLessons;
    }
    if (filter === 'in-progress') {
      return course.completedLessons < course.totalLessons;
    }
    return true;
  });

  return (
    <div className="App">
      <header className="app-header">
        <h1>Frontend Developer Study Planner</h1>
        <p>Track your learning progress and master frontend technologies</p>
      </header>
      
      <AddCourse onAddCourse={addCourse} />
      
      <FilterButtons 
        filter={filter} 
        onFilterChange={setFilter} 
        courseCount={filteredCourses.length}
      />
      
      <CourseList 
        courses={filteredCourses} 
        onMarkComplete={markLessonComplete}
        onDeleteCourse={deleteCourse}
      />
    </div>
  );
}

export default App;