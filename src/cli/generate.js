const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error("Please input filename, ex: 0-1000");
  process.exit(1);
}

const filename = args[0];
const fullFilename = `src/mod2/${filename}.ts`;
const filePath = path.join(process.cwd(), fullFilename);

const templatePath = path.resolve(__dirname, "./template.txt");
let template = fs.readFileSync(templatePath, "utf8");

const [from, to] = filename.split("-");
const functionName = `mod2From${from}To${to}`;
const codeList = [];

for (let i = from; i <= to; i++) {
  if (i % 2 === 0) {
    codeList.push(`
  if (value === ${i}) {
    return 0;
  }`);
  }
  if (i % 2 === 1) {
    codeList.push(`
  if (value === ${i}) {
    return 1;
  }`);
  }
}

template = template.replace(/functionName/g, functionName);
template = template.replace(/functionBody/g, codeList.join("\n"));

fs.writeFileSync(filePath, template);

console.log(`Create file success: ${fullFilename}`);
