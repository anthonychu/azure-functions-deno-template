import { AzureFunctionsContext } from "../deps.ts";

function handler(context: AzureFunctionsContext) {
  return {
    status: 200,
    body: `Welcome to deno ${Deno.version.deno} 🦕 in Azure Functions 🌩!!!`
  };
}

export default {
  handler,

  // name of the function
  name: "hello_world",

  // contents of the function.json file
  metadata: {
    "bindings": [
      {
        "type": "httpTrigger",
        "authLevel": "anonymous",
        "direction": "in",
        "methods": [
          "GET",
          "POST"
        ],
        "name": "req"
      },
      {
        "type": "http",
        "direction": "out",
        "name": "$return"
      }
    ]
  }
};