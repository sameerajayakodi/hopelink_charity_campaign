import React from 'react';

const Stat = ({ amount, description }) => (
  <div className="stat">
    <div className="text-4xl font-bold mb-3">{amount}</div>
    <div className="description">{description}</div>
  </div>
);

const Banner = () => {
  return (
    <section className="banner">
      <Stat amount="$1000+" description="Donations every hour" />
      <Stat amount="20,000" description="Campaigns each month" />
      <Stat amount="10M+" description="Fundraised per year" />
    </section>
  );
};

export default Banner;
