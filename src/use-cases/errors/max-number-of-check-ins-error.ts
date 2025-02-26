export class MaxNumerOfCheckInsError extends Error {
  constructor() {
    super("Max number of check-ins reached.");
  }
}
