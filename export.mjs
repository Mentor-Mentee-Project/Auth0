import a0deploy from "auth0-deploy-cli";

import config from "./config.js";

const tenantName = process.argv[2];

a0deploy
    .dump({
      output_folder: "./tenants/" + tenantName,
      config: config,
    })
    .then(() => console.log("yey export was successful"))
    .catch((err) => console.log(`Oh no, something went wrong. Error: ${err}`));
