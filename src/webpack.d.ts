declare module '*.ts' {
  const value: any;
  export default value;
}

declare var require: {
  context(path: string, deep: boolean, filter: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};
