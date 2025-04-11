import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import AllStudents from "../Student/AllStudents/AllStudents";


const LayoutAllStudents = () => {
    return (
        <>
            <div className="layout">
                <div className="main-container">
                    <Sidebar />
                    <div className="content">
                        <Header className="header" />
                        <AllStudents className="dashboard" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default LayoutAllStudents;