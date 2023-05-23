import React from "react";
import { name, city } from "../data/data.js";

const divStyle = {
  color:'firebrick'
};
function Home() {
  // update the JSX being returned!
  return <div>
    <h1 id="home" style={divStyle}>{name} is a Web Developer from {city}</h1>
  </div>;
}

export default Home;
