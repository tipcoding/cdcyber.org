import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import './Course.css';

const Course = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const found = coursesData.find(c => c.id === courseId);
    setCourse(found);
  }, [courseId]);

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Loading module...</h2>
      </div>
    );
  }

  return (
    <main className="course-page">
      <div 
        className="course-hero" 
        style={{ background: `linear-gradient(180deg, ${course.heroBg} 0%, var(--bg-dark) 100%)` }}
      >
        <div className="container">
          <Link to="/#courses" className="back-link">
            <span className="arrow">←</span> Back to Courses
          </Link>
          <div className="course-header animate-fade-in">
            <div className="course-icon-large" style={{ color: course.color, textShadow: `0 0 30px ${course.color}` }}>
              {course.icon}
            </div>
            <h1 className="course-main-title">{course.title}</h1>
            <div className="course-badges">
              <span className="badge" style={{ borderColor: course.color, color: course.color }}>{course.level}</span>
              <span className="badge duration">{course.duration}</span>
            </div>
            <p className="course-hero-desc">{course.description}</p>
          </div>
        </div>
      </div>

      <section className="syllabus-section container">
        <div className="syllabus-grid">
          
          <div className="syllabus-content animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2rem' }}>
              Course <span style={{ color: course.color }}>Syllabus</span>
            </h2>
            <div className="timeline">
              {course.syllabus.map((module, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot" style={{ background: course.color, boxShadow: `0 0 10px ${course.color}` }}></div>
                  <div className="timeline-content glass-panel">
                    <span className="timeline-week" style={{ color: course.color }}>{module.week}</span>
                    <h3 className="timeline-title">{module.title}</h3>
                    <ul className="timeline-topics">
                      {module.topics.map((topic, i) => (
                        <li key={i}>
                          <span className="topic-icon">›</span> {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="course-sidebar animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="glass-panel sidebar-widget">
              <h3>Prerequisites</h3>
              <ul className="prereq-list">
                {course.prerequisites.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
            
            <div className="glass-panel sidebar-widget cta-widget">
              <h3>Ready to dive in?</h3>
              <p>Secure your spot in the next cohort and start your cyber security journey.</p>
              <a 
                href="https://forms.gle/iw7MrUcLKakPAmjE7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber w-100" 
                style={{ 
                  '--accent-green': course.color, 
                  '--accent-green-glow': course.color,
                  display: 'flex',
                  textDecoration: 'none'
                }}
              >
                Enroll Now
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Course;
