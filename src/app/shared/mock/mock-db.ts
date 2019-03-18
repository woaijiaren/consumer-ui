import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { requestForms } from './request-forms';
import { cloneDeep } from 'lodash';
import { orderForms } from './order-forms';
import { articles } from './articles';
import { services } from './services';

export class MockDb implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    return {
      'request-forms': cloneDeep(requestForms),
      'order-forms': cloneDeep(orderForms),
      articles: cloneDeep(articles),
      services: cloneDeep(services),
    };
  }
}
