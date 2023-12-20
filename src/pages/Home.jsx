import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project created By{" "}
         Riteeka Rani, click the link to see the website
         </p>
      <ul>
        <li>
          <Link to="/landingpageone">LandingpageOne</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
