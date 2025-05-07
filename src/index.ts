import mod2From0To1000 from "./0-1000";

export function mod2(value: number): number {
  if (isNaN(Number(value))) {
    throw new Error("Value must be a valid number.");
  }
  if (value < 0 || value > 1000) {
    throw new Error(
      "Currently, only values between 0 and 1000 are supported. We would love for you to continue contributing to the library. Please visit https://github.com/tmthan/mod2-troll.git to contribute. Thank you!"
    );
  }
  if (value >= 0 && value <= 1000) {
    return mod2From0To1000(value);
  }
  return 0;
}

export default mod2;
