import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import Exam from "../Exam/Exam";


const LayoutExam=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <Exam className="dashboard" />
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutExam;
