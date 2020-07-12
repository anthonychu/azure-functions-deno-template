import { AzureFunctionsWorker } from "./deps.ts"

// import hello_world from "./functions/hello_world.ts";
// import queue_trigger from './functions/queue_trigger.ts';
// import timer_trigger from "./functions/timer_trigger.ts";
// import blob_trigger from "./functions/blob_trigger.ts";
// import cosmosdb_trigger from "./functions/cosmosdb_trigger.ts";

const worker = new AzureFunctionsWorker([
  // hello_world,
  // queue_trigger,
  // timer_trigger,
  // blob_trigger,
  // cosmosdb_trigger,
]);

await worker.run();
