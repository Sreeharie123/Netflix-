import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  onTrue:boolean=false;
  search?:string;
  imageValue:any;

  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor(private route:ActivatedRoute){
    this.imageValue=this.route.params
  }
  onClick(value:boolean){
    this.onTrue=!value
    this.newItemEvent.emit(this.onTrue)
  }
  onSubmit(data:NgForm){
    data.reset()
  }
}
