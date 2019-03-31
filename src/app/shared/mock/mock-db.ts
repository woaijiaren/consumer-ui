import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { requestForms } from './request-forms';
import { cloneDeep } from 'lodash';
import { orderForms } from './order-forms';
import { articles } from './articles';
import { services } from './services';
import { users } from './users';

export class MockDb implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    return {
      'request-forms': cloneDeep(requestForms),
      'order-forms': cloneDeep(orderForms),
      articles: cloneDeep(articles),
      services: cloneDeep(services),
      users: cloneDeep(users),
    };
  }
}
