#!/usr/bin/env node

import getLatestVersion from "./core/getLatestVersion.js";
import loadRunner from "./core/loadRunner.js";

const run = async () => {
  const version = getLatestVersion();
  const runner = await loadRunner(version);
  await runner();
};

run();