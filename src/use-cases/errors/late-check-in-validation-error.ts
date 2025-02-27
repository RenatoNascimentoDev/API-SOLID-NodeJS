export class LateCheckInValidationError extends Error {
  constructor() {
    super(
      "The check-in can only be validated until 10 minutes of its creation."
    );
  }
}
