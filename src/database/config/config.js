require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
    // ssl: {
    //    require: false,
    //    rejectUnauthorized: false
    //  }
   }
  },
  test: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB_NAME,
    host: process.env.PG_HOST,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  //   dialectOptions: {
  //   // ssl: {
  //   //    require: true,
  //   //    rejectUnauthorized: false
  //   //  }
  //  }
  },
};