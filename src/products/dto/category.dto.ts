import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    categoria: string;

    @IsNotEmpty()
    user_id: number;
}
