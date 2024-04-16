export interface CreateEvent {
  name: string;
  description: string;
  startsAt: Date;
  endsAt: Date;
  participantMaxCount?: number;
  websiteURL?: string;
}
