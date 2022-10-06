import React from 'react';
import headshot from "../../assets/main/BASphoto.jpg";

const About = () => {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={headshot} className="my-2" style={{ width: "75%" }} alt="Bethany Shoun"/>
        </section>
    );

}

export default About;