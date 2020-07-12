import { AzureFunctionsContext } from "../deps.ts";

async function handler(context: AzureFunctionsContext) {
  const mySbMsg = context.bindings.mySbMsg;
  context.log(`ServiceBus queue trigger function processed message ${mySbMsg}`);
};

export default {
  handler,

  // Name of the function
  name: "servicebus_queue_trigger",

  metadata: {
    "bindings": [
      {
        "name": "mySbMsg",
        "type": "serviceBusTrigger",
        "direction": "in",
        "queueName": "myinputqueue",
        "connection": "ServiceBusConnection"
      },
    ],
  },
};
