export class CreateTaskDto {
  title: string;
  description: string;
  status?: string = 'PENDING';
  createDate: Date;
  limitDate?: Date;
  usersTaskAssigned: [];
}
