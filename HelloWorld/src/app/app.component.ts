import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl= 'image.jpg';
  url="https://www.bridgelabz.com/";
  
  ngOnInit(): void {
    this.title = 'HelloWorld From BridgeLabz';
  }
    onClick(event:Event):void{
      console.log("Save button is clicked!",  event);
      window.open(this.url, "_blank");// Done using Binding
}
}
