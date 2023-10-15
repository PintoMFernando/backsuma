import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './caso-uso/empresa/empresa.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatosempresaModule } from './centralizador/centralizador.module';
import { join } from 'path';
import { CentralizadormesModule } from './centralizadormes/centralizadormes/centralizadormes.module';
import { CobroModule } from './cobro/cobro.module';
import { ObservacionesModule } from './observaciones/observaciones.module';
import { UserModule } from './user/cruge_user.module';



@Module({
  imports: [EmpresaModule,
            DatosempresaModule,
            CentralizadormesModule,
            CobroModule,
            ObservacionesModule,
            UserModule,
         
    
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5435,
        username: 'postgres',
        password: '1234',
        database: 'dyjdb',
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        autoLoadEntities:true,
        synchronize: true,
      }),
         
     
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
