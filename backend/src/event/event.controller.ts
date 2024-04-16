import { Controller, Delete, Get, Post, UseGuards, Put } from '@nestjs/common';
import { EventService } from './event.service';
import { AuthUserGuard } from '../auth/guards/auth.guard';

@Controller('event')
export class EventController {
  constructor(private eventService: EventService) {}

  @UseGuards(AuthUserGuard)
  @Post('/create')
  create() {}

  @UseGuards(AuthUserGuard)
  @Get('/get-event-by-user-id')
  findEventByUserId() {}

  @UseGuards(AuthUserGuard)
  @Delete()
  deleteEventByUserId() {}

  @UseGuards(AuthUserGuard)
  @Put()
  updateEventByUserId() {}
}
