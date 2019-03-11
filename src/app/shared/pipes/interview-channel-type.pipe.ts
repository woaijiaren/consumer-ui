import { Pipe, PipeTransform } from '@angular/core';
import { InterviewChannelType, interviewChannelTypes } from '../models/interview-channel-types';

@Pipe({
  name: 'interviewChannelType',
})
export class InterviewChannelTypePipe implements PipeTransform {
  transform(value: InterviewChannelType): string {
    return interviewChannelTypes.lookup(value);
  }
}
