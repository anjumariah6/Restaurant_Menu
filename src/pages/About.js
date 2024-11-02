import React from "react";
import MultiplePizzas from "../assets/masala.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Indian Foods by Anju welcomes you to enjoy the authentic Indian cuisine available, with a mix of the finest 
        ingredients and experienced chefs preparing you fantastic dishes, you are guaranteed a great experience.
        Our chefs have over 25 years experience, and with such a passion for their occupation, they have become 
        part of the  family. Our chefs have perfected theri recipes, trained by their ancestors they have truly become unique 
        in what they do. We bring you the finest chefs from India to cater for you.
        </p>
      </div>
    </div>
  );
}

export default About;
