import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import Introduction from "../Self"


export default function () {
    return (
        <>
            <div className="card-body">
                <h2 className="card-title text-info border-bottom p-4">About Me
                    <a target="blank" rel="noopener" className="resumeIcon colortip" data-toggle="tooltip" data-placement="bottom"
                        title="Brianna's Resume"
                        href="https://drive.google.com/file/d/1NpKYZsf5aAcav5gUUIro4D-GtAgoojDI/view?usp=sharing">
                        <FontAwesomeIcon icon={faFileAlt} />
                    </a>
                </h2>
                <div className="row">
                    <Introduction />
                </div>
            </div>
        </>
    );
}