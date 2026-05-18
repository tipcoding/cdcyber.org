import React from 'react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import './Courses.css';

const Courses = () => {
  return (
    <section id="courses" className="section-padding">
      <div className="container">
        <h2 className="section-title">Elite <span className="text-gradient-green">Training Paths</span></h2>
        <p className="section-subtitle">
          Whether you're starting your journey or aiming for top-tier certifications, our specialized tracks provide the hands-on experience you need.
        </p>

        <div className="courses-grid">
          {coursesData.map((course, index) => (
            <div 
              key={course.id} 
              className="glass-panel course-card animate-fade-in" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="course-icon" style={{ textShadow: `0 0 15px ${course.color}` }}>
                {course.icon}
              </div>
              <div className="course-meta">
                <span className="badge" style={{ borderColor: course.color, color: course.color }}>{course.level}</span>
                <span className="duration">{course.duration}</span>
              </div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <Link to={`/course/${course.id}`} className="course-link" style={{ color: course.color }}>
                View Syllabus <span className="arrow">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
