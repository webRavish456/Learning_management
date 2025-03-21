import React from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import Course from "../course/course";


const LayoutCourse=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
          <Course className="dashboard"/>
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutCourse;
//   <Dashboard  />