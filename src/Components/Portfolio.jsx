/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/mansi pic.jpeg";

const imageAltText = "snippet from my profile image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Making a Portfolio website ",
    description:
      "I completed the portfolio website project in ignite company by using html, css and javascript.beautifully describe myself.also this website is very creative and informative about myself.",
    url: "https://www.linkedin.com/posts/mansi-shahapurkar-364b18246_ignite-internship-activity-7209510864926781442-g0vy?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Atm Interface",
    description:
      "I completed the Atm Interface project in codsoft internship by using java language.and It was successfully completed.in this project i dropped withdraw option,check balance option and many other options which are present in atm.",
    url: "https://github.com/mansishahapurkar/Atm-Interface",
  },
  {
    title: "Omnifood website",
    description:
      "I have created one website related to omnifood.which helps to provide nutricious food to ill peoples. also in this website we ban the heavy oily and junk food we advise those peoples who are eating these junk food to avoid the junk food.",
    url: "https://github.com/mansishahapurkar/omnifood",
  },
  {
    title: "code editor",
    description:
      "I made one tool name codespen which helps as a online compiler for coding purpose.",
    url: "https://github.com/mansishahapurkar/code-editor",
  },
];



const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" , animation: "1s ease-out 0s 1 slideInLeft"}}
            alt={imageAltText}
          
          />
          
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Portfolio;
