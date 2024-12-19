import React from 'react';
import complianceIcon from '../assets/images/ico1.png';
import supportIcon from '../assets/images/ico2.png';
import securityIcon from '../assets/images/ico3.png';

const Card = ({ imgSrc, title, text }) => (
  <div className="card">
    <img src={imgSrc} alt={title} className="card-icon" />
    <div className="card-title">{title}</div>
    <div className="card-text">{text}</div>
  </div>
);

const CardContainer = () => {
  return (
    <section className="CardContainer">
      <div>
        <h2 className="title2">The most trusted donation platform</h2>
        <p className="dec">Here are a few reasons why you should choose Hopelink</p>
      </div>
      <div className="card-container">
        <Card
          imgSrc={complianceIcon}
          title="Compliance with legal standards"
          text="Our platform complies with all financial and charitable regulations ensuring legal and trustworthy campaigns."
        />
        <Card
          imgSrc={supportIcon}
          title="Dedicated support team"
          text="We offer 24/7 customer support to assist with any questions or concerns for both campaign creators and donors."
        />
        <Card
          imgSrc={securityIcon}
          title="Secure and encrypted tracking"
          text="We ensure secure encrypted payments and transparent tracking so every donation reaches its intended cause."
        />
      </div>
    </section>
  );
};

export default CardContainer;
