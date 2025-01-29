export class CreateNotificationDto {
    notificationType: string;
    title: string;
    message: string;
    createdAt: Date;
    userId: string;
}
