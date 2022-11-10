import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';

import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path: "timer", component: TimerComponent },
  { path: "settings", component: SettingsComponent },
  { path: "**", redirectTo: "timer", pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [
    TimerComponent,
    SettingsComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
