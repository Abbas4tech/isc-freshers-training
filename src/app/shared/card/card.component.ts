import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'isc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() backdrop!: boolean;
  @Input() maxWidth!: string;
  constructor() {}

  ngOnInit(): void {}
}
