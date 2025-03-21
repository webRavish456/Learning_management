import React from "react";
<<<<<<< HEAD
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
=======
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
>>>>>>> 658a5d86fb9b60f4b37251412fc13d448935d523
import Student from "../Student/Student";


const LayoutStudent=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
<<<<<<< HEAD
            <Student className="dashboard" />
=======
          <Student className="student"/>
>>>>>>> 658a5d86fb9b60f4b37251412fc13d448935d523
            </div>
        </div>
        </div>


        </>
    )
}

<<<<<<< HEAD
export default LayoutStudent;
=======
export default LayoutStudent;
//   <Dashboard  />
>>>>>>> 658a5d86fb9b60f4b37251412fc13d448935d523
