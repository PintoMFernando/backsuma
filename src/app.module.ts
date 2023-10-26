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
import { PuntoventaModule } from './puntoventa/puntoventa.module';

import { VenatatalonarioModule } from './ventatalonario/venatatalonario.module';

import { SumatalonarioModule } from './sumatalonario/sumatalonario.module';
import { EmpresadatosinicialesModule } from './empresadatosiniciales/empresadatosiniciales.module';
import { ArchivostalonarioelectronicoModule } from './archivostalonarioelectronico/archivostalonarioelectronico.module';
import { ComprassumasModule } from './comprassumas/comprassumas.module';

import { ComprassumasdetalleModule } from './comprassumasdetalle/comprassumasdetalle.module';


@Module({
  imports: [EmpresaModule,
            DatosempresaModule,
            CentralizadormesModule,
            CobroModule,
            ObservacionesModule,
            UserModule,
            PuntoventaModule,
            VenatatalonarioModule,
            SumatalonarioModule,
            EmpresadatosinicialesModule,
            ArchivostalonarioelectronicoModule,
            ComprassumasModule,
            ComprassumasdetalleModule,

         
    
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
