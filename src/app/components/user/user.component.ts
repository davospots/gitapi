
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Output() emitSearch = new EventEmitter<any>()
  

  userQuery!: string;
  username = "";
  

  constructor() { }

  search(event: any) {
    this.username = event.target.value
    this.emitSearch.emit(this.username)
    console.log(this.username)
  }

  

  ngOnInit(): void {
  }

}
