import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl= 'image.jpg';
  ngOnInit(): void {
    this.title = 'HelloWorld From BridgeLabz';// Done using Binding
}
}
