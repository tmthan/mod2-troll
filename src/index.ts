import load from "./auto-import";

export function mod2(value: number): number {
  if (isNaN(Number(value))) {
    throw new Error("Value must be a valid number.");
  }
  const { functionList, maxValue, minValue } = load();
  if (value < minValue || value > maxValue) {
    throw new Error(
      `Currently, only values between ${minValue} and ${maxValue} are supported. We would love for you to continue contributing to the library. Please visit https://github.com/tmthan/mod2-troll.git to contribute. Thank you!`
    );
  }

  const mod2Function = functionList.find(
    (item) => item.from <= value && item.to >= value
  );
  if (!mod2Function) {
    throw new Error("Sorry, value not found in the function list.");
  }

  return mod2Function.function(value);
}

export default mod2;
