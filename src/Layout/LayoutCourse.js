import React from "react";
<<<<<<< HEAD
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import Course from "../Course/Course";


const LayoutDashboard=()=>
=======
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import Course from "../course/course";


const LayoutCourse=()=>
>>>>>>> 658a5d86fb9b60f4b37251412fc13d448935d523
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
<<<<<<< HEAD
            <Course className="dashboard" />
=======
          <Course className="dashboard"/>
>>>>>>> 658a5d86fb9b60f4b37251412fc13d448935d523
            </div>
        </div>
        </div>


        </>
    )
}

<<<<<<< HEAD
export default LayoutDashboard;
=======
export default LayoutCourse;
//   <Dashboard  />
>>>>>>> 658a5d86fb9b60f4b37251412fc13d448935d523
