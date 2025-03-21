import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
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
            <Student className="dashboard" />
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutStudent;