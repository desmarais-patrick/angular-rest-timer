import { Component, Input } from "@angular/core";
import { TimerLevel } from "./timer-level";
import { TimerState } from "./timer-state";

@Component({
    templateUrl: "./timer.component.html"
})
export class TimerComponent {
    @Input() appTitle: string = "";

    timerLevel: TimerLevel = TimerLevel.Pct50;
    timerState: TimerState = TimerState.Running;
}