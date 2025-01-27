import { Module, Global } from '@nestjs/common';
import { ProjectModule } from './project/project.module';
import { UsersModule } from './users/users.module';
import { NotificationsModule } from './notifications/notifications.module';
import { TasksModule } from './tasks/tasks.module';
import { FirebaseModule } from './firebase/firebase.module';
import { AuthModule } from './auth/auth.module';

@Global()
@Module({
  imports: [
    ProjectModule,
    UsersModule,
    NotificationsModule,
    TasksModule,
    FirebaseModule,
    AuthModule, // Aquí importamos el módulo Firebase
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
