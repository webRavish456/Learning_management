import React from "react";
import Faculty from "../Faculty/Faculty";
import Sidebar from "../Component/Sidebar/Sidebar";
import Header from "../Component/Header/Header";


const LayoutFaculty=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <Faculty className="faculty"/>
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutFaculty;
//   <Dashboard  />