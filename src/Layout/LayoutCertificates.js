import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import Certificates from "../Student/Certificates/Certificates";

const LayoutCertificates = () => {
    return (
        <>
            <div className="layout">
                <div className="main-container">
                    <Sidebar />
                    <div className="content">
                        <Header className="header" />
                        <Certificates className="dashboard" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default LayoutCertificates;