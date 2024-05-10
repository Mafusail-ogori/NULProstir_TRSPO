import { Module } from '@nestjs/common';
import { TimetableService } from './timetable.service';
import { TimetableController } from './timetable.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeTableSubject } from './entities/timetable-subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TimeTableSubject])],
  providers: [TimetableService],
  controllers: [TimetableController],
})
export class TimetableModule {}
