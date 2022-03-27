import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Creativity',
    Svg: require('../../../static/img/undraw_creativity.svg').default,
    description: (
      <>
        Creativity skills help me think out of the box and present unique solutions for challenges faced at workplace.
        Some of the creativity skills I possess include making connections,
        asking questions, making observations, networking, experimenting.
      </>
    ),
  },
  {
    title: 'Problem Solving Ability',
    Svg: require('../../../static/img/undraw_problem_solving.svg').default,
    description: (
      <>
      My 'never say no' attitude and tenacious determination ensures that I don't give up easily until and unless I solve any given problem.
      </>
    ),
  },
  {
    title: 'Team Player',
    Svg: require('../../../static/img/undraw_team_player.svg').default,
    description: (
      <>
      Along with being an individual contributor , I am also adept at collaboration and my strong interpersonal communication helps me be an excellent team player.
      </>
    ),
  },
  {
    title: 'Decision  Making',
    Svg: require('@site/static/img/undraw_decision.svg').default,
    description: (
      <>
        Makes decisions with confidence,Demonstrate and ability to effectively influence key
decision makers,Display firmness in making decision
      </>
    ),
  },
  {
    title: 'Leadership',
    Svg: require('@site/static/img/undraw_leadeship.svg').default,
    description: (
      <>
        Project self-confidence, authority and enthusiasm,Demonstrate natural leadership ability,Display leadership stature
,Demonstrates strong, dynamic leadership

      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
      <div className="text-center" >
                <Link
                  className="button button--secondary button--lg"
                  disabled >
                  Personal Skills
                </Link>
              </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
