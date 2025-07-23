const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskNumber: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare sales report",
        description: "Compile sales data for Q1 2025.",
        date: "2025-07-18",
        category: "Reporting"
      },{
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design in figma",
        description: "Multiple users transaction app.",
        date: "2025-06-12",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client meeting follow-up",
        description: "Send follow-up emails to clients post-meeting.",
        date: "2025-07-10",
        category: "Communication"
      }
    ]
  },
  {
    id: 2,
    firstname: "Rohan",
    email: "employee2@example.com",
    password: "123",
    taskNumber: { active: 1, newTask: 0, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update website content",
        description: "Revise homepage banners and product descriptions.",
        date: "2025-07-18",
        category: "Web"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare team presentation",
        description: "Create slide deck for weekly team update.",
        date: "2025-07-14",
        category: "Presentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        tasktaskTitle: "Bug fix deployment",
        description: "Deploy hotfix for login issues.",
        date: "2025-07-12",
        category: "Development"
      }
    ]
  },
  {
    id: 3,
    firstname: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    taskNumber: { active: 1, newTask: 1, completed: 0, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Conduct user research",
        description: "Interview 5 users about new feature feedback.",
        date: "2025-07-18",
        category: "Research"
      }
    ]
  },
  {
    id: 4,
    firstname: "Vihaan",
    email: "employee4@example.com",
    password: "123",
    taskNumber: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Inventory check",
        description: "Complete monthly inventory review.",
        date: "2025-07-05",
        category: "Operations"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Social media strategy",
        description: "Draft new Instagram content plan.",
        date: "2025-07-18",
        category: "Marketing"
      }
    ]
  },
  {
    id: 5,
    firstname: "Krishna",
    email: "employee5@example.com",
    password: "123",
    taskNumber: { active: 1, newTask: 1, completed: 0, failed: 1 },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server upgrade",
        description: "Upgrade backend server from Node 14 to 18.",
        date: "2025-07-15",
        category: "IT"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Customer support tickets",
        description: "Respond to pending customer queries.",
        date: "2025-07-18",
        category: "Support"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstname: "Suresh",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
