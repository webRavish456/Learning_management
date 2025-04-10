import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import BranchList from "../Branch/BranchList/BranchList";


const LayoutBranchList=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            {/* <Course className="dashboard" /> */}
            <BranchList className="dashboard" />
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutBranchList;
