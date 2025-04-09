
const Menuitems = [

  {
    icon: '/sidebar/dashboard.png',
    label: "Dashboard",
    href: "/dashboard",
  },

  {
    icon: '/sidebar/Branch.png',
    label: "BranchList",
    href: "/branchlist",
  },
  {
    icon: '/Sidebar/patient.png',
    label: "Branch",
    href: "/branch",
  },
  {
    icon: '/sidebar/course.png',
    label: "Course",
    href: "/course/all-courses",
    item: [
      {
        label: "All Course",
        href: "/course/all-courses"
      },
      {
        label: "Document Sharing",
        href: "/course/document-sharing"
      }
    ]
  },
  {
    icon: "/sidebar/faculty.png",
    label: "Teacher",
    href: "/teacher",
  },
  {
    icon: "/sidebar/students.png",
    label: "Student",
    href: "/student/all-students",
    item: [
      {
        label: "All Students",
        href: "/student/all-students"
      },
      {
        label: "Certificates",
        href: "/student/certificates"
      }
    ]
  },
  {
    icon: "/sidebar/assignments.png",
    label: "Scheduling",
    href: "/scheduling",
    item: [
      {
        label: "Time Table",
        href: "/scheduling/time-table"
      },
    ]
  },
 
  {
    icon: "/sidebar/assignments.png",
    label: "Assignments",
    href: "/assignment/all-assignments",
    item: [
      {
        label: "All Assignments",
        href: "/assignment/all-assignments"
      },
      {
        label: "Student's Assignment",
        href: "/assignment/students-assignment"
      }
    ]
  },


  {
    icon: "/sidebar/exam.png",
    label: "Exam",
    href: "/exam",
  },
  {
    icon: "/sidebar/finance.png",
    label: "Results",
    href: "/results"
  },

];


export default Menuitems;