import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Firestore } from 'firebase-admin/firestore';

@Injectable()
export class UsersService {
  
  constructor(
    @Inject('FIRESTORE') private readonly firestore: Firestore,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userQuerySnapshot = await this.firestore
      .collection('users')
      .where('email', '==', createUserDto.email)
      .get();

    if (!userQuerySnapshot.empty) {
      throw new ConflictException('User with this email already exists');
    }

    const userRef = this.firestore.collection('users').doc();
    await userRef.set(createUserDto);
    
    return { id: userRef.id, ...createUserDto };
  }

  async findAll() {
    const snapshot = await this.firestore.collection('users').get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  async findOne(id: string) {
    const doc = await this.firestore.collection('users').doc(id).get();
    if (!doc.exists) {
      throw new Error('User not found');
    }
    return { id: doc.id, ...doc.data() };
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const userRef = this.firestore.collection('users').doc(id);
    const updateData = updateUserDto as { [key: string]: any };
    await userRef.update(updateData);
    return { id, ...updateUserDto };
  }

  async remove(id: string) {
    const userRef = this.firestore.collection('users').doc(id);
    await userRef.delete();
    return { id };
  }
}
