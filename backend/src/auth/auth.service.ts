import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Firestore } from '@google-cloud/firestore';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject('FIRESTORE') private readonly firestore: Firestore,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const userSnapshot = await this.firestore.collection('users').where('email', '==', email).get();

    if (userSnapshot.empty) {
    }

    const userDoc = userSnapshot.docs[0];
    const userData = userDoc.data();

    if (userData.password === password) {
      return { userId: userDoc.id, email: userData.email };
    }

    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
