import { Pipe, PipeTransform } from '@angular/core';
import { requestStatus, RequestStatus } from '../models/request-status';

@Pipe({
  name: 'requestStatus',
})
export class RequestStatusPipe implements PipeTransform {

  transform(value: RequestStatus): string {
    return requestStatus.lookup(value);
  }

}
