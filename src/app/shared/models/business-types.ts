import { EnumMap } from '../utils/enum-map';

export enum BusinessType {
  YueSao = 'YueSao',
  YuErSao = 'YuErSao',
  Maid = 'Maid',
  HourlyWorker = 'HourlyWorker',
}

export const businessTypes = new EnumMap<BusinessType>([
  {
    id: BusinessType.YueSao,
    title: '月嫂',
  },
  {
    id: BusinessType.YuErSao,
    title: '育儿嫂',
  },
  {
    id: BusinessType.Maid,
    title: '保姆',
  },
  {
    id: BusinessType.HourlyWorker,
    title: '小时工',
  },
]);
