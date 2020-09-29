import React from "react";
import "../../styles/Contact.css";
import Card from "../Card";
import { Link, useLocation } from "react-router-dom";

export default function () {
  return (
    <Card>
      <main>
        <div className="card-body">
          <h2 className="card-title text-info border-bottom p-4">Contact</h2>
          <form>
            <div className="form-group pt-4">
              <label htmlFor="formName">Name</label>
              <input type="name" className="form-control" id="formName" placeholder="John Smith" />
            </div>
            <div className="form-group">
              <label htmlFor="formEmail">Email</label>
              <input type="email" className="form-control" id="formEmail" placeholder="example@gmail.com" />
            </div>
            <div className="form-group">
              <label htmlFor="formMessage">Message</label>
              <textarea className="form-control" id="formMessage" rows="3"></textarea>
            </div>
          </form>
          <Link to="mailto:brianna.bullock16@gmail.com" className="btn btn-info rounded-0">Submit</Link>
        </div>
      </main>
    </Card>

  );
}


