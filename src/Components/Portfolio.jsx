import React from 'react';

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from '../images/design-desk.jpeg';

const imageAltText = 'desktop with books and laptop';

const projectList = [
  {
    title: 'Workout Tracker (Node, Express, Postgres)',
    description:
      'A workout tracking app that allows a user to track their workouts over time and save workouts into a database to be viewed later. There is additional functionality to search for example workouts based on muscle that provide instructions to follow',
    url: 'https://github.com/tylersb/workout-tracker',
    live: 'https://t-workout-tracker.herokuapp.com/'
  },
  {
    title: 'Workout Tracker Refactored into a SPA (MERN)',
    description:
      'A refactor of my previous workout tracker app in React to take advantage of the flexibility it offers and to practice approaching a previous project with a react mindset.',
    url: 'https://github.com/tylersb/react-workout-tracker',
    backend: 'https://github.com/tylersb/react-workout-tracker-server'
  },
  {
    title: 'Food Delivery App (MERN)',
    description:
      'A food delivery app that allows a user to pick from a variety of restaurants and order food to be delivered to their home. The app also allows a user to create an account, view past orders, as well as register new restaurants to be included in the app.',
    url: 'https://github.com/tylersb/project-3-client',
    backend: 'https://github.com/tylersb/project-3-server'
  }
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '3rem' }}>
        <div style={{ maxWidth: '40%', alignSelf: 'center' }}>
          <img
            src={image}
            style={{ height: '90%', width: '100%', objectFit: 'cover', animation: "1s ease-out 0s 1 slideInLeft" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: '40px' }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
              {project.backend && (
                <a href={project.backend} target="_blank" rel="noopener noreferrer">
                  <h5 className="small">REST API Server</h5>
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <h5 className="small">Live Site</h5>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
