const context = require.context("./mod2", false, /\.ts$/);

type ModObject = {
  default: (value: number) => number;
};

type FunctionItem = {
  from: number;
  to: number;
  function: (value: number) => number;
};

const functionList: FunctionItem[] = [];
let minValue = 0;
let maxValue = 0;

context.keys().forEach((key: string) => {
  const mod = context(key) as ModObject;
  const name = key.replace(/^\.\/|\.ts$/g, "");
  const [from, to] = name.split("-").map(Number);
  functionList.push({
    from,
    to,
    function: mod.default,
  });

  if (from < minValue) {
    minValue = from;
  }
  if (to > maxValue) {
    maxValue = to;
  }
});

function load() {
  return { functionList, minValue, maxValue };
}

export default load;
