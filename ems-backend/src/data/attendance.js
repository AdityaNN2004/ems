const generateAttendance = (empIds) => {
  const records = [];

  for (let i = 0; i < empIds.length; i++) {
    for (let d = 1; d <= 10; d++) {
      const date = new Date(2025, 3, d);

      records.push({
        empId: empIds[i],
        date,
        checkIn: new Date(date.setHours(9, 0, 0)),
        checkOut: new Date(date.setHours(18, 0, 0)),
        status: "present"
      });
    }
  }

  return records;
};

module.exports = generateAttendance;