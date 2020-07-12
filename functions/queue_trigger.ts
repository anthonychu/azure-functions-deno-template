import { AzureFunctionsContext } from "../deps.ts";

async function handler(context: AzureFunctionsContext) {
  context.log(`Queue item received: ${context.bindings.myQueueItem}`);
}

export default {
  handler,

  // Name of the function
  name: "queue_trigger",

  metadata: {
    "bindings": [
      {
        // https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue-trigger?tabs=csharp#configuration
        "type": "queueTrigger",
        "direction": "in",
        "name": "myQueueItem",
        "queueName": "myqueue-items",
        "connection": "AzureWebJobsStorage"
      }
    ]
  }
};