import { AzureFunctionsContext } from "../deps.ts";

async function handler(context: AzureFunctionsContext) {
  const eventHubMessages = context.bindings.eventHubMessages;
  context.log(
    `Eventhub trigger function called for message array ${eventHubMessages}`,
  );

  eventHubMessages.forEach((message: any) => {
    context.log(`Processed message ${message}`);
  });
}

export default {
  handler,

  // Name of the function
  name: "eventhub_iothub_trigger",

  metadata: {
    "bindings": [
      {
        // https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-hubs-trigger?tabs=csharp#configuration
        "type": "eventHubTrigger",
        "name": "eventHubMessages",
        "direction": "in",
        "eventHubName": "samples-workitems",
        "connection": "EventHubConnection",
        "cardinality": "many",
        "consumerGroup": "$Default",
      },
    ],
  },
};
