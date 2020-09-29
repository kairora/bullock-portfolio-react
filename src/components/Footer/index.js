import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobile, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";




export default function () {
  return (
    <footer className="fixed-bottom">
      <div className="row">
        <div className="col-md-12">
          <div className="bg-dark text-white border-top border-info">
            <p className="">© Copyright</p>
            <section>
              <a target="_blank" rel="noopener" className="socialIcon" id="github" href="https://github.com/kairora"><FontAwesomeIcon icon={faGithub} /></a>
              <a target="_blank" rel="noopener" className="socialIcon" id="linkedin" href="https://www.linkedin.com/in/briannabullock/"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a target="_blank" rel="noopener" className="socialIcon" id="email" href="mailto:brianna.bullock16@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a target="_blank" rel="noopener" className="socialIcon" id="tele" href="tel:000-000-0000"><FontAwesomeIcon icon={faMobileAlt} /></a>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}