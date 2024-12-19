import React from 'react';
import listIcon1 from '../assets/images/listico1.png';
import listIcon2 from '../assets/images/listico2.png';
import listIcon3 from '../assets/images/listco3.png';
import frame2 from '../assets/images/Frame2.png';

const Feature = ({ imgSrc, title, description }) => (
  <div className="feature-item">
    <div className="icon">
      <img src={imgSrc} alt={title} />
    </div>
    <div className="text">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Features = () => {
  return (
    <section>
      <h2 className="title2">Start your campaign today</h2>
      <p className="dec">Hopelink has a variety of features that make it the best place to start a fundraiser campaign.</p>
      <div className="campaign-features">
        <div className="campaign-content">
          <div className="feature-list">
            <Feature
              imgSrc={listIcon1}
              title="Manage your campaigns"
              description="Create your campaign quickly with a compelling story and clear fundraising goals."
            />
            <Feature
              imgSrc={listIcon2}
              title="Get detailed reports and insights"
              description="Monitor donation trends, top contributors and optimize your campaign's success."
            />
            <Feature
              imgSrc={listIcon3}
              title="Withdraw funds"
              description="The funds raised can be withdrawn directly to your bank account without any hassle."
            />
          </div>
        </div>
        <div className="campaign-illustration">
          <img src={frame2} alt="Campaign Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Features;
