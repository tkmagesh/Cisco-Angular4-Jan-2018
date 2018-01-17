import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { UtilsModule } from './utils/utils.module'

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugStatsComponent } from './bugTracker/views/bugStats/bugStats.component';
import { BugEditComponent } from './bugTracker/views/bugEdit/bugEdit.component';
import { BugDetailsComponent } from './bugTracker/views/bugDetails/bugDetails.component';

import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';
import { BugOperationsService } from './bugTracker/services/bugOperations.service';
import { BugStorageService } from './bugTracker/services/bugStorage.service';
import { BugServerService } from './bugTracker/services/bugServer.service';

let routes : Routes = [
    {path : '', redirectTo : '/bugs', pathMatch : 'full'},
    {path : 'add', component : BugEditComponent},
    {path : 'details/:id', component : BugDetailsComponent},
    {path : 'bugs', component : BugTrackerComponent}
]

@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , ClosedCountPipe
    , BugStatsComponent
    , BugEditComponent
    , BugDetailsComponent
  ],
  imports: [
    BrowserModule
    , UtilsModule
    , HttpModule
    , RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    BugOperationsService
    , BugStorageService
    , BugServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
