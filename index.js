import { fileURLToPath } from "node:url";

import { BorderlessEnvironment } from "@borderlessjs/borderless";

export default class MainThreadEnvironment extends BorderlessEnvironment {
  constructor(name, config) {
    super(
      name,
      config,
      "src",
      "dist",
      fileURLToPath(new URL("boilerplate/", import.meta.url)),
      "npm run build"
    );
  }

  getDeployCommand(deploymentConfig) {
    `echo "Deploying static HTML to ${deploymentConfig.host}"`;
  }
}
