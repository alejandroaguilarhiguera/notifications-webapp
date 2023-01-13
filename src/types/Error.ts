export interface ValidationError {
  field: string;
  message: string;
  value?: string | number | boolean;
}

export interface ResponseValidationError {
  message: string;
  validationErrors: ValidationError[];
}
