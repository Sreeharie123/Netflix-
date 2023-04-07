import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netFlix';
  onTrue:boolean=true
  onClick(event:boolean){
  this.onTrue=!event
  }
}
