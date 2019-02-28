import { EnumMap } from '../../shared/utils/enum-map';

export enum WorkerType {
  YueSao = 'YueSao',
  YuErSao = 'YuErSao',
  Maid = 'Maid',
  HourlyWorker = 'HourlyWorker',
}

export const workerTypes = new EnumMap<WorkerType>([
  {
    id: WorkerType.YueSao,
    title: '月嫂',
  },
  {
    id: WorkerType.YuErSao,
    title: '育儿嫂',
  },
  {
    id: WorkerType.Maid,
    title: '保姆',
  },
  {
    id: WorkerType.HourlyWorker,
    title: '小时工',
  },
]);
