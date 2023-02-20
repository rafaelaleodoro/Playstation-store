import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-preco',
  templateUrl: './card-preco.component.html',
  styleUrls: ['./card-preco.component.css']
})
export class CardPrecoComponent implements OnInit {

	@Input()
	tipoJogo: string = "Digital PS4"
	@Input()
	valorJogo:string = "R$ 129,99"
  constructor() { }

  ngOnInit(): void {
  }

}
