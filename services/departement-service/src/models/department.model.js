module.exports = (sequelize, Sequelize) => {
    const Department = sequelize.define(
        "departments",
        {
            department_designation : {
                type: Sequelize.STRING(64),
            },
            department_description : {
                type: Sequelize.STRING(255),
            },
            manager_id : {
                type : Sequelize.DataTypes.INTEGER,
            },
            location_id : {
                type: Sequelize.DataTypes.INTEGER,
            }
        },
        {
            timestamps: false, // Désactive les timestamps automatiques (createdAt, updatedAt)
        }
    )
}