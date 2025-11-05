import { Component } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {

  listUsers=[
    {id:1,nom:"Doe",prenom:"John",email:"john.doe@example.com"},
    {id:2,nom:"Smith",prenom:"Jane",email:"jane.smith@example.com"},
    {id:3,nom:"Johnson",prenom:"Emily",email:"emily.johnson@example.com"}
  ];

  deleteU(id:number){
    this.listUsers=this.listUsers.filter(u=>u.id!=id);
  }
}
