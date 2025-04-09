import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import TimeTable from "../Scheduling/TimeTable/TimeTable";


const LayoutTimeTable=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            {/* <Course className="dashboard" /> */}
            <TimeTable className="time-table" />
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutTimeTable;
