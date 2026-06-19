import React from 'react'
import aboutImg from "../img/about.png";


const About = () => {
  return (
    <>
   
        <section class="about container" id="about">
        <div class="about-img">
            {/* <img src="./src/img/about.png" alt=""/> */}
            <img src={aboutImg} alt="About Us" />
        </div>
        <div class="about-text">
            <span>About Us</span>
            <h2>Cheap Prices with <br/>Quality Cars</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugit nemo quae distinctio, mollitia aliquam!</p>

            <a href="" class="btn">Learn More</a>
        </div>
    </section>

    </>
  )
}

export default About