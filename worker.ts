import { AzureFunctionsWorker } from "./deps.ts"

import hello_world from "./functions/hello_world.ts";

const worker = new AzureFunctionsWorker([
  hello_world
]);

await worker.run();
