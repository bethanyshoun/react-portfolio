import React from 'react';
import headshot from "../../assets/main/BASphoto.jpg";

function About () {
    return (
        <section className="my-5">
            <h1 id="about">Bethany Shoun</h1>
            <img src={headshot} className="my-2" style={{ width: "75%" }} alt="Bethany Shoun"/>
            <p className="">
                I am a full stack developer interested in design, technical writing, and developing high-quality education for all fields. 
            </p>
        </section>
    );

}

export default About;