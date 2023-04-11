import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Users } from 'src/app/models/users';
import { TMDBServiceService } from 'src/app/services/tmdbservice.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  users?:Observable<User[]>;

  onSide:boolean=true
  @Output() sideBar = new EventEmitter<boolean>();
  onSidebar(value:boolean){
    this.onSide=!value
    this.sideBar.emit(this.onSide)
  }

  constructor(private tmdbSerevice:TMDBServiceService){}


ngOnInit(): void {
  this.users= this.tmdbSerevice.users()
}

}
