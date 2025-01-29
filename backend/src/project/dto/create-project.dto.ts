export class CreateProjectDto {
    title:string
    description:string
    status?:string = "PENDING"
    createdAt: Date;
    userId: string;
    collaborators: string[];
}
