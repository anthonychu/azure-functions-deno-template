import { AzureFunctionsContext } from "../deps.ts";

async function handler(context: AzureFunctionsContext) {
  const mySbMsg = context.bindings.mySbMsg;
  context.log(`ServiceBus topic trigger function processed message ${mySbMsg}`);
}

export default {
  handler,

  // Name of the function
  name: "servicebus_topic_trigger",

  metadata: {
    "bindings": [
      {
        "name": "mySbMsg",
        "type": "serviceBusTrigger",
        "direction": "in",
        "topicName": "mytopic",
        "subscriptionName": "mysubscription",
        "connection": "ServiceBusConnection",
      },
    ],
  },
};
