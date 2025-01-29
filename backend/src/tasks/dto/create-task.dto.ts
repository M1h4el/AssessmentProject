export class CreateTaskDto {
  title: string;
  description: string;
  status?: string = 'PENDING';
  createdAt: Date;
  limitDate?: Date;
  userId: string;
  idProject: string;
  collaborators: string[];
}