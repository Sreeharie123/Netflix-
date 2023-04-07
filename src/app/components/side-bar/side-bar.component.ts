import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  onSide:boolean=true
  @Output() sideBar = new EventEmitter<boolean>();
  onSidebar(value:boolean){
    this.onSide=!value
    this.sideBar.emit(this.onSide)
  }

}
