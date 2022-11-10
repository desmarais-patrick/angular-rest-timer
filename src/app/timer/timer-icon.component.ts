import { Component, Input, OnChanges } from "@angular/core";
import { TimerLevel } from "./timer-level";

const PATH_PREFIX = "/assets/timer-icons/";
const TIMER_ICONS = {
    [TimerLevel.Full]: PATH_PREFIX + "Full.svg",
    [TimerLevel.Pct90]: PATH_PREFIX + "Pct90.svg",
    [TimerLevel.Pct50]: PATH_PREFIX + "Pct50.svg",
    [TimerLevel.Pct10]: PATH_PREFIX + "Pct10.svg",
    [TimerLevel.Empty]: PATH_PREFIX + "Empty.svg"
};

@Component({
    selector: "timer-icon",
    templateUrl: "./timer-icon.component.html",
    styleUrls: ["./timer-icon.component.css"]
})
export class TimerIconComponent implements OnChanges {
    @Input() isMinified: boolean = false;
    @Input() timeLeftLevel: TimerLevel = TimerLevel.Full;
    @Input() appTitle: string = "";

    imgSrc: string = TIMER_ICONS[TimerLevel.Full];

    ngOnChanges(): void {
        this.imgSrc = TIMER_ICONS[this.timeLeftLevel];
    }
}