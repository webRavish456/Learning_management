import React from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import Assignments from "../Assignments/Assignments";


const LayoutAssignments=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
          <Assignments className="assignments"/>
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutAssignments;
//   <Dashboard  />