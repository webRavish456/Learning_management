import React from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
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
          <Student className="student"/>
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutStudent;
//   <Dashboard  />