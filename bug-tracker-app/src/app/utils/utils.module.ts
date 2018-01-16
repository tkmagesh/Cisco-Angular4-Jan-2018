import { NgModule } from '@angular/core';

import { TrimTextPipe } from './pipes/trimText.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ElapsedPipe } from './pipes/elapsed.pipe';

const PRIVATE_PIPES = [

];
const PUBLIC_PIPES = [
	TrimTextPipe
    , SortPipe
    , ElapsedPipe
];

@NgModule({
	declarations : [...PRIVATE_PIPES, ...PUBLIC_PIPES],
	providers : [],
	imports : [],
	exports : PUBLIC_PIPES
})
export class UtilsModule{}