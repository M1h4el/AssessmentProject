import { Inject, Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Firestore } from 'firebase-admin/firestore';

@Injectable()
export class NotificationsService {
  constructor(
    @Inject('FIRESTORE') private readonly firestore: Firestore,
  ) {}

  async create(createNotificationDto: CreateNotificationDto) {
    const notificationRef = this.firestore.collection('notifications').doc();
    await notificationRef.set(createNotificationDto);
    return { id: notificationRef.id, ...createNotificationDto };
  }

  async findAll() {
    const snapshot = await this.firestore.collection('notifications').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async findOne(id: string) {
    const doc = await this.firestore.collection('notifications').doc(id).get();
    if (!doc.exists) {
      throw new Error('Notification not found');
    }
    return { id: doc.id, ...doc.data() };
  }

  async update(id: string, updateNotificationDto: UpdateNotificationDto) {
    const notificationRef = this.firestore.collection('notifications').doc(id);
    const plainData = { ...updateNotificationDto };
    await notificationRef.update(plainData);
    return { id, ...plainData };
  }

  async remove(id: string) {
    const notificationRef = this.firestore.collection('notifications').doc(id);
    await notificationRef.delete();
    return { id };
  }
}