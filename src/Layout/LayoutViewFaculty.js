import React from "react";
import Sidebar from "../Component/Sidebar/Sidebar";
import Header from "../Component/Header/Header";
import ViewFaculty from "../Faculty/View/View";


const LayoutViewFaculty=()=>
{
    return (
        <>
          <div className="layout">
          <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <ViewFaculty className="dashboard"/>
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutViewFaculty;