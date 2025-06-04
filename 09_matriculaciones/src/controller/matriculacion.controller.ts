import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MatriculacionService } from 'src/service/matriculacion.service';

@Controller('matriculacions')
export class MatriculacionController {
  constructor(private readonly matriculacionService: MatriculacionService) {}

  
}
