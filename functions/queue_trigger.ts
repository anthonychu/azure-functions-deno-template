import { AzureFunctionsContext } from "../deps.ts";

function handler(context: AzureFunctionsContext) {
  context.log(`Queue item received: ${context.bindings.myQueueItem}`);
}

export default {
  handler,

  // Name of the function
  name: "queue_trigger",

  metadata: {
    "bindings": [
        {
            "type": "queueTrigger",
            "direction": "in",
            "name": "myQueueItem",
            "queueName": "myqueue-items"
        }
    ]
}
};