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
      foreignKey: true, // Esta linha não é obrigatória, já que estamos fazendo o associate mais abaixo.
    },
  }, {
    underscored: true,
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'addresses',
  });

  address.associate = (models) => {
    address.belongsTo(models.employee, {
      foreignKey: 'employeeId', as: 'employees',
    });
  };

  return address;
}

module.exports = address;