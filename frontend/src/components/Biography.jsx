import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h3>Who We Are</h3>
          <p>
          HealthCare Medical Institute is a beacon of excellence
in the healthcare sector, founded on principles of 
compassion and innovation. With cutting-edge facilities
and a dedicated team of professionals, HealthCare is
committed to delivering personalized care that surpasses
expectations. Each patient's journey is meticulously crafted,
focusing on their unique needs and aspirations for 
health and wellness. HealthCare's unwavering dedication
to holistic well-being ensures that every individual 
receives the highest standard of medical attention,
fostering a community where health flourishes.
Through a harmonious blend of expertise and empathy,
HealthCare Medical Institute stands as a testament to
the transformative power of comprehensive healthcare.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
