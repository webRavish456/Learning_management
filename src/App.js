import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import Forgot from "./Auth/Forgot";
import Dashboard from "./Dashboard/Dashboard";
import Course from "./Course/Course";
import Student from "./Student/Student";
import Assignment from "./Assignment/Assignment";
import Exam from "./Exam/Exam";
import Finance from "./Finance/Finance";
import Faculty from "./Faculty/Faculty";
import Result from "./Result/Result";
// import BranchList from "./Layout/LayoutBranchList";
// import Scheduling from "./Layout/LayoutScheduling";
import CreateFaculty from "./Faculty/Create/Create";
import ViewFaculty from "./Faculty/View/View";
import EditFaculty from "./Faculty/Edit/Edit";
import LayoutMain from "./Layout/LayoutMain";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/" element={<LayoutMain />}>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="/forgot-password" element={<Forgot />}/>
        <Route path="course/all-courses" element={<Course/>}/>
        <Route path="student/all-students" element={<Student/>}/>
        <Route path="assignment/all-assignments" element={<Assignment/>}/>
        <Route path="exam" element={<Exam/>}/>
        <Route path="finance" element={<Finance/>}/>
        <Route path="teacher" element={<Faculty/>}/>
        <Route path="faculty" element={<CreateFaculty/>}/>
        <Route path="results" element={<Result/>}/>
        <Route path="viewfaculty" element={<ViewFaculty/>}/>
        <Route path="editfaculty" element={<EditFaculty/>}/>
        </Route>
      </Routes>

    </BrowserRouter>

    
  );
}

export default App;