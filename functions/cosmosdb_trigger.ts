import { AzureFunctionsContext } from "../deps.ts";

async function handler(context: AzureFunctionsContext) {
  const documents = context.bindings.documents;
  if (!!documents && documents.length > 0) {
    context.log(`Document Id: ${documents[0].id}`);
  }
}

export default {
  handler,

  // Name of the function
  name: "cosmosdb_trigger",

  metadata: {
    "bindings": [
      {
        "type": "cosmosDBTrigger",
        "name": "documents",
        "direction": "in",
        "leaseCollectionName": "LEASE_COLLECTION_NAME",
        "connectionStringSetting": "CosmosDBConnection",
        "databaseName": "DB_NAME",
        "collectionName": "COLLECTION_NAME",
        "createLeaseCollectionIfNotExists": "true"
      }
    ],
  },
};
