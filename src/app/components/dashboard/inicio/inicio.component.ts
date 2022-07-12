import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: "001", name: 'Marcos', weight: "Lopez", symbol: 'Activo'},
];
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  //EN "DISPLAYEDCOLUMS"(linea de abajo)TIENE QUE HACER MACH CON db y LOS NOMBRES QUE FIGURAN EN COMPONENT.HTML"
  displayedColumns: string[] = ['socio', 'nombre', 'apellido', 'estado'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }


}


