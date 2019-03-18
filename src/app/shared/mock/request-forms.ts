import { RequestFormModel } from '../models/request-form.model';
import { BusinessType } from '../models/business-types';
import { InterviewChannelType } from '../models/interview-channel-types';
import { RequestStatus } from '../models/request-status';

export const requestForms: RequestFormModel[] = [
  {
    id: 1,
    timeCreated: new Date('2019-01-01'),
    businessType: BusinessType.Maid,
    workerAge: '30~40岁',
    workerRegion: '东北人',
    workerOthers: '高中以上文化程度，会聊天',
    customerPhone: '13333333333',
    customerName: '张先生',
    interviewChannelType: InterviewChannelType.OnSite,
    interviewPlace: '通州梨园附近',
    interviewTime: '周六日全天，平时晚八点后',
    status: RequestStatus.Seeking,
  },
  {
    id: 2,
    timeCreated: new Date('2019-01-01'),
    businessType: BusinessType.Maid,
    workerAge: '30~40岁',
    workerRegion: '东北人',
    workerOthers: '高中以上文化程度，会聊天',
    customerPhone: '13333333333',
    customerName: '张先生',
    interviewChannelType: InterviewChannelType.OnSite,
    interviewPlace: '通州梨园附近',
    interviewTime: '周六日全天，平时晚八点后',
    status: RequestStatus.CalledBack,
  },
  {
    id: 2,
    timeCreated: new Date('2019-01-01'),
    businessType: BusinessType.Maid,
    workerAge: '30~40岁',
    workerRegion: '东北人',
    workerOthers: '高中以上文化程度，会聊天',
    customerPhone: '13333333333',
    customerName: '张先生',
    interviewChannelType: InterviewChannelType.OnSite,
    interviewPlace: '通州梨园附近',
    interviewTime: '周六日全天，平时晚八点后',
    status: RequestStatus.Canceled,
  },
];
