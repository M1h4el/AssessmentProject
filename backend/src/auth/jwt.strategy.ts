import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extrae el token del encabezado Authorization
      ignoreExpiration: false, // Opcional: asegura que los tokens expirados no sean válidos
      secretOrKey: 'mySecretKey', // Cambia esto por una clave secreta segura
    });
  }

  // Método que se ejecuta al validar el token
  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
