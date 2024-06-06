import {
  Controller,
  Delete,
  Get,
  Post,
  UseGuards,
  Put,
  Body,
  Request,
} from '@nestjs/common';
import { EventService } from './event.service';
import { AuthUserGuard } from '../auth/guards/auth-user.guard';
import { CreateEventDto } from './libs/dto/create-event.dto';
import { DeleteEventDto } from './libs/dto/delete-event.dto';
import { UpdateEventDto } from './libs/dto/update-event.dto';

@Controller('event')
export class EventController {
  constructor(private eventService: EventService) {}

  @UseGuards(AuthUserGuard)
  @Post('/create')
  create(@Body() createEventDto: CreateEventDto, @Request() request: any) {
    return this.eventService.create(createEventDto, request.userId);
  }

  @UseGuards(AuthUserGuard)
  @Get('/get-event-by-user-id')
  findEventByUserId(@Request() request: any) {
    return this.eventService.findEventsByUserId(request.userId);
  }

  @UseGuards(AuthUserGuard)
  @Delete('/delete-event-by-user-id')
  deleteEventByUserId(
    @Body() deleteEventDto: DeleteEventDto,
    @Request() request: any,
  ) {
    return this.eventService.deleteEventByUserId(
      deleteEventDto.eventId,
      request.userId,
    );
  }

  @UseGuards(AuthUserGuard)
  @Put('/update-event-by-user-id')
  updateEventByUserId(
    @Body() updateEventDto: UpdateEventDto,
    @Request() request: any,
  ) {
    return this.eventService.updateEventByUserId(
      updateEventDto,
      request.userId,
    );
  }
}
