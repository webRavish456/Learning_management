
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
      icon: '/sidebar/course.png',
      label: "Course",
      href: "/course",
    },
    {
      icon: '/sidebar/scheduling.png',
      label: "Scheduling",
      href: "/scheduling",
    },
    
    {
       icon: "/sidebar/students.png",
       label: "Student",
       href: "/student",
      },
    {
      icon: "/sidebar/faculty.png",
      label: "Faculty",
      href: "/faculty",
    },
    {
      icon: "/sidebar/assignments.png",
      label: "Assignments",
      href: "/assignments",
      
      item:[
        {
          label:"AssignmentList",
          href:"/assignmentlist",
        },
        {
          label:"StudentAssignment",
          href:"/studentassignment",
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
      label: "Finance",
      href: "/finance",
    },

];


export default Menuitems;