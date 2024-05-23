const Sequelize = require("sequelize");
const dotenv = require("dotenv")

dotenv.config()

const dialectOptions = process.env.NODE_ENV === 'production' ? {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }: null;


const sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        host: process.env.POSTGRES_HOST,
        dialect: "postgres",
        dialectOptions: dialectOptions
    }  
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

/*
    Models/tables
*/
db.Department = require('./department.model.js')(sequelize, Sequelize);
db.Location = require('./location.model.js')(sequelize, Sequelize);

/**
 * Relationships
 */
db.Location.hasMany(db.Department, {as: "departments"})
db.Department.belongsTo(db.Location, { as: "location" });

module.exports = db;