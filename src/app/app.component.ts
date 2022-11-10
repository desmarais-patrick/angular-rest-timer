import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rest Timer';
  isLoaded = false;

  ngOnInit(): void {
    this.isLoaded = true;
  }
}
