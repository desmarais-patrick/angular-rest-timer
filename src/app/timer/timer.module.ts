import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TimerComponent } from './timer.component';

const routes: Routes = [
    { path: "timer", component: TimerComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TimerComponent
  ],
  exports: [
    TimerComponent
  ]
})
export class TimerModule { }
