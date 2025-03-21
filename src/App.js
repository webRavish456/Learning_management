import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import Forgot from "./Auth/Forgot";
import LayoutDashboard from "./Layout/LayoutDashboard";
import LayoutCourse from "./Layout/LayoutCourse";
import LayoutStudent from "./Layout/LayoutStudent";
<<<<<<< HEAD
import LayoutAssignment from "./Layout/LayoutAssignment";
import LayoutExam from "./Layout/LayoutExam";
import LayoutFinance from "./Layout/LayoutFinance";
=======
import LayoutFaculty from "./Layout/LayoutFaculty";
import LayoutAssignments from "./Layout/LayoutAssignments";
import LayoutExam from "./Layout/LayoutExam";
import LayoutFinance from "./Layout/LayoutFinance";





>>>>>>> 658a5d86fb9b60f4b37251412fc13d448935d523
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/" element={<LayoutDashboard/>}/>
        <Route path="/forgot-password" element={<Forgot />}/>
<<<<<<< HEAD
        <Route path="/course" element={<LayoutCourse/>}/>
        <Route path="/student" element={<LayoutStudent/>}/>
        <Route path="/assignments" element={<LayoutAssignment/>}/>
        <Route path="/exam" element={<LayoutExam/>}/>
        <Route path="/finance" element={<LayoutFinance/>}/>
=======
        <Route path="/course" element={<LayoutCourse />}/>
        <Route path="/student" element={<LayoutStudent />}/>
         <Route path="/faculty" element={<LayoutFaculty />}/>
         <Route path="/assignments" element={<LayoutAssignments />}/>
         <Route path="/exam" element={<LayoutExam />}/>
         <Route path="/finance" element={<LayoutFinance />}/>
        
>>>>>>> 658a5d86fb9b60f4b37251412fc13d448935d523
      </Routes>
    </BrowserRouter>
  );
}

export default App;