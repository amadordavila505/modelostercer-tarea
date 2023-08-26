import { Controller } from "@nestjs/common";
import { Injectable } from "@nestjs/common"; // Importa el decorador Injectable
import { FilesService } from "./files.service"; // Asumiendo que tienes un archivo "files.service.ts"

@Controller('files')
export class FilesController { // Cambia el nombre de la clase a FilesController
    constructor(private readonly filesService: FilesService) {} // Asegúrate de que el nombre del servicio sea FilesService
}

@Injectable() // Agrega el decorador Injectable a tu servicio
export class FilesService {
    constructor(private readonly filesService: FilesService) {}
}
