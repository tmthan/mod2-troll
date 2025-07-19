const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error("Please input filename, ex: 0-1000");
  process.exit(1);
}

const templatePath = path.resolve(__dirname, "./template.txt");
const template = fs.readFileSync(templatePath, "utf8");

const [from, to] = args[0].split("-");

function generateFile(from, to, template) {
  let _template = structuredClone(template);
  const functionName = `mod2From${from}To${to}`;
  const codeList = [];

  for (let i = Number(from); i <= Number(to); i++) {
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

  _template = _template.replace(/functionName/g, functionName);
  _template = _template.replace(/functionBody/g, codeList.join("\n"));

  const filename = `${from}-${to}`;
  const fullFilename = `src/mod2/${filename}.ts`;
  const filePath = path.join(process.cwd(), fullFilename);
  fs.writeFileSync(filePath, _template);
  console.log(`Create file success: ${fullFilename}`);
}

for (let i = Number(from); i <= Number(to); i += 1000) {
  if (isNaN(i)) {
    console.error("Invalid range provided. Please use a valid numeric range.");
    process.exit(1);
  }
  const _from = i;
  const _to = i + 1000 - 1;
  generateFile(_from, _to, template);
}

