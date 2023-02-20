import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
	@Input()
	imagemCover: string = '';
	@Input()
	gameRotulo: string = '';
	@Input()
	tipoJogo: string = '';
	@Input()
	valorJogo: string = '';

	constructor() {}

	ngOnInit(): void {}
}
