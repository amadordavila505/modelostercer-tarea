import { Module, Controller } from '@nestjs/common';
import { FilesController } from './controllers/files.controllers';
import { filesService } from './services/files.service';

@Module({
    controllers: [FilesController],
    providers:[filesService],
})
export class FilesModule {}