import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { requestForms } from './request-form';
import { cloneDeep } from 'lodash';

export class MockDb implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    return {
      'request-forms': cloneDeep(requestForms),
    };
  }
}
