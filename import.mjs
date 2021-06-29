import a0deploy from "auth0-deploy-cli";

import config_dev from "./config_dev.js";
import config_stage from "./config_stage.js";
import config_production from "./config_production.js";

const devEnv = process.argv[2];

if (devEnv === '--dev') {
  a0deploy
    .deploy({
      input_file: "./tenants/dev",
      config: config_dev,
    })
    .then(() => console.log("yey deploy was successful"))
    .catch((err) => console.log(`Oh no, something went wrong. Error: ${err}`));

} else if (devEnv === '--stage'){
  a0deploy
    .deploy({
      input_file: "./tenants/stage",
      config: config_stage,
    })
    .then(() => console.log("yey deploy was successful"))
    .catch((err) => console.log(`Oh no, something went wrong. Error: ${err}`));

} else if (devEnv === '--production') {
  a0deploy
    .deploy({
      input_file: "./tenants/production",
      config: config_production,
    })
    .then(() => console.log("yey deploy was successful"))
    .catch((err) => console.log(`Oh no, something went wrong. Error: ${err}`));

} else {
  var error = ' import-auth0 を使うときは引数を指定してください。【ローカル】npm run import-auth0 -- --dev  【ステージ】npm run import-auth0 -- --stage  【本番】npm run import-auth0 -- --production';

  console.log(error);
}
