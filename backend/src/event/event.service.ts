import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Repository } from 'typeorm';
import { UpdateEvent } from './libs/types/update-event.type';
import { CreateEvent } from './libs/types/create-event.type';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
  ) {}

  async create(createEvent: CreateEvent, userId: string) {
    const existEvent = await this.eventRepository.findOne({
      where: {
        name: createEvent.name,
        creatorId: userId,
      },
    });
    if (existEvent) {
      throw new BadRequestException('Duplicated Data');
    }
    return await this.eventRepository.save({
      name: createEvent.name,
      description: createEvent.description,
      startAt: createEvent.startsAt,
      endsAt: createEvent.endsAt,
      websiteURL: createEvent.websiteURL,
      participantMaxCount: createEvent.participantMaxCount,
      creatorId: userId,
    });
  }

  async findEventsByUserId(userId: string) {
    const foundEvents = await this.eventRepository.find({
      where: {
        creatorId: userId,
      },
    });
    if (foundEvents) {
      return foundEvents;
    }
    throw new NotFoundException('Events not found');
  }

  async deleteEventByUserId(eventId: string, userId: string) {
    const existEvent = await this.eventRepository.findOne({
      where: {
        creatorId: userId,
        id: eventId,
      },
    });
    if (existEvent) {
      return await this.eventRepository.delete(eventId);
    }
    throw new NotFoundException('Event to delete not found');
  }

  async updateEventByUserId(updateEvent: UpdateEvent, userId: string) {
    const existEvent = await this.eventRepository.findOne({
      where: {
        id: updateEvent.id,
        creatorId: userId,
      },
    });
    if (existEvent) {
      return await this.eventRepository.update(existEvent.id, updateEvent);
    }
    throw new NotFoundException('Event to update not found');
  }
}
