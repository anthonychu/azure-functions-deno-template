import { AzureFunctionsContext } from "../deps.ts";

async function handler(context: AzureFunctionsContext) {
  const myBlob = context.bindings.myBlob;
  context.log(`Blob trigger function processed blob 
 Name: ${context.bindingData.name}, 
 Blob Size:", ${myBlob.length} Bytes`);
}

export default {
  handler,

  // Name of the function
  name: "blob_trigger",

  metadata: {
    "bindings": [
      {
        // https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob-trigger?tabs=javascript#configuration
        "name": "myBlob",
        "type": "blobTrigger",
        "direction": "in",
        "path": "samples-workitems/{name}",
        "connection": "AzureWebJobsStorage"
      }
    ],
  },
};
