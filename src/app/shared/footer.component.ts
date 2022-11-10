import { Component } from "@angular/core";

@Component({
    selector: "rt-footer",
    template: `
    <p class="footer">
        {{appName.toUpperCase()}}
    </p>
    `,
    styles: [`
    .footer {
        text-align: center;
        padding: 0 2rem;
    }
    `]
})
export class FooterComponent {
    appName: string = "Rest Timer";
}