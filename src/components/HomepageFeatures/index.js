import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * Professional Skills Data
 * Each skill includes title, SVG icon, and description
 */
const FeatureList = [
  {
    id: 'creativity',
    title: 'Creativity',
    Svg: require('../../../static/img/undraw_creativity.svg').default,
    description: (
      <>
        Creativity skills help me think out of the box and present unique solutions for challenges faced at workplace.
        Some of the creativity skills I possess include making connections, asking questions, making observations, networking, and experimenting.
      </>
    ),
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving Ability',
    Svg: require('../../../static/img/undraw_problem_solving.svg').default,
    description: (
      <>
        My &apos;never say no&apos; attitude and tenacious determination ensures that I don&apos;t give up easily until I solve any given problem.
      </>
    ),
  },
  {
    id: 'team-player',
    title: 'Team Player',
    Svg: require('../../../static/img/undraw_team_player.svg').default,
    description: (
      <>
        Along with being an individual contributor, I am also adept at collaboration and my strong interpersonal communication helps me be an excellent team player.
      </>
    ),
  },
  {
    id: 'decision-making',
    title: 'Decision Making',
    Svg: require('@site/static/img/undraw_decision.svg').default,
    description: (
      <>
        Makes decisions with confidence, demonstrate ability to effectively influence key decision makers and display firmness in making decisions.
      </>
    ),
  },
  {
    id: 'leadership',
    title: 'Leadership',
    Svg: require('@site/static/img/undraw_leadeship.svg').default,
    description: (
      <>
        Project self-confidence, authority and enthusiasm. Demonstrate natural leadership ability and display leadership stature with strong, dynamic leadership.
      </>
    ),
  },
];

/**
 * Feature Card Component
 * Displays individual skill with accessible markup
 */
function Feature({ id, Svg, title, description }) {
  return (
    <article
      className={clsx('col col--4', styles.feature)}
      aria-labelledby={`feature-title-${id}`}
    >
      <div className={styles.featureIconContainer}>
        <Svg
          className={styles.featureSvg}
          role="img"
          aria-label={`${title} icon`}
        />
      </div>

      <div className={styles.featureContent}>
        <h3
          id={`feature-title-${id}`}
          className={styles.featureTitle}
        >
          {title}
        </h3>

        <p className={styles.featureDescription}>{description}</p>
      </div>
    </article>
  );
}

/**
 * HomepageFeatures Component
 * Displays professional skills in a grid layout
 */
export default function HomepageFeatures() {
  return (
    <section
      className={styles.features}
      aria-label="Professional skills and attributes"
    >
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Personal Skills</h2>
          <p className={styles.sectionSubtitle}>
            Key competencies that define my professional approach
          </p>
        </div>

        <div className={clsx('row', styles.featureGrid)} role="list">
          {FeatureList.map((props) => (
            <div key={props.id} role="listitem">
              <Feature {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
