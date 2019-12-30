import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public items: Array<{ name: string; owner: string; service: string; phone: string }> = [];
  constructor() {

    this.items.push({name: 'Rocko', service: 'corte', owner: 'Glenn', phone: '6462604006' });
    this.items.push({name: 'Julian', service: 'baño', owner: 'Ernesto', phone: '2342342342' });
    this.items.push({name: 'Blu', service: 'anything', owner: 'Aritza', phone: '5362723723' });
  }

}
