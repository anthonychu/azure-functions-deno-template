import { AzureFunctionsWorker } from "./deps.ts"

import hello_world from "./functions/hello_world.ts";
//import queue_trigger from './functions/queue_trigger.ts';

const worker = new AzureFunctionsWorker([
  hello_world,
  //queue_trigger
]);

await worker.run();
