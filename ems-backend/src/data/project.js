const generateProjects = (deptIds, empIds) => {
  const projects = [];

  for (let i = 1; i <= 10; i++) {
    const teamSize = Math.floor(Math.random() * 5) + 3;

    const teamMembers = [];
    for (let j = 0; j < teamSize; j++) {
      teamMembers.push(empIds[Math.floor(Math.random() * empIds.length)]);
    }

    projects.push({
      name: `Project ${i}`,
      description: `Project ${i} description`,
      deptId: deptIds[Math.floor(Math.random() * deptIds.length)],
      owner: empIds[Math.floor(Math.random() * empIds.length)],
      teamMembers,
      status: "active",
      startDate: new Date(),
      endDate: new Date()
    });
  }

  return projects;
};

module.exports = generateProjects;