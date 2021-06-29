require('dotenv').config();

module.exports = {
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN_STAGE,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID_STAGE,
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET_STAGE,
  AUTH0_ALLOW_DELETE: process.env.AUTH0_ALLOW_DELETE_STAGE
};
