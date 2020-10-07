import { Recepie } from './../recepie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
recepie:Recepie[]=[
  new Recepie('A TEST Receipie','this is just test','assets\img\passport.jpg'),
];
  constructor() { }

  ngOnInit(): void {
  }

}
