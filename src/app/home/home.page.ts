import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myName = "Kim Proce"
  myTrip = {"name":"resort Blue", "price": 420}

  constructor() {}

}
