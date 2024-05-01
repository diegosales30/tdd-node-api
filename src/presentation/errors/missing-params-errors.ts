export class MissingParamsErrors extends Error {
  constructor(paramName: string) {
    super(`Missing params: ${paramName}`);
    this.name = "MissingParamsErrors";
  }
}