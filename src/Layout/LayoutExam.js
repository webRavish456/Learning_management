import React from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
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
          <Exam className="exam"/>
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutExam;
//   <Dashboard  />