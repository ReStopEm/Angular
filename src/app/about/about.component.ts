import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  ownerName = 'Sasha';
  

  
  languages = ['c#','c++','Pascal', 'Vasik','Assembler'];
    constructor() { }

ngOnInit() {
}

}
