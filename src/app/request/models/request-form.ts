import { WorkerType } from './worker-types';
import { InterviewChannelType } from './interview-channel-types';
import { RequestStatus } from './request-status';

export class RequestForm {
  id?: number;
  timeCreated: Date;
  workerType: WorkerType;
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
