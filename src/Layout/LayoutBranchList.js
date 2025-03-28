import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import BranchList from "../BranchList/BranchList";


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
            <BranchList className="branchlist" />
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutBranchList;
