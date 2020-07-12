import { AzureFunctionsContext } from "../deps.ts";

async function handler(context: AzureFunctionsContext) {
  const myTimer = context.bindings.myTimer;
  const timeStamp: string = new Date().toISOString();

  if (myTimer.isPastDue) {
    context.log("Timer function is running late!");
  }
  context.log(`Timer trigger function ran! ${timeStamp}`);
}

export default {
  handler,

  // Name of the function
  name: "timer_trigger",

  metadata: {
    "bindings": [
      {
        // https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer?tabs=csharp#configuration
        "name": "myTimer",
        "type": "timerTrigger",
        "direction": "in",
        "schedule": "0 * * * * *",
      },
    ],
  },
};
