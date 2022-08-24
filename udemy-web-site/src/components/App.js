import React from "react";
import Header from "./Header";
import Course from "./Courses";
import Paragraph from "./Paragraph";
import Explore from "./Explore";

function App() {
  return (
    <div className="courses">
      <Header />
      <Paragraph />
      <Explore />
      <div className="c">
        <Course />
      </div>
    </div>
  );
}

export default App;
