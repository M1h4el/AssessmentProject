import { Module, Global } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import * as firebaseAccount from '../config/firebaseAccount.json';

@Global() // Hacerlo disponible en toda la aplicación sin necesidad de importarlo en cada módulo
@Module({
  providers: [
    {
      provide: 'FIREBASE_ADMIN',
      useFactory: () => {
        if (!admin.apps.length) {
          // Inicializar Firebase si no está ya inicializado
          return admin.initializeApp({
            credential: admin.credential.cert(firebaseAccount as ServiceAccount),
          });
        }
        return admin.app(); // Retornar la app inicializada
      },
    },
    {
      provide: 'FIRESTORE',
      useFactory: () => {
        return admin.firestore(); // Exponer Firestore como un proveedor inyectable
      },
    },
  ],
  exports: ['FIREBASE_ADMIN', 'FIRESTORE'], // Exportar los servicios para otros módulos
})
export class FirebaseModule {}