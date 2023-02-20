import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-rotulo',
  templateUrl: './card-rotulo.component.html',
  styleUrls: ['./card-rotulo.component.css']
})
export class CardRotuloComponent implements OnInit {
	@Input()
	gameRotulo:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
