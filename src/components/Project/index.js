import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faWordpress } from '@fortawesome/free-brands-svg-icons';
import covid from "../../images/covid-proj.PNG";
import weatherD from "../../images/weather-dashboard.PNG";
import workDay from "../../images/workday-scheduler.PNG";
import Mrksich from "../../images/mrksichgrp.PNG";
import teamTiles from "../../images/team-tiles.PNG";
import codeQuiz from "../../images/code-quiz.PNG";
import travelnstyle from "../../images/travelnstyle.PNG";
import eatDaBurger from "../../images/app-img.PNG";
import pwGen from "../../images/pw-generator.PNG";
import { tooltipper } from '../pages/Portfolio';





export default function () {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    grabProjs()
  }, [])

  const grabProjs = () => { 
    setProjects(projArr)
  }

  const projArr = [
    {
      name: "Coronavirus Stats",
      deployHREF: "https://kurt-austin.github.io/corona-Stats/",
      githubHREF: "https://github.com/kurt-austin/corona-Stats",
      image: covid,
      toggleTitle: "An app to find the most recent COVID-19 related data and news in their searched area",
      gh: true
    },
    {
      name: "Weather Dashboard",
      deployHREF: "https://kairora.github.io/weather-dashboard/",
      githubHREF: "https://github.com/kairora/weather-dashboard",
      image: weatherD,
      toggleTitle: "A weather dashboard to find and display the current and forecasted weather data for the city searched",
      gh: true
    },
    {
      name: "Work Day Scheduler",
      deployHREF: "https://kairora.github.io/Work-Day-Scheduler-Hw5/",
      githubHREF: "https://github.com/kairora/Work-Day-Scheduler-Hw5",
      image: workDay,
      toggleTitle: "This app enables a user to keep track of their tasks with a dynamic scheduler interface",
      gh: true
    },
    {
      name: "Mrksich Group Site",
      deployHREF: "https://www.mrksichgroup.northwestern.edu/",
      githubHREF: "#",
      image: Mrksich,
      toggleTitle: "A website representative of Northwestern University’s Vice President of Research, Milan Mrksich’s VPR role, laboratory facilities and equipment, research projects, and lab members/administrative staff",
      gh: false
    },
    {
      name: "Team Tiles",
      deployHREF: "https://www.youtube.com/watch?v=kL38AeKz7dU",
      githubHREF: "https://github.com/kairora/team-tiles",
      image: teamTiles,
      toggleTitle: "A CLI app that prompts the user to answer a series of questions about the employees in their team and then places the user's response into styled tiles for easy viewing and reference",
      gh: true
    },
    {
      name: "Javascript Code Quiz",
      deployHREF: "https://kairora.github.io/javascript-code-quiz/",
      githubHREF: "https://github.com/kairora/javascript-code-quiz/tree/master/Assets",
      image: codeQuiz,
      toggleTitle: "A simple JavaScript related quiz! Be careful! Wrong answers lose time",
      gh: true
    },
    {
      name: "Travel-N-Style",
      deployHREF: "https://evening-oasis-14753.herokuapp.com/",
      githubHREF: "https://github.com/kairora/travel-n-style",
      image: travelnstyle,
      toggleTitle: "Picks your clothing based on the weather of your searched city! Uses JQuery, JavaScript, Bootstrap, CSS, AJAX, Axios, Dotenv, Bcryptjs, Express, Express-handlebars, Express-session, Mysql2, Passport, Passport-local, Dayjs and Sequelize",
      gh: true
    },
    {
      name: "Eat-Da-Burger",
      deployHREF: "https://lit-meadow-28026.herokuapp.com/",
      githubHREF: "https://github.com/kairora/burger",
      image: eatDaBurger,
      toggleTitle: "Uses mysql and express to add burgers to a menu and display when they've been served",
      gh: true
    },
    {
      name: "Password Generator",
      deployHREF: "https://kairora.github.io/Hw_3_Password-Generator/",
      githubHREF: "https://github.com/kairora/Hw_3_Password-Generator",
      image: pwGen,
      toggleTitle: "Uses a series of conditions from a user to generate a randomized password",
      gh: true
    },
  ]
  return(
    <>
      <div className="card-body">
        <h2 className="card-title text-info border-bottom p-4">Portfolio <a target="blank" rel="noopener" className="githubIcon colortip" data-toggle="tooltip" data-placement="bottom" title="Brianna's GitHub" href="https://github.com/kairora">
        <FontAwesomeIcon icon={faGithub} /> 
        </a></h2>
        <div className="row">
          {projects
            .map(project => 
              <div className="col-md-4 text-center align-center">
                <div className="row projectrow">
                  <div className="col-md-12 parent" position="relative">
                    <div className="child bg-info text-white" position="absolute">
                      <p>
                        <a target="blank" rel="noopener" href={project.deployHREF}>{project.name}</a> | 
                        <a target="blank" rel="noopener" href={project.githubHREF}>
                          {project.gh ? <FontAwesomeIcon icon={faGithub} /> : <FontAwesomeIcon icon={faWordpress}/>} 
                        </a>
                      </p>
                    </div>
                    <a target="blank" rel="noopener" href={project.deployHREF}>
                      <img src={project.image} alt={project.name} width="200" className="colortip" data-toggle="tooltip" data-placement="left" title={project.toggleTitle} style={tooltipper} />
                    </a>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>

    </>
  )
  
}
