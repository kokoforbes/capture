import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import money from "../img/money.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className='services'>
      <div className='description'>
        <h2>
          High <span>quality</span>services
        </h2>

        <div className='cards'>
          {/* EFFICIENT */}
          <div className='card'>
            <div className='icon'>
              <img alt='clock' src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          {/* TEAMWORK */}
          <div className='card'>
            <div className='icon'>
              <img src={teamwork} alt='teamwork' />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          {/* DIAPHRAGM */}
          <div className='card'>
            <div className='icon'>
              <img src={diaphragm} alt='diaphragm' />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          {/* AFFORDABLE */}
          <div className='card'>
            <div className='icon'>
              <img src={money} alt='money' />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>

      <div className='image'>
        <img src={home2} alt='camera' />
      </div>
    </div>
  );
};

export default ServicesSection;
