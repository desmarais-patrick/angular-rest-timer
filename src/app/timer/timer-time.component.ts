import { Component, Input, OnChanges } from "@angular/core";
import { TimerState } from "./timer-state";

const DOWN_INDICATOR_ACTIVE_IMG_SRC = "/assets/down-indicator/Active.svg";
const DOWN_INDICATOR_INACTIVE_IMG_SRC = "/assets/down-indicator/Inactive.svg";

@Component({
    selector: "timer-time",
    templateUrl: "./timer-time.component.html",
    styleUrls: ["./timer-time.component.css"]
})
export class TimerTimeComponent implements OnChanges {
    @Input() timerState: TimerState = TimerState.Ready;
    @Input() minutesLeft: number = 1;
    
    isActiveTimer: boolean = false;
    downIndicatorImgSrc: string = DOWN_INDICATOR_INACTIVE_IMG_SRC;

    ngOnChanges(): void {
        this.isActiveTimer = this.timerState === TimerState.Paused || this.timerState === TimerState.Running;
        this.downIndicatorImgSrc = this.isActiveTimer ? DOWN_INDICATOR_ACTIVE_IMG_SRC :
            DOWN_INDICATOR_INACTIVE_IMG_SRC;
    }
}