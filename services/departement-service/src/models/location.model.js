module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define(
        "locations",
        {
            location_designation : {
                type: Sequelize.STRING(64),
            },
            address: {
                type: Sequelize.STRING(128),
            },
            code_postal : {
                type: Sequelize.STRING(16), 
            },
            province : {
                type: Sequelize.STRING(64),
            }
        },
        {
            timestamps: false, // Désactive les timestamps automatiques (createdAt, updatedAt)
        }
    )
}