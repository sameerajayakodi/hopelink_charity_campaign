import React from 'react';
import Launch from '../assets/images/ico4.png';
import Viral from '../assets/images/ico5.png';
import Victory from '../assets/images/ico6.png';

const GetStarted = () => {
  return (
    <section className="get-title">
      <h2 className="title2">Get started in a few minutes</h2>
      <p className="dec">Hopelink supports a variety of the most popular categories.</p>
      <div className="get-started">
      <div className="steps">
          <Step imgSrc={Launch} title="Launch" description="People and organizations can launch a campaign for free." />
          <Step imgSrc={Viral} title="Viral" description="Sharing with friends family and supporters builds momentum." />
          <Step imgSrc={Victory} title="Victory" description="Track your progress and celebrate your fundraising success." />
        </div>
      </div>
    </section>
  );
};

const Step = ({ imgSrc, title, description }) => (
  <div className="step">
    <img src={imgSrc} alt={title} className="step-icon" />
    <div className="step-title">{title}</div>
    <div className="step-description">{description}</div>
  </div>
);

export default GetStarted;
