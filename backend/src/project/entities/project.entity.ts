export enum ProjectStatus {
    PENDING='PENDING',
    IN_PROGRESS='IN_PROGRESS',
    DONE='DONE'
}

export class Project {
    id: string
    title: string
    description: string
    status?: string = 'PENDING'
}