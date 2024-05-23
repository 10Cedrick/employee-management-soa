module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define(
      "employees",
      {
        name: {
          type: Sequelize.STRING(64),
        },
        firstName: {
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
            type: Sequelize.DataTypes.DATE,
            defaultValue: Sequelize.DataTypes.NOW
        },
        departmentId: {
            type: Sequelize.DataTypes.INTEGER, // Référence à l'ID du département
        },
        salaryId: {
            type: Sequelize.DataTypes.INTEGER,
        }
      },{
        timestamps: false, // Désactive les timestamps automatiques (createdAt, updatedAt)
      }
    );
  
    return Employee;
}