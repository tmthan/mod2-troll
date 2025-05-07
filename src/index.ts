import div2From0To1000 from "./0-1000";

export function div2(value: number): number {
  if (isNaN(Number(value))) {
    throw new Error("Value must be a valid number.");
  }
  if (value < 0 || value > 1000) {
    throw new Error(
      "Currently, only values between 0 and 1000 are supported. We would love for you to continue contributing to the library. Please visit https://github.com/tmthan/div2 to contribute. Thank you!"
    );
  }
  if (value >= 0 && value <= 1000) {
    return div2From0To1000(value);
  }
  return 0;
}

export default div2;
