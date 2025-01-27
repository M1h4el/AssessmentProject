import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Firestore } from 'firebase-admin/firestore';

@Injectable()
export class TaskService {

  constructor(
    @Inject('FIRESTORE') private readonly firestore: Firestore,
  ) {}


  async create(createTaskDto: CreateTaskDto) {
    const taskRef = this.firestore.collection('tasks').doc();
    await taskRef.set(createTaskDto);
    return { id: taskRef.id, ...createTaskDto };
  }

  async findAll() {
    const snapshot = await this.firestore.collection('tasks').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async findOne(id: string) {
    const doc = await this.firestore.collection('tasks').doc(id).get();
    if (!doc.exists) {
      throw new Error('Task not found');
    }
    return { id: doc.id, ...doc.data() };
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const taskRef = this.firestore.collection('tasks').doc(id);

    const doc = await taskRef.get();
    if (!doc.exists) {
      throw new Error('Task not found');
    }

    const updateData = updateTaskDto as { [key: string]: any };

    await taskRef.update(updateData);

    return { id, ...updateTaskDto };
  }

  async remove(id: string) {
    const taskRef = this.firestore.collection('tasks').doc(id);

    const doc = await taskRef.get();
    if (!doc.exists) {
      throw new Error('Task not found');
    }

    await taskRef.delete();
    return { id };
  }
}