import { AzureFunctionsContext } from "../deps.ts";

function handler(context: AzureFunctionsContext) {
  context.res = {
    status: 200,
    body: `Welcome to deno ${Deno.version.deno} 🦕 in Azure Functions 🌩!!!`
  };
}

export default {
  handler,

  // Name of the function
  name: "hello_world",

  // By default, it's an HTTP function. For other functions, add a `metadata` property 
  // with the contents of function.json that describes the trigger and bindings.
  // https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-example
};