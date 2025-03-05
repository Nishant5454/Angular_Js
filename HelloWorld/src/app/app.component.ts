import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // template: `<h2>Saurabh</h2>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  imgSrc = 'favicon.ico';//property binding
  title = 'ANGULAR STARTER';
  url = 'https://www.bridgelabz.com';

  ngOnInit() {
    this.title = 'ANGULAR STARTER By Saurabh';
  }

  onClick() {
    console.log('Button Clicked');
    window.open(this.url, '_blank');
  }
}