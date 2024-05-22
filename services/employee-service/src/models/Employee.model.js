module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define(
      "employees",
      {
        name: {
          type: Sequelize.STRING(64),
        },
        address: {
            type: Sequelize.STRING(128),
        },
        phone: {
            type: Sequelize.STRING(16),
        },
        email: {
            type: Sequelize.STRING(64),
        },
        hireDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        departmentId: {
            type: DataTypes.INTEGER, // Référence à l'ID du département
            allowNull: false
          },
      },{
        timestamps: false, // Désactive les timestamps automatiques (createdAt, updatedAt)
      }
    );
  
    return Employee;
}