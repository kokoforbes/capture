import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Hide, Image } from "../styles";

function AboutSection() {
  return (
    <About>
      <Description>
        <div className='title'>
          <Hide>
            <h2>we work to make</h2>
          </Hide>

          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>

          <Hide>
            <h2>come true.</h2>
          </Hide>
        </div>

        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>

        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt='person with a camera' />
      </Image>
    </About>
  );
}

export default AboutSection;
