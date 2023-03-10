import React from 'react';

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from '../images/mosaic.svg';

const imageAltText = 'purple and blue abstract background';

const description =
  'I am a highly driven Full-Stack Software Engineer with a passion for learning and solving complex problems. My expertise in debugging, attention to detail, and flexible thought process allows me to swiftly ramp up on new technologies and find creative solutions to meet project goals. My background in psychology and experience in recruiting has honed my interpersonal skills, allowing me to effectively collaborate with teams and stakeholders at all levels.';

const skillsList = [
  'JavaScript/HMTL/CSS',
  'Expressjs',
  'Node.js',
  'React',
  'PostgreSQL',
  'MongoDB',
  'Bootstrap',
  'Material UI',
  'Git',
  'GitHub',
  'Heroku',
  'Netlify',
  'Docker',
  'Docker Compose',
  'Ansible',
  'Linux',
  'Virtualization',
  'Home Networking',
  'Self Hosted Services',
  'Data Visualization',
  'Data Analysis',
  'Containerization'
];

const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: 'white',
          width: '50%',
          padding: '4rem',
          margin: '3rem auto',
          textAlign: 'center'
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: 'left',
            columns: 3,
            fontSize: '1.25rem',
            margin: '2rem 3rem',
            gap: '3rem'
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        {/* <p style={{ padding: '1rem 3rem 0' }}>{detailOrQuote}</p> */}
      </div>
    </section>
  );
};

export default About;
