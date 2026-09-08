require("dotenv").config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    logging: false
  },
  test: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    logging: false
  },
  production: {
    url: process.env.DATABASE_URL | "postgresql://hireflow:hireflow_password@postgres:5432/hireflow",
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};
