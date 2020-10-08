import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recepie } from '../../recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
 @Input()item:Recepie;
 @Output() recepieSelected =new EventEmitter<void>();

onSelected(){
  this.recepieSelected.emit();
}

  constructor() { }

  ngOnInit(): void {
  }

}
