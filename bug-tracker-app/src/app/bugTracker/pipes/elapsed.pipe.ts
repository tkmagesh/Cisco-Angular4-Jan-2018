import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
	name : 'elapsed'
})
export class ElapsedPipe{
	transform(data) : string{
		return moment(data).fromNow();
	}
}