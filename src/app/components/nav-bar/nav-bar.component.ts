import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  onTrue:boolean=false;
  search?:string;

  @Output() newItemEvent = new EventEmitter<boolean>();

  onClick(value:boolean){
    this.onTrue=!value
    this.newItemEvent.emit(this.onTrue)
  }
  onSubmit(data:NgForm){
    data.reset()
  }
}
