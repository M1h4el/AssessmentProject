export class CreateProjectDto {
    title:string
    description:string
    status?:string = "PENDING"
    dueDate: Date;
}
