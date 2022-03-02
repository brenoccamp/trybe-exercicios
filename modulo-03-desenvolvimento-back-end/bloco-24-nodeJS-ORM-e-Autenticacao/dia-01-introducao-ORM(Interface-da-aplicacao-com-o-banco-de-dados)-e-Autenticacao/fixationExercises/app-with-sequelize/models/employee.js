const Employee = (sequelize, DataTypes) => {
  const Employee = sequelize.define("Employee", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return Employee;
};

module.exports = Employee;