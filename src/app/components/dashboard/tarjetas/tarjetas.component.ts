import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  tDispo: any[] = ['Carnet'];
 
  constructor() { }

  ngOnInit(): void {
  }

}
