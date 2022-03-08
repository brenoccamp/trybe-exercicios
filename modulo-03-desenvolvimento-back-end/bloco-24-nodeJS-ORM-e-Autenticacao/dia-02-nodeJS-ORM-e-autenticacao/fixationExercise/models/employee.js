const employee = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  }, {
    underscored: true,
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'employees',
  });

  employee.associate = (models) => {
    // employee.hasOne(models.address, {
    //   foreignKey: 'employee_id', as: 'addresses',
    // });

    // podemos usar hasMany para indicar que cada employee pode ter vários endereços na tabela address
    // desse modo, a query irá agrupar os endereços que tem o mesmo employee_id em um array
    employee.hasMany(models.address, {
      foreignKey: 'employee_id', as: 'addresses',
    });
  };

  return employee;
}

module.exports = employee;