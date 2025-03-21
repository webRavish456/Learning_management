import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import Forgot from "./Auth/Forgot";
import LayoutDashboard from "./Layout/LayoutDashboard";
import LayoutCourse from "./Layout/LayoutCourse";
import LayoutStudent from "./Layout/LayoutStudent";
import LayoutFaculty from "./Layout/LayoutFaculty";
import LayoutAssignments from "./Layout/LayoutAssignments";
import LayoutExam from "./Layout/LayoutExam";
import LayoutFinance from "./Layout/LayoutFinance";





function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/" element={<LayoutDashboard/>}/>
        <Route path="/forgot-password" element={<Forgot />}/>
        <Route path="/course" element={<LayoutCourse />}/>
        <Route path="/student" element={<LayoutStudent />}/>
         <Route path="/faculty" element={<LayoutFaculty />}/>
         <Route path="/assignments" element={<LayoutAssignments />}/>
         <Route path="/exam" element={<LayoutExam />}/>
         <Route path="/finance" element={<LayoutFinance />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;