import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWordpress } from '@fortawesome/free-brands-svg-icons'


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
      image: "../../assets/photos/covid-proj.PNG",
      toggleTitle: "An app to find the most recent COVID-19 related data and news in their searched area",
      gh: true
    },
    {
      name: "Weather Dashboard",
      deployHREF: "https://kairora.github.io/weather-dashboard/",
      githubHREF: "https://github.com/kairora/weather-dashboard",
      image: "../../assets/photos/weather-dashboard.PNG",
      toggleTitle: "A weather dashboard to find and display the current and forecasted weather data for the city searched",
      gh: true
    },
    {
      name: "Work Day Scheduler",
      deployHREF: "https://kairora.github.io/Work-Day-Scheduler-Hw5/",
      githubHREF: "https://github.com/kairora/Work-Day-Scheduler-Hw5",
      image: "../../assets/photos/workday-scheduler.PNG",
      toggleTitle: "This app enables a user to keep track of their tasks with a dynamic scheduler interface",
      gh: true
    },
    {
      name: "Mrksich Group Site",
      deployHREF: "https://www.mrksichgroup.northwestern.edu/",
      githubHREF: "",
      image: "../../assets/photos/mrksichgrp.PNG",
      toggleTitle: "A website representative of Northwestern University’s Vice President of Research, Milan Mrksich’s VPR role, laboratory facilities and equipment, research projects, and lab members/administrative staff",
      gh: false
    },
    {
      name: "Team Tiles",
      deployHREF: "https://www.youtube.com/watch?v=kL38AeKz7dU",
      githubHREF: "https://github.com/kairora/team-tiles",
      image: "../../assets/photos/team-tiles.PNG",
      toggleTitle: "A CLI app that prompts the user to answer a series of questions about the employees in their team and then places the user's response into styled tiles for easy viewing and reference",
      gh: true
    },
    {
      name: "Javascript Code Quiz",
      deployHREF: "https://kairora.github.io/code-quiz-hw-4/",
      githubHREF: "https://github.com/kairora/code-quiz-hw-4/tree/master/Assets",
      image: "../../assets/photos/code-quiz.PNG",
      toggleTitle: "A simple JavaScript related quiz! Be careful! Wrong answers lose time",
      gh: true
    },
    {
      name: "Travel-N-Style",
      deployHREF: "https://evening-oasis-14753.herokuapp.com/",
      githubHREF: "https://github.com/kairora/travel-n-style",
      image: "../../assets/photos/travelnstyle.PNG",
      toggleTitle: "Picks your clothing based on the weather of your searched city! Uses JQuery, JavaScript, Bootstrap, CSS, AJAX, Axios, Dotenv, Bcryptjs, Express, Express-handlebars, Express-session, Mysql2, Passport, Passport-local, Dayjs and Sequelize",
      gh: true
    },
    {
      name: "Eat-Da-Burger",
      deployHREF: "https://lit-meadow-28026.herokuapp.com/",
      githubHREF: "https://github.com/kairora/burger",
      image: "../../assets/photos/app-img.PNG",
      toggleTitle: "Uses mysql and express to add burgers to a menu and display when they've been served",
      gh: true
    },
    {
      name: "Password Generator",
      deployHREF: "https://kairora.github.io/Hw_3_Password-Generator/",
      githubHREF: "https://github.com/kairora/Hw_3_Password-Generator",
      image: "../../assets/photos/pw-generator.PNG",
      toggleTitle: "Uses a series of conditions from a user to generate a randomized password",
      gh: true
    },
  ]
  return(
    <>
      {projects
        .map(project => 
          <div className="col-md-4 text-center align-center">
            <div className="row projectrow">
              <div className="col-md-12 parent">
                <div className="child bg-info text-white">
                  <p>
                    <a target="blank" rel="noopener" href={project.deployHREF}>{project.name}</a> | 
                    <a target="blank" rel="noopener" href={project.githubHREF}>
                      {project.gh ? <FontAwesomeIcon icon={faGithub} /> : <FontAwesomeIcon icon={faWordpress}/>} 
                    </a>
                  </p>
                </div>
                <a target="blank" rel="noopener" href={project.deployHREF}>
                  <img src={project.image} alt={project.name} className="img-fluid colortip" data-toggle="tooltip" data-placement="left" title={project.toggleTitle} />
                </a>
              </div>
            </div>
          </div>
      )}
    </>
  )
  
}
