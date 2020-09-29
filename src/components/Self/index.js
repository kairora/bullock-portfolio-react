import React, { useState, useEffect } from "react";
import "../../styles/About.css";


export default function () {
  const [skills, setSkills] = useState([]);
  
  useEffect(() => {
    grabSkills()
  }, [])

  const grabSkills = () => { 
    setSkills(skillsArr)
  }

  const skillsArr = [
    {
      name: "CSS/HTML",
      link: "https://www.w3schools.com/",
      image: "../../assets/photos/css-html.png",
      alt: "HTML and CSS Logo by daPhyre"
    },
    {
      name: "JavaScript",
      link: "https://www.w3schools.com/js/default.asp",
      image: "../../assets/photos/javascript.png",
      alt: "JavaScript Logo by Nikotaf"
    },
    {
      name: "Express",
      link: "https://expressjs.com/",
      image: "../../assets/photos/expressjs.png",
      alt: "Express.js Logo"
    },
    {
      name: "Node.js",
      link: "https://nodejs.org/en/",
      image: "../../assets/photos/nodejs.png",
      alt: "Nodejs Logo"
    },
    {
      name: "MongoDB",
      link: "https://www.mongodb.com/",
      image: "../../assets/photos/mongdb.png",
      alt: "MongoDB Logo by MongoDB, Inc."
    },
    {
      name: "Bootstrap",
      link: "https://getbootstrap.com/",
      image: "../../assets/photos/bootstrap.png",
      alt: "Bootstrap Logo"
    },
    {
      name: "WordPress",
      link: "https://wordpress.org/",
      image: "../../assets/photos/wordpress.png",
      alt: "Wordpress Logo"
    },
    {
      name: "Divi",
      link: "https://www.elegantthemes.com/gallery/divi/",
      image: "../../assets/photos/divi.jpg",
      alt: "Divi Logo"
    },
    {
      name: "React",
      link: "https://reactjs.org/",
      image: "../../assets/photos/react.png",
      alt: "React Logo"
    }
  ]

  return (
    <>
      <div className="col-md-12">
        <img {require("../../../assets/photos/brianna-photo.jpg")} alt="Brianna's Professional Shot" id="briphoto"
          className="img-fluid float-left mr-2" />
        <p>Hello! I'm am an alumna of the prestigious University of Chicago where, with its
        diverse curriculum, I was afforded the opportunity to dive deep into a multitude
        of experiences with foreign language. My first foreign language studied,
        however, didn't have much to do with the way humans speak, but rather with the way
        computers communicate. At UChicago, I first majored in Computer Science and
        learned the basics of coding. From there, language became the driving force
        behind the rest of my academic career. I branched off from computer science to
        the study of East Asian languages, learning how the languages embed themselves
        within media and technology. </p>
        <p>This field of study led me to spend over 3 years living abroad in South Korea, complete an
        internship in China, and take many of trips into cities within Japan. Now, I endeavor
        to return focus to studying computer languages. Afterall, it is because of my
        love of computers that I came to develop a desire for understanding how culture
        influences the technology and media we see and use everyday. Now, I am
        reimmersing myself within the realm of computer languages and full stack
        development to find just that: how computer language and social structures
        define and inform the media we see - and to create some really cool projects
        along the way!</p>
        <h3>Skilled At:</h3>

        {skills
        .map(skill =>
          <div className="col-md-1 logcol">
            <a target="blank" rel="noopener" href={skill.link} className="leftlogo">
              <img src={skill.image} alt={skill.alt} key={skill.alt}
                className="logoimg" /> 
              <span>{skill.name}</span>
            </a>
          </div>
        )
      }
      </div>
    </>
  );
}

