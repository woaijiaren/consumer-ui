import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { requestForms } from './request-forms';
import { cloneDeep } from 'lodash';
import { orderForms } from './order-forms';

export class MockDb implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    return {
      'request-forms': cloneDeep(requestForms),
      'order-forms': cloneDeep(orderForms),
    };
  }
}
