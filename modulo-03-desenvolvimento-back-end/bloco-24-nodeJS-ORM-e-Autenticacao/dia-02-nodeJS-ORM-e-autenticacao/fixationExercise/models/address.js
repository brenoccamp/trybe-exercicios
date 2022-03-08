const address = (sequelize, DataTypes) => {
  const address = sequelize.define('address', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    // A declaração da Foreign Key é opcional no model
    employeeId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, {
    underscored: true,
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'addresses',
  });

  address.associate = (models) => {
    address.belongsTo(models.employee, {
      foreignKey: 'employee_id', as: 'employees',
    });
  };

  return address;
}

module.exports = address;