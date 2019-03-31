import { ServiceModel } from '../models/service.model';

declare function require(path: string): string;

export const services: ServiceModel[] = [
  {
    id: 1,
    name: '保洁（小时工）',
    iconUrl: require('./services/hourly-worker/banner.jpg'),
    brief: '太累，不想做家务怎么办？',
    description: require('./services/hourly-worker/index.md'),
    bannerUrl: require('./services/hourly-worker/banner.jpg'),
  },
  {
    id: 2,
    name: '月嫂',
    iconUrl: '',
    brief: '别亏待自己，找专业的人帮忙！',
    description: require('./services/hourly-worker/index.md'),
    bannerUrl: require('./services/yue-sao/banner.jpg'),
  },
  {
    id: 5,
    name: '育儿嫂',
    iconUrl: '',
    brief: '不放心孩子？找个阿姨帮忙吧！',
    description: require('./services/hourly-worker/index.md'),
    bannerUrl: require('./services/yu-er-sao/banner.jpg'),
  },
  {
    id: 4,
    name: '敬老保姆',
    iconUrl: '',
    brief: '没空照顾爸妈？我们帮你尽孝！',
    description: require('./services/hourly-worker/index.md'),
    bannerUrl: require('./services/jing-lao-bao-mu/banner.jpg'),
  },
  {
    id: 3,
    name: '住家保姆',
    iconUrl: '',
    brief: '想吃好的又不想做？找我们！',
    description: require('./services/hourly-worker/index.md'),
    bannerUrl: require('./services/zhu-jia-bao-mu/banner.jpg'),
  },
];

export function serviceById(id: number): ServiceModel {
  return services.find(it => it.id === id);
}
