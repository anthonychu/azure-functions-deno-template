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
