import { Pipe, PipeTransform } from '@angular/core';
import { WorkerType, workerTypes } from '../models/worker-types';

@Pipe({
  name: 'workerType',
})
export class WorkerTypePipe implements PipeTransform {

  transform(value: WorkerType): string {
    return workerTypes.lookup(value);
  }

}
