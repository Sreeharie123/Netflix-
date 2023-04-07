import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  onTrue:boolean=false

  @Output() newItemEvent = new EventEmitter<boolean>();

  onClick(value:boolean){
    this.onTrue=!value
    this.newItemEvent.emit(this.onTrue)
  }
}
