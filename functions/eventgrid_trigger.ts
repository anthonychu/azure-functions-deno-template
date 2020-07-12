import { AzureFunctionsContext } from "../deps.ts";

async function handler(context: AzureFunctionsContext) {
  const eventGridEvent = context.bindings.eventGridEvent;
  context.log(typeof eventGridEvent);
  context.log(eventGridEvent);
}

export default {
  handler,

  // Name of the function
  name: "eventgrid_trigger",

  metadata: {
    "bindings": [
      {
        // https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-grid-trigger?tabs=csharp#configuration
        "type": "eventGridTrigger",
        "name": "eventGridEvent",
        "direction": "in",
      },
    ],
  },
};
