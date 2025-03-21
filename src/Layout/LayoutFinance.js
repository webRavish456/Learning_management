import React from "react";
<<<<<<< HEAD
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
=======
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
>>>>>>> 658a5d86fb9b60f4b37251412fc13d448935d523
import Finance from "../Finance/Finance";


const LayoutFinance=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
<<<<<<< HEAD
            <Finance className="dashboard" />
=======
          <Finance className="finance"/>
>>>>>>> 658a5d86fb9b60f4b37251412fc13d448935d523
            </div>
        </div>
        </div>


        </>
    )
}

<<<<<<< HEAD
export default LayoutFinance;
=======
export default LayoutFinance;
//   <Dashboard  />
>>>>>>> 658a5d86fb9b60f4b37251412fc13d448935d523
