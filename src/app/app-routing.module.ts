import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimerModule } from './timer/timer.module';
import { SettingsModule } from './settings/settings.module';

const routes: Routes = [
  { path: "**", redirectTo: "timer", pathMatch: "full" }
];

@NgModule({
  imports: [
    TimerModule,
    SettingsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
