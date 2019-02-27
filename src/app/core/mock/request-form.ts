import { InterviewChannelType, RequestForm, WorkerType } from '../../request/models/request-form';

export const requestForms: RequestForm[] = [
  {
    id: 1,
    timeCreated: new Date('2019-01-01'),
    workerType: WorkerType.Maid,
    workerAge: '30~40岁',
    workerRegion: '东北人',
    workerOthers: '高中以上文化程度，会聊天',
    customerPhone: '13333333333',
    customerName: '张先生',
    interviewChannelType: InterviewChannelType.OnSite,
    interviewPlace: '通州梨园附近',
    interviewTime: '周六日全天，平时晚八点后',
  },
];
