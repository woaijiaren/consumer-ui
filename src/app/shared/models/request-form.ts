import { BusinessType } from './business-types';
import { InterviewChannelType } from './interview-channel-types';
import { RequestStatus } from './request-status';

export class RequestForm {
  id?: number;
  timeCreated: Date;
  businessType: BusinessType;
  workerAge: string;
  workerRegion: string;
  workerOthers: string;
  customerPhone: string;
  customerName: string;
  interviewChannelType: InterviewChannelType;
  interviewPlace: string;
  interviewTime: string;
  status: RequestStatus;
}
