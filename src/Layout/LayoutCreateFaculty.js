import React from "react";
import CreateFaculty from "../Faculty/Create/Create";
import Sidebar from "../Component/Sidebar/Sidebar";
import Header from "../Component/Header/Header";


const LayoutCreateFaculty=()=>
{
    return (
        <>
          <div className="layout">
          <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <CreateFaculty className="dashboard"/>
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutCreateFaculty;