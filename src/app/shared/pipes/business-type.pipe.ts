import { Pipe, PipeTransform } from '@angular/core';
import { BusinessType, businessTypes } from '../models/business-types';

@Pipe({
  name: 'businessType',
})
export class BusinessTypePipe implements PipeTransform {
  transform(value: BusinessType): string {
    return businessTypes.lookup(value);
  }
}
