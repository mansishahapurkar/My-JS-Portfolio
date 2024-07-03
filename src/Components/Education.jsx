/**
 * Education component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */
import React from "react";
/**
 * Education list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const EducationList = [
    {
      Name: "Marathwada Mitra Mandal College of Engineering Pune ",
      Branch:
        "Electronics and Telecommunication Engineering-BE",
        Year: 2020-2024,
      
    },
    {
      Name: "Shirpathrao Bhosale Jr College Osmanabad",
      Branch:
        "HSC-PCM",
       Year: 2019-2020,
    },
    {
      Name: "Shirpathrao Bhosale Highschool Osmanabad",
      Branch:
        "SSC-Science",
        Year: 2018-2019,
    
    },
    
  ];
  
const Education = () => {
    return (
      <section className="padding" id="Education">
        <h2 style={{ textAlign: "center" }}>Portfolio</h2>
        <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
          <div style={{ maxWidth: "40%", alignSelf: "center" }}>
            
          </div>
          <div className="container">
            {EducationList.map((Education) => (
              <div className="box" key={Education.Name}>
                
                  <h3 style={{ flexBasis: "40px" }}>{Education.Name}</h3>
                
                <p className="small">{Education.Branch}</p>
                <p className="small">{Education.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  
  export default Education;
  