import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
private users: object;
  constructor(private data: UserService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      console.log('We have new data!!!');
      this.users = data;
    });
  }
  firstClick() {
    this.data.firstClick();

    //console.log('Hello From first clickable Button!!!!')
  }
}
