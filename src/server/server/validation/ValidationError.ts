type ValidationErrorReason = {
  message: string;
  field: string;
}

export class ValidationError extends Error {
  private reasons = new Array<ValidationErrorReason>();

  constructor() {
    super("Validation failed");
  }

  public addReason(message: string, field: string) {
    this.reasons.push({message, field});
  }

  public hasReasons() {
    return this.reasons.length > 0;
  }

  public toJSON() {
    return {
      title: this.message,
      reasons: this.reasons,
    };
  }
}
