export interface Enrollable {
  enrollment: string;
  generateEnrollment(): string;
}