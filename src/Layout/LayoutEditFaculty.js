import React from "react";
import Sidebar from "../Component/Sidebar/Sidebar";
import Header from "../Component/Header/Header";
import EditFaculty from "../Faculty/Edit/Edit";


const LayoutEditFaculty=()=>
{
    return (
        <>
          <div className="layout">
          <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <EditFaculty className="dashboard"/>
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutEditFaculty;