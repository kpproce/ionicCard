import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss'],
})
export class Card1Component implements OnInit {

  myName = "Kim Procé"

  constructor() { }
  ngOnInit() {}

}
