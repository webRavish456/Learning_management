import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import Result from "../Result/Result";


const LayoutResult=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <Result className="dashboard" />
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutResult;
