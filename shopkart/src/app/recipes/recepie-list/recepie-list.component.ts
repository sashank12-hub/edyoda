import { Recepie } from './../recepie.model';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
@Output() recepieWasSelected=new EventEmitter<Recepie>()
  recepie:Recepie[]=[
  new Recepie('A TEST Receipie','this is just test','assets\img\passport.jpg'),
  new Recepie('A TESTttt Receipie','this is just testttt','assets\img\passport.jpg')
];
onRecepieSelected(item:Recepie){


}
  constructor() { }

  ngOnInit(): void {
  }

}
