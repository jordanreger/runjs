console.log("Hello world!");

const path = "./js/main.txt";

await runjs.writeFile(path, "Hello main.txt!");
const contents = await runjs.readFile(path);
console.log("Read from a file", path, "contents:", contents);