import { Inject, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Firestore } from 'firebase-admin/firestore';

@Injectable()
export class ProjectService {
  constructor(
    @Inject('FIRESTORE') private readonly firestore: Firestore,
  ) {}

  async create(nProject: CreateProjectDto) {

    const projectRef = this.firestore.collection('projects').doc();
    await projectRef.set(nProject);
    return { id: projectRef.id, ...nProject };

  }

  async findAll() {
    const snapshot = await this.firestore.collection('projects').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async findOne(id: string) {
    const doc = await this.firestore.collection('projects').doc(id).get();
    if (!doc.exists) {
      throw new Error('Project not found');
    }
    return { id: doc.id, ...doc.data() };
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const projectRef = this.firestore.collection('projects').doc(id);

    const doc = await projectRef.get();
    if (!doc.exists) {
      throw new Error('Project not found');
    }

    const updateData = updateProjectDto as { [key: string]: any };

    await projectRef.update(updateData);

    return { id, ...updateProjectDto };
  }

  async remove(id: string) {
    const projectRef = this.firestore.collection('projects').doc(id);
    await projectRef.delete();
    return { id };
  }
}
