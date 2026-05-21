const roles = ["Admin", "HR", "Manager", "Developer"];

const generateEmployees = (deptIds) => {
  const employees = [];

  for (let i = 1; i <= 100; i++) {
    employees.push({
      name: `Employee ${i}`,
      email: `employee${i}@company.com`,
      role: roles[Math.floor(Math.random() * roles.length)],
      salary: Math.floor(Math.random() * 70000) + 30000,
      joiningDate: new Date(
        2020 + Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28)
      ),
      deptId: deptIds[Math.floor(Math.random() * deptIds.length)],
      status: "active"
    });
  }

  return employees;
};

module.exports = generateEmployees;