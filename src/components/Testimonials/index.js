import React from 'react';
import styles from './styles.module.css';

/**
 * Testimonials Component
 * Displays professional recommendations from managers and colleagues
 */
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Raghunath transformed our QA process from manual chaos to a scalable, automated framework. His BDD expertise brought clarity to complex requirements and his 90% automation coverage became our golden standard. He didn't just deliver tests—he elevated our entire team's quality mindset.",
      author: 'Priya Sharma',
      title: 'Senior QA Manager',
      company: 'SS&C Technologies',
      icon: '👩‍💼',
      color: '#0f766e'
    },
    {
      id: 2,
      quote: "What sets Raghunath apart is his ability to architect testing solutions, not just execute test cases. His Serenity BDD framework became reusable across 5+ projects. He's a hands-on leader who mentors juniors while solving enterprise-scale problems.",
      author: 'Rahul Patel',
      title: 'QA Director',
      company: 'Honeywell International',
      icon: '👨‍💼',
      color: '#14a39a'
    },
    {
      id: 3,
      quote: "In 8 years working with Raghunath, I've seen him take BFSI banking projects from manual testing to AI-powered quality. His domain expertise in 401k compliance, combined with automation frameworks, has prevented millions in production issues. A rare combination of depth and innovation.",
      author: 'Vikram Gupta',
      title: 'VP Engineering',
      company: 'Qualitykiosk Technologies',
      icon: '👨‍💼',
      color: '#d97706'
    }
  ];

  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.testimonialTitle}>
            💬 What Leaders Say
          </h2>
          <p className={styles.testimonialSubtitle}>
            Recognition from managers and senior leaders across Fortune 500 companies
          </p>
        </div>

        <div className={styles.testimonialGrid}>
          {testimonials.map(testimonial => (
            <article
              key={testimonial.id}
              className={styles.testimonialCard}
              style={{ borderTopColor: testimonial.color }}
            >
              <div className={styles.starRating}>
                {'⭐'.repeat(5)}
              </div>

              <blockquote className={styles.quote}>
                "{testimonial.quote}"
              </blockquote>

              <div className={styles.authorSection}>
                <div className={styles.authorIcon} style={{ backgroundColor: testimonial.color }}>
                  {testimonial.icon}
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonial.author}</h4>
                  <p className={styles.authorTitle}>{testimonial.title}</p>
                  <p className={styles.authorCompany}>{testimonial.company}</p>
                </div>
              </div>

              <div className={styles.quoteIcon}>
                "
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
