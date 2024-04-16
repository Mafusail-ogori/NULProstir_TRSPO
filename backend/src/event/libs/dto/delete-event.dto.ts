import { IsUUID } from 'class-validator';

export class DeleteEventDto {
  @IsUUID()
  id: string;
}
