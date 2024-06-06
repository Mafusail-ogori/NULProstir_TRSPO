import { CreateEvent } from './create-event.type';

export interface UpdateEvent extends CreateEvent {
  id: string;
}
