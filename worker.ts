import { AzureFunctionsWorker } from "./deps.ts"
import { walk, WalkEntry } from "https://deno.land/std/fs/mod.ts";

const functions = [];
for await (const w:WalkEntry of walk('./functions', {includeDirs: false, exts: ["ts"]})) {
  try {
    const azfunc = await import(`./${w.path}`);
    if (!azfunc.default?.handler) continue;
    functions.push(azfunc.default);
  } catch (e) {
    console.error(e);
  }
}

const worker = new AzureFunctionsWorker(functions);
await worker.run();
