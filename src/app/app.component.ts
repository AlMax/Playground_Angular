import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any = '';
  welcome_visible: boolean = false;

  /*ngOnInit(){
    setTimeout(() => {
      this.welcome_visible = true;
    }, 3000);
  }*/
}
