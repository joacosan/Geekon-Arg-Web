import { Component, Input, OnInit } from '@angular/core';
import { Marcas } from './dataMarcas';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  
  @Input() data:any;

  constructor() {
    this.data = Marcas;
  }
  ngOnInit(): void {

  }

  goTo(to:string):string {
    return to === 'NUESTRAS' ? to.toLowerCase().trim() + 'MARCAS' : to.toLowerCase().trim();
  }

}

