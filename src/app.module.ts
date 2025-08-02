import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './user/user.module';
import { SettingsModule } from './settings/settings.module';
import { PlansModule } from './plans/plans.module';
import { ChatModule } from './chat/chat.module';
import { GoogleCalendarModule } from './google-calendar/google-calendar.module';
import { ConfigModule } from '@nestjs/config';
import { SpeechModule } from './speech/speech.module';
import { User } from './user/entities/user.entity';
import { Chat } from './chat/entities/chat.entity';
import { GoogleCalendarToken } from './google-calendar/entities/google-calendar.entity';


@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'bookd',
    //   database: 'bookd',
    //   entities: [__dirname + '/../**/*.entity.{ts,js}'],

    //   synchronize: false,
    // }),
     TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST, // Use the PG_HOST from env
      port: 5432, // Default PostgreSQL port
      username: process.env.PG_USER, // Use PG_USER from env
      password: process.env.DB_PASSWORD, // Use DB_PASSWORD from env
      database: 'railway', // Name of the database
      autoLoadEntities: true, // Automatically load all entities (if you have any)
      synchronize: true, // Automatically sync schema with the database (recommended for dev)
      logging: true, // Enable logging of queries for debugging
      ssl: false, // Disable SSL (set to true if you use SSL)
      extra: {
        connectionLimit: 10, // Set connection limit to 10
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    AuthModule,
    SettingsModule,
    PlansModule,
    ChatModule,
    GoogleCalendarModule,
    SpeechModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
