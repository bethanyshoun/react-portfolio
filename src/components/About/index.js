import React from 'react';
import headshotImage from "../../assets/main/BASphoto.jpg";

const About = () => {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={headshotImage} className="my-2" style={{ width: "100%" }} alt="photo of Bethany" />
        </section>
    );

}

export default About;