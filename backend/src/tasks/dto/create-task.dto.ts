export class CreateTaskDto {
    title: string;
  description: string;
  status?: string = 'PENDING';
  dueDate: Date;
}
