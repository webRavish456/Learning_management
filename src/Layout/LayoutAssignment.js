import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import Assignment from "../Assignment/Assignment";


const LayoutAssignment=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <Assignment className="dashboard" />
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutAssignment;