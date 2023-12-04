import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAssetDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: string;
}
