import {
  IsNumber,
  IsString,
  Min,
  Max,
  IsUrl,
  IsOptional,
} from 'class-validator';

export class CreateEventDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  startsAt: Date;
  @IsString()
  endsAt: Date;
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(500)
  participantMaxCount?: number;
  @IsOptional()
  @IsUrl()
  websiteURL?: string;
}
