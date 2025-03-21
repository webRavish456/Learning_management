import React from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import Dashboard from "../dashboard/dashboard";


const LayoutDashboard=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
          <Dashboard className="dashboard"/>
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutDashboard;
//   <Dashboard  />