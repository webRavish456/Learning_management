import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import Forgot from "./Auth/Forgot";
import Dashboard from "./Dashboard/Dashboard";
import Exam from "./Exam/Exam";
import Faculty from "./Faculty/Faculty";
import Result from "./Result/Result";
import Branch from "./Branch/Branch";
import CreateFaculty from "./Faculty/Create/Create";
import ViewFaculty from "./Faculty/View/View";
import EditFaculty from "./Faculty/Edit/Edit";
import LayoutMain from "./Layout/LayoutMain";
import AllStudents from "./Student/AllStudents/AllStudents";
import Certificates from "./Student/Certificates/Certificates";
import AllAssignment from "./Assignment/AllAssignment/AllAssignment";
import StudentAssignment from "./Assignment/StudentsAssignment/StudentsAssignment";
import Scheduling from "./Scheduling/Scheduling";
import CourseList from "./Course/CourseList/CourseList";
import DocumentSharing from "./Course/DocumentSharing/DocumentSharing";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/" element={<LayoutMain />}>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="/forgot-password" element={<Forgot />}/>
        <Route path="branch" element={<Branch/>}/>
        <Route path="course/all-courses" element={<CourseList/>}/>
        <Route path="course/document-sharing" element={<DocumentSharing/>}/>
        <Route path="student/all-students" element={<AllStudents/>}/>
        <Route path="student/certificates" element={<Certificates/>}/>
        <Route path="assignment/all-assignments" element={<AllAssignment/>}/>
        <Route path="assignment/students-assignment" element={<StudentAssignment/>}/>
        <Route path="exam" element={<Exam/>}/>
        <Route path="teacher" element={<Faculty/>}/>
        <Route path="faculty" element={<CreateFaculty/>}/>
        <Route path="results" element={<Result/>}/>
        <Route path="viewfaculty" element={<ViewFaculty/>}/>
        <Route path="editfaculty" element={<EditFaculty/>}/>
        <Route path="scheduling" element={< Scheduling/>}/>
        </Route>
      </Routes>

    </BrowserRouter>

    
  );
}

export default App;