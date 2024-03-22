export interface SuccessResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}
