import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-useritem',
  templateUrl: './useritem.component.html',
  styleUrl: './useritem.component.css'
})
export class UseritemComponent {

  @Input() user:any;
  @Output() e = new EventEmitter<number>();

  deleteUser(id:number){
    this.e.emit(id);
  }
}
