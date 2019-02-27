export enum WorkerType {
  YueSao = 'YueSao',
  YuErSao = 'YuErSao',
  Maid = 'Maid',
  HourlyWorker = 'HourlyWorker',
}

export enum InterviewChannelType {
  OnSite = 'OnSite',
  Video = 'Video',
}

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
}
