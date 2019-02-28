import { EnumMap } from '../../shared/utils/enum-map';

export enum RequestStatus {
  Requested,
  Seeking,
  CalledBack,
  Canceled,
  CantFind,
  Closed,
}

export const requestStatus = new EnumMap<RequestStatus>([
  {
    id: RequestStatus.Requested,
    title: '已发起预约',
  },
  {
    id: RequestStatus.Seeking,
    title: '正在物色人选',
  },
  {
    id: RequestStatus.CalledBack,
    title: '已回呼',
  },
  {
    id: RequestStatus.Canceled,
    title: '客户取消',
  },
  {
    id: RequestStatus.CantFind,
    title: '未找到',
  },
  {
    id: RequestStatus.Closed,
    title: '已成交',
  },
]);
