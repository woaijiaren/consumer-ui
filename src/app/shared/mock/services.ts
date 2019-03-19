import { ServiceModel } from '../models/service.model';

declare function require(path: string): string;

export const services: ServiceModel[] = [
  {
    id: 1,
    name: '保洁（小时工）',
    iconUrl: '',
    brief: '日常家居保洁',
    description: require('./services/hourly-worker/index.md'),
    bannerUrl: require('./services/hourly-worker/banner.jpg'),
  },
];

export function serviceById(id: number): ServiceModel {
  return services.find(it => it.id === id);
}
