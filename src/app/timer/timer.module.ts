import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TimerComponent } from './timer.component';
import { TimerIconComponent } from './timer-icon.component';
import { TimeLeftPipe } from './time-left.pipe';
import { TimerTimeComponent } from './timer-time.component';

const routes: Routes = [
    { path: "timer", component: TimerComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TimerComponent,
    TimerIconComponent,
    TimerTimeComponent,
    TimeLeftPipe,
  ],
  exports: [
    TimerComponent
  ]
})
export class TimerModule { }
