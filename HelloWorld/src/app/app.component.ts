import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // template: `<h2>Saurabh</h2>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
<<<<<<< HEAD
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
=======
  imgSrc = 'favicon.ico';//property binding
  title = 'ANGULAR STARTER';
  url = 'https://www.bridgelabz.com';

  ngOnInit() {
    this.title = 'ANGULAR STARTER By Nishant';
  }

  onClick() {
    console.log('Button Clicked');
    window.open(this.url, '_blank');
  }
}
>>>>>>> uc4_EventBinding
