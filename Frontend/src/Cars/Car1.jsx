import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarAfter from '../Components/NavbarAfter';
import car1 from '../img/car1.jpg';

const Car1 = () => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate('/purchase');
  };

  return (
    <>
      <NavbarAfter />

      <section className="carssection container">
        <div className="carssection-img">
          <img src={car1} alt="Car" />
        </div>

        <div className="carssection-text">
          <div className="box">
            <h2>Porsche Car</h2>
            <span>Rs. 1.99 Crore</span>

            <i className="bx bxs-star">(6 Reviews)</i>

            <br />

            <a href="#" className="details">
              View Details
            </a>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <button onClick={handlePurchase} className="btn">
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Car1;