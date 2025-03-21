import React from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import Faculty from "../Faculty/Faculty";


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