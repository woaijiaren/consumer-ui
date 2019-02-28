import { EnumMap } from '../../shared/utils/enum-map';

export enum InterviewChannelType {
  OnSite = 'OnSite',
  Video = 'Video',
}

export const interviewChannelTypes = new EnumMap<InterviewChannelType>([
  {
    id: InterviewChannelType.OnSite,
    title: '面谈',
  },
  {
    id: InterviewChannelType.Video,
    title: '视频',
  },
]);
