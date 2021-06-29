import a0deploy from "auth0-deploy-cli";

import config_dev from "./config_dev.js";
import config_stage from "./config_stage.js";
import config_production from "./config_production.js";


const devEnv = process.argv[2];

if (devEnv === '--dev') {
  a0deploy
    .dump({
      output_folder: "./tenants/dev",
      config: config_dev,
    })
    .then(() => console.log("yey dev export was successful"))
    .catch((err) => console.log(`Oh no, something went wrong. Error: ${err}`));

} else if (devEnv === '--stage'){
  a0deploy
    .dump({
      output_folder: "./tenants/stage",
      config: config_stage,
    })
    .then(() => console.log("yey stage export was successful"))
    .catch((err) => console.log(`Oh no, something went wrong. Error: ${err}`));

} else if (devEnv === '--production') {
  a0deploy
    .dump({
      output_folder: "./tenants/production",
      config: config_production,
    })
    .then(() => console.log("yey production export was successful"))
    .catch((err) => console.log(`Oh no, something went wrong. Error: ${err}`));

} else {
  var error = ' export-auth0 を使うときは引数を指定してください。【ローカル】npm run export-auth0 -- --dev  【ステージ】npm run export-auth0 -- --stage  【本番】npm run export-auth0 -- --production';

  console.log(error);

}
